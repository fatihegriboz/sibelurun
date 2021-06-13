import Head from 'next/head'
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

function Aksesuar({ data }) {
  return (
    <>
      <Head>
        <title>Aksesuar | Projeler | {SiteConfig.title}</title>
      </Head>
      <PageTransition>
        <Layout>
          <Container>
            <Header />
            <PageTitle>Aksesuar</PageTitle>
            <div className="c-large mt-20">
              <SRLWrapper options={options}>
                <div className="grid grid-cols-6 gap-2">
                  {data.map((item) => {
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
                              srl_gallery_image="true"
                            />
                          </a>
                        )}
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
  const data = await getTable('Aksesuar')

  return {
    props: {
      data
    },
    revalidate: 600
  }
}

export default Aksesuar
