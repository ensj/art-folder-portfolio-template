import '../assets/styles/globals.scss'
import Head from 'next/head'

// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="container">
      <Head>
        <title>Sean Rosenthal's Art Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
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