import {jsx} from '@emotion/core'
import Head from 'next/head'
import {Header} from '../components/Header'
import {Hero} from '../components/Hero'
import {About} from '../components/About'
import {Footer} from '../components/Footer'

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-2">
      <Head>
        <title>Personal Training | Mariah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  )
}
