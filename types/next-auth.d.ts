// eslint-disable-next-line
import NextAuth from 'next-auth'

declare module 'next-auth' {
	interface User {
		id: number
	}

	interface Session {
		authToken?: string
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		iat?: number
		exp?: number
		'https://hasura.io/jwt/claims'?: {
			'x-hasura-allowed-roles': string[]
			'x-hasura-default-role': string
			'x-hasura-user-id': string
		}
	}
}
