import Head from 'next/head'
import NextImage from 'next/image'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import A from '../components/a'
import { getTable } from '../lib/airtable'

import PageTransition from '../components/page-transition'
import PageTitle from '../components/page-title'
import SiteConfig from '../site.config'

import marked from 'marked'

function About({ data }) {
  console.log('data', data)
  console.log('data', data[0].Photo[0].thumbnails.large.url)
  return (
    <>
      <Head>
        <title>About | {SiteConfig.title}</title>
      </Head>
      <PageTransition>
        <Layout>
          <Container>
            <Header />
            <PageTitle>{data[0].Name}</PageTitle>
            <div className="c-large mt-20">
              <div
                className="grid sm:grid-cols-2 gap-20"
                styles={
                  {
                    // background: `url(${data[0].Photo[0].thumbnails.large.url})`
                  }
                }
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked(data[0].Content)
                  }}
                />

                {/* <div>
                  <NextImage
                    style={{ position: 'relative' }}
                    src={data[0].Photo[0].thumbnails.large.url}
                    alt="Sibel Ürün"
                    width={data[0].Photo[0].thumbnails.large.width}
                    height={data[0].Photo[0].thumbnails.large.height}
                    layout="responsive"
                    // objectFit="cover"
                  />
                </div> */}
              </div>
            </div>
          </Container>
        </Layout>
      </PageTransition>
    </>
  )
}

export async function getStaticProps() {
  const data = await getTable('About')

  return {
    props: {
      data
    },
    revalidate: 600
  }
}

export default About
