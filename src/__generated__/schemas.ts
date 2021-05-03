export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	timestamptz: any
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
	_eq?: Maybe<Scalars['String']>
	_gt?: Maybe<Scalars['String']>
	_gte?: Maybe<Scalars['String']>
	/** does the column match the given case-insensitive pattern */
	_ilike?: Maybe<Scalars['String']>
	_in?: Maybe<Array<Scalars['String']>>
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: Maybe<Scalars['String']>
	_is_null?: Maybe<Scalars['Boolean']>
	/** does the column match the given pattern */
	_like?: Maybe<Scalars['String']>
	_lt?: Maybe<Scalars['String']>
	_lte?: Maybe<Scalars['String']>
	_neq?: Maybe<Scalars['String']>
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: Maybe<Scalars['String']>
	_nin?: Maybe<Array<Scalars['String']>>
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: Maybe<Scalars['String']>
	/** does the column NOT match the given pattern */
	_nlike?: Maybe<Scalars['String']>
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: Maybe<Scalars['String']>
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: Maybe<Scalars['String']>
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: Maybe<Scalars['String']>
	/** does the column match the given SQL regular expression */
	_similar?: Maybe<Scalars['String']>
}

/** mutation root */
export type Mutation_Root = {
	__typename?: 'mutation_root'
	/** delete data from the table: "user" */
	delete_user?: Maybe<User_Mutation_Response>
	/** delete single row from the table: "user" */
	delete_user_by_pk?: Maybe<User>
	/** insert data into the table: "user" */
	insert_user?: Maybe<User_Mutation_Response>
	/** insert a single row into the table: "user" */
	insert_user_one?: Maybe<User>
	/** update data of the table: "user" */
	update_user?: Maybe<User_Mutation_Response>
	/** update single row of the table: "user" */
	update_user_by_pk?: Maybe<User>
}

