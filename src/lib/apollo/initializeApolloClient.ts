import merge from 'deepmerge'
import isEqual from 'lodash.isequal'

import { createApolloClient } from './createApolloClient'

import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject>

export function initializeApolloClient(
	initialState?: NormalizedCacheObject,
	token?: string
) {
	const _apolloClient = apolloClient ?? createApolloClient(token)

	if (initialState) {
		const existingCache = _apolloClient.extract()

		const data = merge(initialState, existingCache, {
			arrayMerge: (destinationArray, sourceArray) => [
				...sourceArray,
				...destinationArray.filter(d =>
					sourceArray.every(s => !isEqual(d, s))
				)
			]
		})

		_apolloClient.cache.restore(data)
	}

	if (typeof window === 'undefined') return _apolloClient

	if (!apolloClient) apolloClient = _apolloClient
	return _apolloClient
}
