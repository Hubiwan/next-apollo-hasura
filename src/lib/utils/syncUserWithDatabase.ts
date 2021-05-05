import { SyncUserwithDatabaseDocument } from '__generated__'
import { initializeApolloClient } from 'config/initializeApolloClient'

import type { SyncUserwithDatabaseMutationVariables } from '__generated__'

export async function syncUserWithDatabase(
	variables: SyncUserwithDatabaseMutationVariables
) {
	const apolloClient = initializeApolloClient()
	const adminSecret = process.env.HASURA_GRAPHQL_ADMIN_SECRET

	await apolloClient.mutate({
		mutation: SyncUserwithDatabaseDocument,
		variables,
		context: { headers: { 'x-hasura-admin-secret': adminSecret } }
	})
}
