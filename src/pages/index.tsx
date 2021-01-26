import {jsx} from '@emotion/core'
import Head from 'next/head'
import DarkModeToggle from '../components/dark-mode-toggle'

export default function Home() {
  return (
    <div className="dark:bg-gray-800">
      <Head>
        <title>Next.js, TypeScript, Tailwind, Jest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className=" text-3xl text-pink-500" css={{backgroundColor: 'teal'}}>
        Welcome to Your App
      </h1>
      <DarkModeToggle />
    </div>
  )
}
