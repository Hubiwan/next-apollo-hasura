import { HttpLink, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import fetch from 'isomorphic-unfetch'
import ws from 'isomorphic-ws'
import { getSession } from 'next-auth/client'
import { SubscriptionClient } from 'subscriptions-transport-ws'

import type { ServerError } from '@apollo/client'

// Cache auth token when running on client
let authToken: string | undefined

export async function getAuthHeaders(token?: string) {
	if (typeof window === 'undefined') {
		// Happens on server
		return token ? { authorization: `Bearer ${token}` } : undefined
	} else {
		// Happens on client
		const _authToken = authToken ?? (await getSession())?.authToken
		if (!authToken && _authToken) authToken = _authToken
		return _authToken
			? { authorization: `Bearer ${_authToken}` }
			: undefined
	}
}

function withToken(token?: string) {
	return setContext(async (_operation, { headers = {} }) => {
		const authHeaders = await getAuthHeaders(token)
		return authHeaders
			? { headers: { ...headers, ...authHeaders } }
			: { headers }
	})
}

function errorLink() {
	return onError(({ networkError, graphQLErrors }) => {
		if (networkError) {
			if (networkError.name === 'ServerError') {
				if ((networkError as ServerError).statusCode === 401) {
					// eslint-disable-next-line
					console.log(`[Network error]: ${networkError}`)
					// Reset cached auth token on authentication error
					authToken = undefined
				}
			}
		}

		if (graphQLErrors) {
			graphQLErrors.forEach(({ message, locations, path }) => {
				// eslint-disable-next-line
				console.log(
					`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
				)
			})
		}
	})
}

function createAuthLink(token?: string) {
	return withToken(token).concat(errorLink())
}

function createHttpLink(token?: string) {
	const authLink = createAuthLink(token)
	const httpLink = new HttpLink({
		uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
		fetch
	})

	return authLink.concat(httpLink)
}

function createWSLink() {
	return new WebSocketLink(
		new SubscriptionClient(
			// eslint-disable-next-line
			process.env.NEXT_PUBLIC_GRAPHQL_WS!,
			{
				lazy: true,
				reconnect: true,
				connectionParams: async () => {
					const authHeaders = await getAuthHeaders()
					return authHeaders ? { headers: { ...authHeaders } } : null
				},
				connectionCallback: errors => {
					errors.forEach(error => {
						// eslint-disable-next-line
						console.log(error)
					})
				}
			},
			ws
		)
	)
}

export function createApolloLink(token?: string) {
	return typeof window === 'undefined'
		? createHttpLink(token)
		: split(
				({ query }) => {
					const definition = getMainDefinition(query)
					return (
						definition.kind === 'OperationDefinition' &&
						definition.operation === 'subscription'
					)
				},
				createWSLink(),
				createHttpLink()
		  )
}
