import Head from 'next/head'
import NextImage from 'next/image'
import Container from '../../components/container'
import Layout from '../../components/layout'
import { getTable } from '../../lib/airtable'

import { options } from '../../constants/options'
import { SRLWrapper } from 'simple-react-lightbox'
import PageTransition from '../../components/page-transition'
import PageTitle from '../../components/page-title'
import SiteConfig from '../../site.config'

function Oncesonra({ airtabledata }) {
  return (
    <>
      <Head>
        <title>Önce Sonra | Projeler | {SiteConfig.title}</title>
      </Head>
      <PageTransition>
        <Layout>
          <Container cname="col-sm">
            <PageTitle>Önce Sonra</PageTitle>
          </Container>
          <Container>
            <SRLWrapper options={options}>
              <div className="grid grid-cols-6 gap-2">
                {airtabledata.map((item) => {
                  return (
                    <div key={item.Id}>
                      {item.Photo && (
                        <a href={item.Photo[0].thumbnails.full.url}>
                          <NextImage
                            src={item.Photo[0].thumbnails.large.url}
                            alt={item.Name}
                            width={120}
                            height={80}
                            layout="responsive"
                            objectFit="cover"
                            placeholder="blur"
                            blurDataURL={item.Photo[0].thumbnails.small.url}
                            srl_gallery_image="true"
                          />
                        </a>
                      )}
                    </div>
                  )
                })}
              </div>
            </SRLWrapper>
          </Container>
        </Layout>
      </PageTransition>
    </>
  )
}

export async function getStaticProps() {
  const airtabledata = await getTable('Before-After')

  return {
    props: {
      airtabledata
    },
    revalidate: 600
  }
}

export default Oncesonra
