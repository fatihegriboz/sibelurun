import Head from 'next/head'
import PageTransition from '../components/page-transition'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import Container from '../components/container'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import MoreStories from '../components/more-stories'
import { request } from '../lib/datocms'
import { metaTagsFragment, responsiveImageFragment } from '../lib/fragments'
import SiteConfig from '../site.config'
export async function getStaticProps({ preview }) {
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

export default function Index({ subscription }) {
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
            <title>Blog | {SiteConfig.title}</title>
          </Head>
          <div className="col-full">
            <p className="pt-10 pb-10 md:px-10 text-center font-serif mb-8 text-xl md:text-2xl max-w-3xl m-auto ">
              Mesleğime ve sektörüme yönelik güncel olayları, deneyimlerimi ve
              ünlülerin evlerine ait yorumlarımı blog yazılarımda
              bulabilirsiniz...<br></br>
              <br></br>
              Katkı sağlamasını dilerim!
            </p>
          </div>
          <Container cname="col-full">
            {/* <Intro /> */}
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
            <div className="col-full">
              <p className="pb-10 text-center font-serif mb-8 text-2xl max-w-3xl m-auto ">
                " İyi bir projenin varolması, sevgi dolu ve insani bir vizyon
                yaklaşımı ile kaçınılmazdır... "
              </p>
            </div>

            <div className="mb-32">
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </div>
          </Container>
        </Layout>
      </PageTransition>
    </>
  )
}
