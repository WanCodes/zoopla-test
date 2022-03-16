import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import EditMenu from '../src/components/EditMenu/EditMenu'
import PropertyList from '../src/components/PropertyList'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zoopla test</title>
        <meta name="description" content="Simple property list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <EditMenu />
        <PropertyList />
      </main>
    </div>
  )
}

export default Home
