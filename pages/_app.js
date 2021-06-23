import App from 'next/app'
import '../styles/index.css'

import SimpleReactLightbox from 'simple-react-lightbox'
import getPageContext from './getPageContext'
// function MyApp({ Component, pageProps }) {
//   return (
//     <SimpleReactLightbox>
//       <Component {...pageProps} />
//     </SimpleReactLightbox>
//   )
// }
class MyApp extends App {
  constructor() {
    super()
    this.pageContext = getPageContext()
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <SimpleReactLightbox>
          <Component {...pageProps} />
        </SimpleReactLightbox>
      </>
    )
  }
}

export default MyApp
