import { Layout } from '@/components'
import type { AppProps } from 'next/app'

import '@/styles/index.css'

/*
  export function reportWebVitals(metric) {
    // analytics - calibre
    serverAnalytics.log(metric)
    console.log(metric)
  }
*/

function App({ Component, pageProps }: AppProps) {
  // Providers - Context - Themes - data
  // Layout - Additional props ex. title
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
