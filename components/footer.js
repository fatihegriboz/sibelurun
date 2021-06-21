import NextImage from 'next/image'
import Link from 'next/link'
import Container from './container'
import Social from './social'

export default function Footer() {
  return (
    <footer className="bg-accent-1">
      {/* border-t border-accent-2 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 99"
        preserveAspectRatio="none"
        width="1000"
        height="99"
        fill="white"
        className="footer-wave"
      >
        <path
          d="M526.35,17.11C607.41,28.38,687,48.17,768.06,59.5A1149.19,1149.19,0,0,0,1000,68.07V0H0V99C155.18,13.84,347.42-7.77,526.35,17.11Z"
          transform="translate(0 0.04)"
        ></path>
      </svg>
      <Container>
        <div className="py-10 flex flex-col lg:flex-row justify-around">
          <div>
            <h3 className="text-xl font-bold mb-5">Adres.</h3>
            <p>
              <span className="block">Süleyman Seba Cad. No:79</span>
              <span className="block">Maçka Beşiktaş</span>
              <span className="block mt-5">+90(212) 951 05 75</span>
              <span className="block">sibel@sibelurun.com</span>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-5">Menu.</h3>
            <ul>
              <li>
                <Link href="/">
                  <a>Anasayfa</a>
                </Link>
              </li>
              <li>
                <Link href="/hakkinda">
                  <a>Hakkında</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/iletisim/">
                  <a>İletişim</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-5">Projeler.</h3>
            <ul>
              <li>
                <Link href="/projeler/mimari">
                  <a>Mimari</a>
                </Link>
              </li>
              <li>
                <Link href="/projeler/aksesuar">
                  <a>Aksesuar</a>
                </Link>
              </li>
              <li>
                <Link href="/projeler/once-sonra">
                  <a>Önce Sonra</a>
                </Link>
              </li>
              <li>
                <Link href="/projeler/ticari-alanlar">
                  <a>Ticari Alanlar</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-5">Güncel kalın.</h3>
            <Social />
          </div>
        </div>
        <div className="flex flex-col text-sm items-center">
          <NextImage
            src="/static/images/sibelurun-logo.png"
            alt="Sibel Ürün"
            width={140}
            height={140}
          />
          {/* <NextImage
            src="/static/images/sibelurun-logo-text.png"
            alt="Sibel Ürün"
            width={260}
            height={164}
          /> */}
          <p className="text-brand-2 p-10">
            © 2021 Sibel Ürün®. Tüm Hakları Saklıdır.
          </p>
        </div>
        {/* <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Sibel Ürün®
          </h3> */}
      </Container>
    </footer>
  )
}
