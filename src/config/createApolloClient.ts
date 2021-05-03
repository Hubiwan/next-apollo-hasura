import { ApolloClient } from '@apollo/client'

import { createApolloCache } from './createApolloCache'
import { createApolloLink } from './createApolloLink'

export function createApolloClient(token?: string) {
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: createApolloLink(token),
		cache: createApolloCache()
	})
}
