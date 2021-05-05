import jwt from 'jsonwebtoken'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import { syncUserWithDatabase } from 'lib/utils'

import type { NextAuthOptions } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

const JWT_SECRET = process.env.JWT_SECRET

const options: NextAuthOptions = {
	providers: [
		Providers.GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET
		}),
		Providers.GitLab({
			clientId: process.env.GITLAB_ID,
			clientSecret: process.env.GITLAB_SECRET
		})
	],
	session: { jwt: true, maxAge: 30 * 24 * 60 * 60 },
	jwt: {
		encode: async params => {
			const token = params?.token
			let encoded = ''

			if (token && JWT_SECRET) {
				encoded = jwt.sign(token, JWT_SECRET, { algorithm: 'HS512' })
			}

			return encoded
		},
		decode: async params => {
			const token = params?.token
			let decoded = {}

			if (token && JWT_SECRET) {
				decoded = jwt.verify(token, JWT_SECRET, {
					algorithms: ['HS512']
				})
			}

			return decoded
		}
	},
	callbacks: {
		session: async (session, token: JWT) => {
			if (JWT_SECRET) {
				// Sync session and browser tokens
				if (!token.iat && !token.exp) {
					token.iat = Math.floor(Date.now() / 1000)
					token.exp =
						Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60
				}
				session.authToken = jwt.sign(token, JWT_SECRET, {
					algorithm: 'HS512'
				})
			}

			return session
		},
		jwt: async (token, user, account, _profile, _isNewUser) => {
			if (user && account) {
				// 1. Sync user with database (using Hasura REST endpoint)
				await syncUserWithDatabase({
					id: user.id.toString(),
					authProvider: account.provider,
					email: token.email,
					name: token.name
				})
				// 2. Add Hasura specific custom claims to token
				token['https://hasura.io/jwt/claims'] = {
					'x-hasura-allowed-roles': ['user'],
					'x-hasura-default-role': 'user',
					'x-hasura-user-id': user.id.toString()
				}
			}

			return token
		}
	}
}

export default NextAuth(options)
