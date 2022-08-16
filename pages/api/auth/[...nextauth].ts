import type { NextAuthOptions } from 'next-auth'

import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: (credentials) => {
        // [database lookup goes here]

        if (
          credentials?.username === 'validuser@test.com' &&
          credentials?.password === 'test'
        ) {
          return {
            id: 2,
            name: 'Valid',
            email: 'validuser@test.com',
          }
        }
        return null // login failed
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.id = token.id
      return session
    },
  },
  secret: 'UmVZTT4CYu2UUQGGI7nU5YNLSWBEpmEyqYZgqYXWXHQ=',
}

export default NextAuth(authOptions)
