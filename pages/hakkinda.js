import Head from 'next/head'
import NextImage from 'next/image'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import A from '../components/a'
import PageTransition from '../components/page-transition'
import PageTitle from '../components/page-title'
function About() {
  return (
    <PageTransition>
      <Layout>
        <Container>
          <Header />
          {/* <div className="c-small">
            
          </div> */}
          <PageTitle>Sibel Ürün Hakkında</PageTitle>
          <div className="c-large mt-20">
            <div className="grid sm:grid-cols-2 gap-20">
              <div>
                <p className="pt-6">
                  20 yıldır iş yaşamında faal olan <strong>Sibel Ürün</strong>,
                  Bursa Anadolu Lisesi’nde Lise öğrenimini aldıktan sonra 1996
                  yılında Bilkent Üniversitesi Güzel Sanatlar Fakültesi İç
                  Mimarlık ve Çevre Tasarımı lisansını tamamladı.
                  <strong>“Sanat Yönetimi”</strong> alanında yüksek lisans
                  programını tamamlayan Ürün, 2001 senesinde Marmara
                  Üniversitesi Avrupa Birliği Enstitüsü doktora programı için
                  davet edildi.
                </p>
                <p className="pt-6">
                  Mesleki anlamdaki çalışmalarını profesyonel olarak yürütme
                  hedefiyle 2000 yılında
                  <A
                    href="http://www.urunmimarlik.com"
                    style={{ color: 'red' }}
                    blank
                  >
                    <strong> ÜRÜN MİMARLIK </strong>
                  </A>
                  şirketini kurdu ve aynı firma adı altında faaliyetlerine devam
                  etmektedir.
                </p>
                <p className="pt-6">
                  <strong>
                    "Her mekan yeni bir başlangıç, yeni bir yaşama açılan
                    kapıdır benim için"
                  </strong>
                  diye belirten Ürün, hem kişisel hem de kurumsal taleplere
                  yönelik bir çok projenin tamamlanmasını sağladı. Halen kişisel
                  ve kurumsal mimari çözümler oluşturmakta, faaliyetlerini
                  İstanbul ve Las Vegas mimari ofislerinde projelerin hayata
                  geçmesi üzerine devam ettirmektedir.
                </p>
                <p className="pt-6">
                  <strong>
                    “Kapıdan girdiğimde hayaller kurarım. Kurduğum hayallerim
                    tasarımlarıma yön verir. Tasarımlarım ise yaşam tarzlarına
                    ışık tutar. Her müşteri ise yeni bir kimliktir benim için ve
                    mekanların bu kimliklerle uyumlu olmasına özen gösteririm.“
                  </strong>
                  felsefesi ile hareket eden Ürün, projelerinde taleplerdeki
                  tutkuyu ön plana çıkarma hedefindedir.
                </p>
                <p className="pt-6">
                  Sibel Ürün tek çocuk annesi ve İngilizce bilmektedir.
                </p>
              </div>
              <div style={{ position: 'relative' }}>
                <NextImage
                  src="/static/images/sibelurun.png"
                  alt="Sibel Ürün"
                  width={640}
                  height={840}
                  layout="responsive"
                  // objectFit="cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </PageTransition>
  )
}

export default About
