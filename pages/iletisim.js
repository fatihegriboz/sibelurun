import Head from 'next/head'
import NextImage from 'next/image'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Social from '../components/social'
import A from '../components/a'
import PageTransition from '../components/page-transition'
import PageTitle from '../components/page-title'
import SiteConfig from '../site.config'
function Contact() {
  return (
    <>
      <Head>
        <title>İletişim | {SiteConfig.title}</title>
      </Head>
      <PageTransition>
        <Layout>
          <Container>
            <Header />
            <PageTitle>İletişim</PageTitle>
            <div className="c-large mt-20">
              <div className="grid sm:grid-cols-2 gap-20">
                <div>
                  <Social />
                  <p className="pt-6">
                    ‭+90 (212) 951 05 75‬ | sibel@sibelurun.com
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Layout>
      </PageTransition>
    </>
  )
}

export default Contact
