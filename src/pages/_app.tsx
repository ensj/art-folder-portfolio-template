import '../assets/styles/globals.scss'

// import App from "next/app";
import type { AppProps /* , AppContext */ } from 'next/app'
import Head from 'next/head'
import React from 'react'

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <title>{"Sean Rosenthal's Art Portfolio"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component id="container" {...pageProps} />
    </div>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App