/** mutation root */
export type Mutation_RootDelete_UserArgs = {
	where: User_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
	auth_provider: Scalars['String']
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootInsert_UserArgs = {
	objects: Array<User_Insert_Input>
	on_conflict?: Maybe<User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
	object: User_Insert_Input
	on_conflict?: Maybe<User_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
	_set?: Maybe<User_Set_Input>
	where: User_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
	_set?: Maybe<User_Set_Input>
	pk_columns: User_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
	/** in ascending order, nulls last */
	Asc = 'asc',
	/** in ascending order, nulls first */
	AscNullsFirst = 'asc_nulls_first',
	/** in ascending order, nulls last */
	AscNullsLast = 'asc_nulls_last',
	/** in descending order, nulls first */
	Desc = 'desc',
	/** in descending order, nulls first */
	DescNullsFirst = 'desc_nulls_first',
	/** in descending order, nulls last */
	DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
	__typename?: 'query_root'
	/** fetch data from the table: "user" */
	user: Array<User>
	/** fetch aggregated fields from the table: "user" */
	user_aggregate: User_Aggregate
	/** fetch data from the table: "user" using primary key columns */
	user_by_pk?: Maybe<User>
}

export type Query_RootUserArgs = {
	distinct_on?: Maybe<Array<User_Select_Column>>
	limit?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	order_by?: Maybe<Array<User_Order_By>>
	where?: Maybe<User_Bool_Exp>
}

export type Query_RootUser_AggregateArgs = {
	distinct_on?: Maybe<Array<User_Select_Column>>
	limit?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	order_by?: Maybe<Array<User_Order_By>>
	where?: Maybe<User_Bool_Exp>
}

export type Query_RootUser_By_PkArgs = {
	auth_provider: Scalars['String']
	id: Scalars['String']
}

export type Subscription_Root = {
	__typename?: 'subscription_root'
	/** fetch data from the table: "user" */
	user: Array<User>
	/** fetch aggregated fields from the table: "user" */
	user_aggregate: User_Aggregate
	/** fetch data from the table: "user" using primary key columns */
	user_by_pk?: Maybe<User>
}

export type Subscription_RootUserArgs = {
	distinct_on?: Maybe<Array<User_Select_Column>>
	limit?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	order_by?: Maybe<Array<User_Order_By>>
	where?: Maybe<User_Bool_Exp>
}

export type Subscription_RootUser_AggregateArgs = {
	distinct_on?: Maybe<Array<User_Select_Column>>
	limit?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	order_by?: Maybe<Array<User_Order_By>>
	where?: Maybe<User_Bool_Exp>
}

export type Subscription_RootUser_By_PkArgs = {
	auth_provider: Scalars['String']
	id: Scalars['String']
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
	_eq?: Maybe<Scalars['timestamptz']>
	_gt?: Maybe<Scalars['timestamptz']>
	_gte?: Maybe<Scalars['timestamptz']>
	_in?: Maybe<Array<Scalars['timestamptz']>>
	_is_null?: Maybe<Scalars['Boolean']>
	_lt?: Maybe<Scalars['timestamptz']>
	_lte?: Maybe<Scalars['timestamptz']>
	_neq?: Maybe<Scalars['timestamptz']>
	_nin?: Maybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "user" */
export type User = {
	__typename?: 'user'
	auth_provider: Scalars['String']
	created_at: Scalars['timestamptz']
	email?: Maybe<Scalars['String']>
	id: Scalars['String']
	name?: Maybe<Scalars['String']>
	updated_at: Scalars['timestamptz']
}

/** aggregated selection of "user" */
export type User_Aggregate = {
	__typename?: 'user_aggregate'
	aggregate?: Maybe<User_Aggregate_Fields>
	nodes: Array<User>
}

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
	__typename?: 'user_aggregate_fields'
	count: Scalars['Int']
	max?: Maybe<User_Max_Fields>
	min?: Maybe<User_Min_Fields>
}

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<User_Select_Column>>
	distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
	_and?: Maybe<Array<User_Bool_Exp>>
	_not?: Maybe<User_Bool_Exp>
	_or?: Maybe<Array<User_Bool_Exp>>
	auth_provider?: Maybe<String_Comparison_Exp>
	created_at?: Maybe<Timestamptz_Comparison_Exp>
	email?: Maybe<String_Comparison_Exp>
	id?: Maybe<String_Comparison_Exp>
	name?: Maybe<String_Comparison_Exp>
	updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
	/** unique or primary key constraint */
	UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
	auth_provider?: Maybe<Scalars['String']>
	created_at?: Maybe<Scalars['timestamptz']>
	email?: Maybe<Scalars['String']>
	id?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type User_Max_Fields = {
	__typename?: 'user_max_fields'
	auth_provider?: Maybe<Scalars['String']>
	created_at?: Maybe<Scalars['timestamptz']>
	email?: Maybe<Scalars['String']>
	id?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type User_Min_Fields = {
	__typename?: 'user_min_fields'
	auth_provider?: Maybe<Scalars['String']>
	created_at?: Maybe<Scalars['timestamptz']>
	email?: Maybe<Scalars['String']>
	id?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	updated_at?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
	__typename?: 'user_mutation_response'
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	returning: Array<User>
}

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
	constraint: User_Constraint
	update_columns?: Array<User_Update_Column>
	where?: Maybe<User_Bool_Exp>
}

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
	auth_provider?: Maybe<Order_By>
	created_at?: Maybe<Order_By>
	email?: Maybe<Order_By>
	id?: Maybe<Order_By>
	name?: Maybe<Order_By>
	updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
	auth_provider: Scalars['String']
	id: Scalars['String']
}

/** select columns of table "user" */
export enum User_Select_Column {
	/** column name */
	AuthProvider = 'auth_provider',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Email = 'email',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
	/** column name */
	UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
	auth_provider?: Maybe<Scalars['String']>
	created_at?: Maybe<Scalars['timestamptz']>
	email?: Maybe<Scalars['String']>
	id?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	updated_at?: Maybe<Scalars['timestamptz']>
}

/** update columns of table "user" */
export enum User_Update_Column {
	/** column name */
	AuthProvider = 'auth_provider',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Email = 'email',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
	/** column name */
	UpdatedAt = 'updated_at'
}
