import { useMemo } from 'react'

import { APOLLO_STATE_PROP_NAME, initializeApolloClient } from 'lib/apollo'

import type { NormalizedCacheObject } from '@apollo/client'

export function useApollo(pageProps: any) {
	const initialState = pageProps[APOLLO_STATE_PROP_NAME] as
		| NormalizedCacheObject
		| undefined

	const apolloClient = useMemo(() => initializeApolloClient(initialState), [
		initialState
	])

	return apolloClient
}
