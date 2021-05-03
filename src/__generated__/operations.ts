import * as Types from './schemas'

export type SyncUserwithDatabaseMutationVariables = Types.Exact<{
	id?: Types.Maybe<Types.Scalars['String']>
	authProvider?: Types.Maybe<Types.Scalars['String']>
	name?: Types.Maybe<Types.Scalars['String']>
	email?: Types.Maybe<Types.Scalars['String']>
}>

export type SyncUserwithDatabaseMutation = { __typename?: 'mutation_root' } & {
	insert_user_one?: Types.Maybe<
		{ __typename?: 'user' } & Pick<
			Types.User,
			| 'id'
			| 'auth_provider'
			| 'name'
			| 'email'
			| 'updated_at'
			| 'created_at'
		>
	>
}
