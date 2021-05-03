import { InMemoryCache } from '@apollo/client'

export function createApolloCache() {
	return new InMemoryCache()
}
