import { useSession, signIn, signOut } from 'next-auth/react'

import Link from 'next/link'

import ActionButton from './action-button'

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <ActionButton onClick={() => signOut()} style="primary">
        Sign out
      </ActionButton>
    )
  }
  return (
    <div className="flex gap-4">
      <ActionButton onClick={() => signIn()} style="secondary">
        Sign in
      </ActionButton>
      <ActionButton style="primary">
        <Link href="/register">Register</Link>
      </ActionButton>
    </div>
  )
}
