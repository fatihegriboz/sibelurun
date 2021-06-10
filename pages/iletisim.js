import Head from 'next/head'
import NextImage from 'next/image'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Social from '../components/social'
import A from '../components/a'
import PageTransition from '../components/page-transition'
import PageTitle from '../components/page-title'
function Contact() {
  return (
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
              <div style={{ position: 'relative' }}>
                <NextImage
                  src="/static/images/sibelurun.png"
                  alt="Sibel Ürün"
                  width={640}
                  height={840}
                  layout="responsive"
                  // objectFit="cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </PageTransition>
  )
}

export default Contact
