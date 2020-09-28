import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import '../styles/styles.scss'

export default function MyApp({ Component, pageProps }) {
  return <>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </> 
}
