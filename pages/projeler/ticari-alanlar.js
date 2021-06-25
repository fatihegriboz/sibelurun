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
import SiteConfig from '../../site.config'
import PageSubTitle from '../../components/page-sub-title'

function TicariAlanlar({ airtabledata }) {
  const lobiler = airtabledata.filter((item) => item.Category == 'Lobiler')
  const satisOfisleri = airtabledata.filter(
    (item) => item.Category == 'Satis Ofisleri'
  )
  const sosyalTesisler = airtabledata.filter(
    (item) => item.Category == 'Sosyal Tesisler'
  )

  return (
    <>
      <Head>
        <title>Ticari Alanlar | Projeler | {SiteConfig.title}</title>
      </Head>
      <PageTransition>
        <Layout>
          <Container cname="col-sm">
            <PageTitle>
              <Link href="/projeler">
                <a>Projeler</a>
              </Link>
            </PageTitle>
            <PageSubTitle>Ticari Alanlar</PageSubTitle>
          </Container>
          <Container cname="col-full">
            <p className="mt-20 pl-5 font-bold">Lobiler</p>
            <SRLWrapper options={options}>
              <Projects data={lobiler} />
            </SRLWrapper>
            <p className="mt-20 pl-5 font-bold">Satış Ofisleri</p>
            <SRLWrapper options={options}>
              <Projects data={satisOfisleri} />
            </SRLWrapper>
            <p className="mt-20 pl-5 font-bold">Sosyal Tesisler</p>
            <SRLWrapper options={options}>
              <Projects data={sosyalTesisler} />
            </SRLWrapper>
          </Container>
        </Layout>
      </PageTransition>
    </>
  )
}

export async function getStaticProps() {
  const airtabledata = await getTable('Ticari Alanlar')

  return {
    props: {
      airtabledata
    },
    revalidate: 6000
  }
}

export default TicariAlanlar
