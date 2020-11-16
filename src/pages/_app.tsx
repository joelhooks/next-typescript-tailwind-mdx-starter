import React from 'react'
import {AppProps} from 'next/app'
import '../styles/globals.css'
import {DefaultSeo} from 'next-seo'
import SEO from '../../next-seo.json'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
