import '../styles/globals.css'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require(`bootstrap/dist/js/bootstrap.bundle`)
  }, [])
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={''} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
