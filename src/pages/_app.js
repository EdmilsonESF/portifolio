import GlobalStyle from '../styles/GlobalStyles'
import Head from 'next/head'
import html from '../assets/html.svg'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500&display=swap" rel="stylesheet"/>
        <title>Edmilson Fonseca</title>
        <link rel="shortcut icon" href={html} />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
