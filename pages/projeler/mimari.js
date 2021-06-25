import Head from 'next/head'
import Link from 'next/link'
import NextImage from 'next/image'
import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'
import { getTable } from '../../lib/airtable'

import { options } from '../../constants/options'
import { SRLWrapper } from 'simple-react-lightbox'
import PageTransition from '../../components/page-transition'
import PageTitle from '../../components/page-title'
import PageSubTitle from '../../components/page-sub-title'
import SiteConfig from '../../site.config'

import useWindowSize from '../../hooks/useWindowSize'

function Mimari({ airtabledata }) {
  const { width } = useWindowSize()
  return (
    <>
      <Head>
        <title>Mimari | Projeler | {SiteConfig.title}</title>
      </Head>
      <PageTransition>
        <Layout>
          <Container cname="col-sm">
            <PageTitle>
              <Link href="/projeler">
                <a>Projeler</a>
              </Link>
            </PageTitle>
            <PageSubTitle>Mimari</PageSubTitle>
          </Container>
          <Container cname="col-full">
            <SRLWrapper options={options}>
              <div className="grid sm:grid-cols-6 gap-5 lg:gap-2">
                {airtabledata.map((item) => {
                  return (
                    <div key={item.Id}>
                      {item.Photo && (
                        <a href={item.Photo[0].thumbnails.full.url}>
                          {width > 768 && (
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
                          )}
                          {width < 768 && (
                            <NextImage
                              src={item.Photo[0].thumbnails.large.url}
                              alt={item.Name}
                              width={item.Photo[0].thumbnails.large.width}
                              height={item.Photo[0].thumbnails.large.height}
                              layout="responsive"
                              objectFit="cover"
                              placeholder="blur"
                              blurDataURL={item.Photo[0].thumbnails.small.url}
                              srl_gallery_image="true"
                            />
                          )}
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
  const airtabledata = await getTable('Mimari')

  return {
    props: {
      airtabledata
    },
    revalidate: 6000
  }
}

export default Mimari
