import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

export function passApolloState(
	client: ApolloClient<NormalizedCacheObject>,
	pageProps: any = { props: {} }
) {
	pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()

	return pageProps
}
