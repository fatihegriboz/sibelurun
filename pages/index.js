import React from 'react'
import Head from 'next/head'
import NextImage from 'next/image'
import PageTransition from '../components/page-transition'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import Container from '../components/container'
import { getTable } from '../lib/airtable'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import MoreStories from '../components/more-stories'
import { request } from '../lib/datocms'
import { metaTagsFragment, responsiveImageFragment } from '../lib/fragments'

export const getStaticProps = async ({ preview }) => {
  const airtabledata = await getTable('Home Slider 01')
  // export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        blog {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        allPosts(orderBy: date_DESC, first: 20) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            picture {
              url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
            }
          }
        }
      }

      ${metaTagsFragment}
      ${responsiveImageFragment}
    `,
    preview
  }

  return {
    props: {
      airtabledata,
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
            environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest)
          }
    }
  }
}

export default function Index({ subscription, airtabledata }) {
  const {
    data: { allPosts, site, blog }
  } = useQuerySubscription(subscription)

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const metaTags = blog.seo.concat(site.favicon)

  return (
    <>
      <PageTransition>
        <Layout preview={subscription.preview}>
          <Head>{renderMetaTags(metaTags)}</Head>
          <Head>
            <title>İç Mimar Sibel Ürün</title>
          </Head>
          <Container>
            {/* <Intro /> */}
            <div className="text-center">
              <p className="text-3xl pb-52">
                "Tasarım; estetik, deneyimsel ve duygusal olarak <br></br>
                hayatımzın iyileştirilmesiyle ilgilidir..."
              </p>
            </div>
          </Container>
          <div style={{ background: '#f4f1eb' }}>
            <Container>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative max-w-full">
                  <NextImage
                    src="/static/images/su.jpg"
                    alt="Sibel Ürün"
                    width={600}
                    height={600}
                    layout="responsive"
                    // objectFit="cover"
                  />
                  {/* <div
                className="absolute w-full left-0 right-0"
                style={{ bottom: '-5px' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1000 99"
                  fill="#cec4bc"
                  preserveAspectRatio="none"
                  width="200%"
                  height="100px"
                  style={{
                    maxWidth: '200%',
                    width: '200%',
                    height: 'auto',
                    transform: 'rotateX(180deg) translateX(-10%)'
                  }}
                >
                  <path
                    d="M526.35,17.11C607.41,28.38,687,48.17,768.06,59.5A1149.19,1149.19,0,0,0,1000,68.07V0H0V99C155.18,13.84,347.42-7.77,526.35,17.11Z"
                    transform="translate(0 0.04)"
                  ></path>
                </svg>
              </div> */}
                </div>

                <div className="flex flex-col justify-center text-gray-800 text-xl">
                  <p>
                    20 yıldır iş yaşamında faal olan Sibel Ürün Bursa’da doğdu,
                    orta öğretimini Bursa Anadolu Lisesinde tamamlayarak,
                    Bilkent Üniversitesi İç Mimari ve Çevre tasarımı bölümünden
                    mezun oldu.
                  </p>
                  <p>
                    Yüksek Lisansını Yeditepe Üniversitesinde Art Management
                    üzerine yaptı, “Kurumlar Bağlamında Sanat Finans İlişkileri
                    ve Türkiye” isimli tez çalışmasını yayınladı. Marmara
                    Üniversitesi Avrupa Birliği Enstitüsü Doktora Programına
                    kabul edildi.
                  </p>
                  <p>
                    2000 yılından itibaren de mesleki çalışmalarını sahibi
                    olduğu Ürün Mimarlık şirketinde sürdürmektedir.
                  </p>
                </div>
              </div>
            </Container>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <h4 className="pt-48 pl-20 mb-8 text-2xl md:text-4xl font-bold tracking-tighter leading-tight">
              Tasarım ve Çözümler
            </h4>
            {airtabledata.map((item) => {
              return (
                <div key={item.Id}>
                  {item.Photo && (
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
                </div>
              )
            })}
          </div>

          {/* <div style={{ background: '#cec4bc' }}>
            <div className="container mx-auto px-5 mb-10">
              <p className="pt-10 pb-10 text-gray-800 lg:pl-50 lg:pr-50">
                20 yıldır iş yaşamında faal olan Sibel Ürün Bursa’da doğdu, orta
                öğretimini Bursa Anadolu Lisesinde tamamlayarak, Bilkent
                Üniversitesi İç Mimari ve Çevre tasarımı bölümünden mezun oldu.
                Yüksek Lisansını Yeditepe Üniversitesinde Art Management üzerine
                yaptı, “Kurumlar Bağlamında Sanat Finans İlişkileri ve Türkiye”
                isimli tez çalışmasını yayınladı. Marmara Üniversitesi Avrupa
                Birliği Enstitüsü Doktora Programına kabul edildi. 2000 yılından
                itibaren de mesleki çalışmalarını sahibi olduğu Ürün Mimarlık
                şirketinde sürdürmektedir.
              </p>
            </div>
          </div> */}

          <Container>
            {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
            {allPosts.length > 0 && <MoreStories posts={allPosts} />}
          </Container>
        </Layout>
      </PageTransition>
    </>
  )
}
