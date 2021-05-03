import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from './operations'
const defaultOptions = {}

export const SyncUserwithDatabaseDocument = gql`
	mutation syncUserwithDatabase(
		$id: String
		$authProvider: String
		$name: String
		$email: String
	) {
		insert_user_one(
			object: {
				id: $id
				auth_provider: $authProvider
				name: $name
				email: $email
			}
			on_conflict: {
				constraint: user_pkey
				update_columns: [name, email]
			}
		) {
			id
			auth_provider
			name
			email
			updated_at
			created_at
		}
	}
`
export type SyncUserwithDatabaseMutationFn = Apollo.MutationFunction<
	Types.SyncUserwithDatabaseMutation,
	Types.SyncUserwithDatabaseMutationVariables
>

/**
 * __useSyncUserwithDatabaseMutation__
 *
 * To run a mutation, you first call `useSyncUserwithDatabaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSyncUserwithDatabaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [syncUserwithDatabaseMutation, { data, loading, error }] = useSyncUserwithDatabaseMutation({
 *   variables: {
 *      id: // value for 'id'
 *      authProvider: // value for 'authProvider'
 *      name: // value for 'name'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSyncUserwithDatabaseMutation(
	baseOptions?: Apollo.MutationHookOptions<
		Types.SyncUserwithDatabaseMutation,
		Types.SyncUserwithDatabaseMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<
		Types.SyncUserwithDatabaseMutation,
		Types.SyncUserwithDatabaseMutationVariables
	>(SyncUserwithDatabaseDocument, options)
}
export type SyncUserwithDatabaseMutationHookResult = ReturnType<
	typeof useSyncUserwithDatabaseMutation
>
export type SyncUserwithDatabaseMutationResult = Apollo.MutationResult<Types.SyncUserwithDatabaseMutation>
export type SyncUserwithDatabaseMutationOptions = Apollo.BaseMutationOptions<
	Types.SyncUserwithDatabaseMutation,
	Types.SyncUserwithDatabaseMutationVariables
>
