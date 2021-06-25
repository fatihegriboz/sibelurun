import Head from 'next/head'
import Link from 'next/link'
import Container from '../../components/container'
import Layout from '../../components/layout'
import { getTable } from '../../lib/airtable'
import { options } from '../../constants/options'
import { SRLWrapper } from 'simple-react-lightbox'
import Projects from '../../components/projects'
import PageTransition from '../../components/page-transition'
import PageTitle from '../../components/page-title'
import PageSubTitle from '../../components/page-sub-title'
import SiteConfig from '../../site.config'

function OtelEglence({ airtabledata }) {
  return (
    <>
      <Head>
        <title>Otel & Eglence | Projeler | {SiteConfig.title}</title>
      </Head>
      <PageTransition>
        <Layout>
          <Container cname="col-sm">
            <PageTitle>
              <Link href="/projeler">
                <a>Projeler</a>
              </Link>
            </PageTitle>
            <PageSubTitle>Otel & Eglence</PageSubTitle>
          </Container>
          <Container cname="col-full">
            <SRLWrapper options={options}>
              <Projects data={airtabledata} />
            </SRLWrapper>
          </Container>
        </Layout>
      </PageTransition>
    </>
  )
}

export async function getStaticProps() {
  const airtabledata = await getTable('Mimari')

  return {
    props: {
      airtabledata
    },
    revalidate: 6000
  }
}

export default OtelEglence
