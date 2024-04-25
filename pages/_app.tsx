import type { AppProps } from "next/app";
import Head from "next/head";
import '../styles/globals.scss';


export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>Create Next</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Component {...pageProps}/>
    </main>
  </>;
}
