import Head from 'next/head'
import NextImage from 'next/image'
import Link from 'next/link'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import A from '../components/a'

import PageTransition from '../components/page-transition'
import PageTitle from '../components/page-title'
import SiteConfig from '../site.config'
function Projeler() {
  return (
    <>
      <Head>
        <title>Projeler | {SiteConfig.title}</title>
      </Head>
      <PageTransition>
        <Layout>
          <Container>
            <Header />
            <PageTitle>Projeler</PageTitle>

            <div className="text-xl md:text-2xl text-gray-600">
              Yakın Zamanda Tamamlanan Projeler
            </div>
            <div className="c-large mt-20">
              <div className="grid grid-cols-6 gap-2">
                <Link href="/projeler/mimari">
                  <a>Mimari</a>
                </Link>
                <Link href="/projeler/aksesuar">
                  <a>Aksesuar</a>
                </Link>
                <Link href="/projeler/once-sonra">
                  <a>Önce Sonra</a>
                </Link>
              </div>
            </div>
          </Container>
        </Layout>
      </PageTransition>
    </>
  )
}

export default Projeler
