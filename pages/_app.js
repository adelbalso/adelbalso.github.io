import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles/theme'
import { AnimatePresence } from "framer-motion"
import { useRouter } from 'next/router'
import * as ga from '../lib/ga'

function App({
  Component,
  pageProps
}) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
