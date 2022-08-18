import type { ReactElement } from 'react'
import { useSession } from 'next-auth/react'
import type { NextPageWithLayout } from './_app'

import { prisma } from '../db'
import { Post } from '@prisma/client'

import Head from 'next/head'

import Layout from '../components/layout'

import styles from '../styles/home.module.css'

export const getServerSideProps = async () => {
  try {
    const posts = await prisma.post.findMany()
    return {
      props: { posts },
    }
  } catch (error) {
    console.log(error)
  }
}

interface HomeProps {
  posts: Post[]
}

const Home: NextPageWithLayout<HomeProps> = ({ posts }: HomeProps) => {
  const { data: session } = useSession()
  console.log(posts)
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Blog</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next Blog</h1>

        {!session && (
          <p className={styles.description}>Sign in to get started</p>
        )}

        <div className={styles.grid}>
          {posts.map((post) => (
            <div key={post.id} className={styles.card}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
