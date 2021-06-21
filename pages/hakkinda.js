import Head from 'next/head'
import NextImage from 'next/image'
import Container from '../components/container'
import Layout from '../components/layout'
import A from '../components/a'
import { getTable } from '../lib/airtable'

import PageTransition from '../components/page-transition'
import PageTitle from '../components/page-title'
import SiteConfig from '../site.config'

import marked from 'marked'

function About({ data }) {
  // console.log('data', data)
  // console.log('data', data[0].Photo[0].thumbnails.large.url)
  return (
    <>
      <Head>
        <title>
          {data[0].Name} | {SiteConfig.title}
        </title>
      </Head>
      <PageTransition>
        <Layout>
          <Container cname="col-sm">
            <PageTitle>{data[0].Name}</PageTitle>

            <div
              className="grid sm:grid-cols-1 gap-0"
              styles={
                {
                  // background: `url(${data[0].Photo[0].thumbnails.large.url})`
                }
              }
            >
              <div
                className="richtext"
                dangerouslySetInnerHTML={{
                  __html: marked(data[0].Content)
                }}
              />

              <div>
                <div className="max-w-xs m-auto">
                  <NextImage
                    style={{ position: 'relative' }}
                    src={data[0].Photo[0].thumbnails.large.url}
                    alt="Sibel Ürün"
                    width={data[0].Photo[0].thumbnails.large.width}
                    height={data[0].Photo[0].thumbnails.large.height}
                    layout="responsive"
                    placeholder="blur"
                    blurDataURL={data[0].Photo[0].thumbnails.small.url}
                    // objectFit="cover"
                  />
                </div>
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
