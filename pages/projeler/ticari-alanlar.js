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
import SiteConfig from '../../site.config'
import useWindowSize from '../../hooks/useWindowSize'
import PageSubTitle from '../../components/page-sub-title'

function TicariAlanlar({ airtabledata }) {
  const { width } = useWindowSize()
  // console.log('airtabledata:', airtabledata)
  // console.log('airtabledata:', airtabledata[20].Category)
  // console.log(
  //   'Filter:',
  //   airtabledata.filter((i) => i.Category === 'Test')
  // )

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
            <p className="mt-10 pl-5">Lobiler</p>

            <SRLWrapper options={options}>
              <div className="grid sm:grid-cols-6 gap-5 lg:gap-2">
                {airtabledata
                  .filter((i) => i.Category === 'Lobiler')
                  .map((item) => {
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

            <p className="mt-10 pl-5">Satış Ofisleri</p>

            <SRLWrapper options={options}>
              <div className="grid sm:grid-cols-6 gap-5 lg:gap-2">
                {airtabledata
                  .filter((i) => i.Category === 'Satış Ofisleri')
                  .map((item) => {
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

            <p className="mt-10 pl-5">Sosyal Tesisler</p>

            <SRLWrapper options={options}>
              <div className="grid sm:grid-cols-6 gap-5 lg:gap-2">
                {airtabledata
                  .filter((i) => i.Category === 'Sosyal Tesisler')
                  .map((item) => {
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
  const airtabledata = await getTable('Ticari Alanlar')

  return {
    props: {
      airtabledata
    },
    revalidate: 6000
  }
}

export default TicariAlanlar
