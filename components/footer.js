import Link from 'next/link'
import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          {/* <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Sibel Ürün®
          </h3> */}
          <div className="">
            <h3 className="text-2xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
              Sibel Ürün®
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/3">
            <p>
              <span className="block">
                Süleyman Seba Cad. No:79 Maçka Beşiktaş
              </span>
              <span className="block">
                <strong>Tel:</strong> +90(212) 951 05 75
              </span>
              <span className="block">
                <strong>E-posta:</strong> sibel@sibelurun.com
              </span>
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/3">
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
                <Link href="/projeler/">
                  <a>Projeler</a>
                </Link>
              </li>
              <li>
                <Link href="/projeler/once-sonra/">
                  <a>Önce Sonra</a>
                </Link>
              </li>
              <li>
                <Link href="/iletisim/">
                  <a>İletişim</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>© 2021 Sibel Ürün®. Tüm Hakları Saklıdır.</div>
      </Container>
    </footer>
  )
}
