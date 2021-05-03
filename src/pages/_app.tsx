import { ApolloProvider } from '@apollo/client'
import { Provider as NextAuthProvider } from 'next-auth/client'

import { useApollo } from 'hooks'

import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps)

	return (
		<NextAuthProvider session={pageProps.session}>
			<ApolloProvider client={apolloClient}>
				<Component {...pageProps} />
			</ApolloProvider>
		</NextAuthProvider>
	)
}

export default App
