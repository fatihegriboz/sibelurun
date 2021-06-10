import Head from 'next/head'
import NextImage from 'next/image'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import A from '../components/a'
import { getTable } from '../lib/airtable'

import { options } from '../constants/options'
import { SRLWrapper } from 'simple-react-lightbox'
import PageTransition from '../components/page-transition'
import PageTitle from '../components/page-title'
import SiteConfig from '../site.config'
function Projeler({ data }) {
  return (
    <>
      <Head>
        <title>Projeler | {SiteConfig.title}</title>
      </Head>
      <PageTransition>
        <Layout>
          <Container>
            <Header />
            {/* <div className="c-small">
            
          </div> */}
            <PageTitle>Mimari</PageTitle>
            <div className="c-large mt-20">
              <SRLWrapper options={options}>
                <div className="grid grid-cols-6 gap-2">
                  {data.map((item) => {
                    return (
                      <div key={item.Id}>
                        {/* <A href={item.Url} blank>
                    <NextImage
                      src={item.Photo[0].thumbnails.full.url}
                      alt={item.Name}
                      // width={item.Photo[0].thumbnails.large.width}
                      // height={item.Photo[0].thumbnails.large.height}
                      width={600}
                      height={340}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </A> */}

                        <a href={item.Photo[0].thumbnails.full.url}>
                          <NextImage
                            src={item.Photo[0].thumbnails.full.url}
                            alt={item.Name}
                            width={30}
                            height={20}
                            layout="responsive"
                            objectFit="cover"
                            srl_gallery_image="true"
                          />
                        </a>

                        {/* <div className="mt-2">
                      <h3 className="font-bold text-highlight">
                        <A href={item.Url} blank>
                          {item.Name}
                        </A>
                      </h3>

                      <div className="flex space-x-1 text-gray-500">
                      <span>{item.Category},</span>
                      <span>{item.Description}</span>
                    </div>
                    </div> */}
                      </div>
                    )
                  })}
                </div>
              </SRLWrapper>
            </div>
          </Container>
        </Layout>
      </PageTransition>
    </>
  )
}

export async function getStaticProps() {
  const data = await getTable('Mimari')

  return {
    props: {
      data
    },
    revalidate: 600
  }
}

export default Projeler
