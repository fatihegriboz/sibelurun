import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
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

import CarouselNO from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import Carousel from 'nuka-carousel'

import dynamic from 'next/dynamic'

const MyCarousel = dynamic(() => import('../components/MyCarousel'), {
  ssr: false
})
// const { default: MyCarousel } = dynamic(
//   () => import('../components/MyCarousel'),
//   { ssr: false }
// )

// import MyCarousel from '../components/MyCarousel'

//react-alice-carousel
// const items = [
//   <img
//     src="https://images.unsplash.com/photo-1611152171907-886a565484b5"
//     onDragStart={handleDragStart}
//   />,
//   <img
//     src="https://images.unsplash.com/photo-1610972504483-2a41daae0a33"
//     onDragStart={handleDragStart}
//   />,
//   <img
//     src="https://images.unsplash.com/photo-1610972504552-89d5539a48fe"
//     onDragStart={handleDragStart}
//   />
// ]
//

export const getStaticProps = async ({ preview }) => {
  const airtabledata = await getTable('Home Slider Projeler')
  const airtabledataOS = await getTable('Home Slider Once Sonra')

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
      airtabledataOS,

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
    },
    revalidate: 6000
  }
}

export default function Index({ subscription, airtabledata, airtabledataOS }) {
  const {
    data: { allPosts, site, blog }
  } = useQuerySubscription(subscription)

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(0, 3)
  const metaTags = blog.seo.concat(site.favicon)

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <>
      <PageTransition>
        <Layout preview={subscription.preview}>
          <Head>{renderMetaTags(metaTags)}</Head>
          <Head>
            <title>İç Mimar Sibel Ürün</title>
          </Head>
          <Container>
            <MyCarousel data={airtabledataOS} />
            {/* <Intro /> */}
            <div className="text-center">
              <p className="text-3xl font-serif">
                “ Tasarım; estetik, deneyimsel ve duygusal olarak <br></br>
                hayatımzın iyileştirilmesiyle ilgilidir... ”
              </p>
              {/* <p className="pb-36 text-gray-700 font-serif">Sibel Ürün</p> */}
            </div>
          </Container>
          <div>
            {/* background: #f4f1eb */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 99"
              preserveAspectRatio="none"
              width="1000"
              height="99px"
              fill="red"
              className="homepage-hero-wave"
            >
              <path
                d="M526.35,17.11C607.41,28.38,687,48.17,768.06,59.5A1149.19,1149.19,0,0,0,1000,68.07V0H0V99C155.18,13.84,347.42-7.77,526.35,17.11Z"
                transform="translate(0 0.04)"
              ></path>
            </svg> */}
            <svg
              width="1440"
              height="83"
              viewBox="0 0 1440 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              className="homepage-hero-wave"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1440 0H0V78.5971C0 78.5971 188.5 13.1864 340.111 41.0377C491.722 68.889 598.092 84.5107 697.395 82.8849C743.873 82.124 806.499 68.3031 872.151 53.8143C946.766 37.3474 1025.29 20.0178 1088.46 20.0178C1225.53 20.0178 1440 82.8849 1440 82.8849V0Z"
              ></path>
            </svg>
            <section className="px-5 py-5 ">
              <div className="grid md:grid-cols-2 gap-6 rounded-l-2xl overflow-hidden">
                <div className="hover-zoom-img relative max-w-full bg-accent-2">
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

                <div className="pr-10 flex flex-col justify-center text-gray-800 font-serif text-lg border-t border-r border-b border-accent-2 rounded-r-2xl overflow-hidden">
                  <p className="pt-10">
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
                  <p className="mt-5 mb-10 text-center md:text-left">
                    <Link href="/hakkinda">
                      <a className="rounded-md bg-transparent text-sm hover:bg-brand-1 text-gray-700 hover:text-white py-4 px-6 border border-brand-1  hover:border-transparent font-bold font-sans hover:no-underline">
                        DEVAMI
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10 px-5 py-5">
            <div className="flex flex-col justify-center items-center text-center px-10 py-10">
              <h4 className="mb-3 text-2xl font-bold">Tasarım ve Çözümler</h4>
              <p className="text-xl font-serif italic">
                " Her mekan, kişinin içindeki tutkusunu yansıtır... "
              </p>
              <p className="mt-10">
                <Link href="/projeler">
                  <a className="rounded-md bg-transparent text-sm hover:bg-brand-1 text-gray-700 hover:text-white py-4 px-6 border border-brand-1  hover:border-transparent font-bold font-sans hover:no-underline">
                    PROJELER
                  </a>
                </Link>
              </p>
            </div>
            {airtabledata.map((item) => {
              return (
                <div className="hover-zoom-img" key={item.Id}>
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

          <div className="grid md:grid-cols-1 gap-6 mb-10 px-5 py-5">
            <div className="flex flex-col justify-center items-center text-center px-10 py-10">
              <h4 className="mb-3 text-2xl font-bold">Öncesi Sonrası</h4>
              <p className="text-xl font-serif">
                " 4 ayda hayallerine kavuştular... "
              </p>
            </div>
            <Carousel autoplay={true} height="100%" initialSlideHeight={500}>
              {airtabledataOS.map((item) => {
                return (
                  <div key={item.Id}>
                    {item.Photo && (
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
                  </div>
                )
              })}
            </Carousel>

            <CarouselNO responsive={responsive}>
              {airtabledataOS.map((item) => {
                return (
                  <div key={item.Id}>
                    {item.Photo && (
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
                  </div>
                )
              })}
            </CarouselNO>
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
          </Container>
          <div
            className="mb-20 ml-6 mr-6 mx-auto px-5 border-t border-r border-l border-accent-2 rounded-t-2xl overflow-hidden"
            // style={{
            //   background:
            //     'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(247, 245, 240,1) 100%);'
            // }}
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 99"
              fill="#ffffff"
              preserveAspectRatio="none"
            >
              <path
                d="M526.35,17.11C607.41,28.38,687,48.17,768.06,59.5A1149.19,1149.19,0,0,0,1000,68.07V0H0V99C155.18,13.84,347.42-7.77,526.35,17.11Z"
                transform="translate(0 0.04)"
              ></path>
            </svg> */}
            <Container>
              <h2 className="pt-10 text-center mb-8 text-2xl font-bold tracking-tighter leading-tight">
                Son Yazılar
              </h2>
              <h3 className="pb-10 text-center font-serif mb-8 text-2xl max-w-2xl m-auto ">
                Mesleğime ve sektörüme yönelik güncel olayları, deneyimlerimi ve
                ünlülerin evlerine ait yorumlarımı blog yazılarımda
                bulabilirsiniz...
              </h3>

              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
              <p className="text-center mt-28 pb-5">
                <Link href="/blog">
                  <a className="rounded-md bg-transparent text-sm hover:bg-brand-1 text-gray-700 hover:text-white py-4 px-6 border border-brand-1  hover:border-transparent font-bold font-sans hover:no-underline">
                    BLOG YAZILARIMIN TAMAMI
                  </a>
                </Link>
              </p>
            </Container>
          </div>
        </Layout>
      </PageTransition>
    </>
  )
}
