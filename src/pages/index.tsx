import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js, TypeScript, Tailwind, Jest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl text-pink-500">Welcome to Your App</h1>
    </div>
  )
}
