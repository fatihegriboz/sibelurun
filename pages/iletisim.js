import Head from 'next/head'
import NextImage from 'next/image'
import Container from '../components/container'
import Layout from '../components/layout'
import Social from '../components/social'
import A from '../components/a'
import PageTransition from '../components/page-transition'
import PageTitle from '../components/page-title'
import SiteConfig from '../site.config'
function Contact() {
  return (
    <>
      <Head>
        <title>İletişim | {SiteConfig.title}</title>
      </Head>
      <PageTransition>
        <Layout>
          <Container cname="col-sm">
            <PageTitle>Say Hello</PageTitle>

            <div className="grid sm:grid-cols-2 gap-20">
              <div>
                {/* <Social /> */}
                <p className="pt-6 pb-6">sibel@sibelurun.com</p>
                <p className="pt-6 pb-2">‭+90 (212) 951 05 75‬</p>
                <p className="pb-6">Süleyman Seba Cad. No:79 Maçka Beşiktaş</p>
              </div>
            </div>
          </Container>
          <Container cname="col-lg">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6937.20547026939!2d28.992973796665712!3d41.043921712410786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7756c456d7f%3A0x52bce8bca90f25f7!2zw5xSw5xOIE3EsE1BUkxJSw!5e0!3m2!1str!2str!4v1623841919971!5m2!1str!2str"
                width="600"
                style={{ width: '100%' }}
                height="450"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Container>
        </Layout>
      </PageTransition>
    </>
  )
}

export default Contact
