import Head from 'next/head'
import Link from 'next/link'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'
import MoreStories from '../../components/more-stories'
import PageTransition from '../../components/page-transition'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import { request } from '../../lib/datocms'
import { metaTagsFragment, responsiveImageFragment } from '../../lib/fragments'
import SiteConfig from '../../site.config'

export async function getStaticPaths() {
  const data = await request({ query: `{ allPosts { slug } }` })

  return {
    paths: data.allPosts.map((post) => `/posts/${post.slug}`),
    fallback: false
  }
}

export async function getStaticProps({ params, preview = false }) {
  const graphqlRequest = {
    query: `
      query PostBySlug($slug: String) {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        post(filter: {slug: {eq: $slug}}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          title
          slug
          content {
            value
            blocks {
              __typename
              ...on ImageBlockRecord {
                id
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                    ...responsiveImageFragment
                  }
                }
              }
            }
          }
          date
          ogImage: coverImage{
            url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
          }
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

        morePosts: allPosts(orderBy: date_DESC, first: 3, filter: {slug: {neq: $slug}}) {
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

      ${responsiveImageFragment}
      ${metaTagsFragment}
    `,
    preview,
    variables: {
      slug: params.slug
    }
  }

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest)
          }
    }
  }
}

export default function Post({ subscription, preview }) {
  const {
    data: { site, post, morePosts }
  } = useQuerySubscription(subscription)

  const metaTags = post.seo.concat(site.favicon)

  return (
    <>
      <PageTransition>
        <Layout preview={preview}>
          <Head>{renderMetaTags(metaTags)}</Head>
          <Head>
            <title>
              {post.title} | Blog | {SiteConfig.title}
            </title>
          </Head>
          <Container cname="col-full mb-20">
            <div className="col-full">
              <p className="pt-10 pb-10 md:px-10 text-center font-serif mb-8 text-xl md:text-2xl max-w-3xl m-auto ">
                {post.title}
              </p>
            </div>
            <article>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            <h2 className="text-center mb-8 text-2xl font-bold tracking-tighter leading-tight">
              Son Yazılar
            </h2>
            <h3 className="pb-10 text-center font-serif mb-8 text-xl max-w-2xl m-auto ">
              Mesleğime ve sektörüme yönelik güncel olayları, deneyimlerimi ve
              ünlülerin evlerine ait yorumlarımı blog yazılarımda
              bulabilirsiniz...
            </h3>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            <p className="text-center mt-20 pb-5">
              <Link href="/blog">
                <a className="rounded-md bg-transparent text-sm hover:bg-accent-4 hover:text-white py-4 px-6 border border-brand-1  hover:border-transparent font-bold font-sans hover:no-underline">
                  YAZILARIMIN TAMAMI
                </a>
              </Link>
            </p>
          </Container>
        </Layout>
      </PageTransition>
    </>
  )
}
