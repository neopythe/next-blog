import Head from 'next/head'
import Link from 'next/link'

import ActionButton from '../components/action-button'

import styles from '../styles/register.module.css'

export default function Register() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Blog - Register</title>
      </Head>
      <main className={styles.main}>
        <p className="mb-4">Register ( coming soon )</p>
        <ActionButton>
          <Link href="/">Back to home</Link>
        </ActionButton>
      </main>
    </div>
  )
}
