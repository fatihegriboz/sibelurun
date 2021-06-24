import Container from '../components/container'
import Hamburger from '../components/hamburger'
import { useState } from 'react'
import NextImage from 'next/image'
import Link from 'next/link'
import Social from './social'

export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div className="flex">
      <div className="sitelogo">
        <Link href="/">
          <a>
            {/* <NextImage
              src="/static/images/sibelurun-logo.png"
              alt="Sibel Ürün"
              width={99}
              height={99}
            /> */}
            <NextImage
              src="/static/images/sibelurun-logo-text.png"
              alt="Sibel Ürün"
              width={160}
              height={101}
            />
          </a>
        </Link>
      </div>
      <div className="navigation">
        <div className="ul py-10 flex flex-col lg:flex-row justify-around">
          <div>
            {/* <NextImage
              src="/static/images/sibelurun-logo.png"
              alt="Sibel Ürün"
              width={99}
              height={99}
            /> */}
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

        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </div>

      <style jsx>{`
        html,
        body {
          border-top: ${hamburgerOpen ? '10px solid red' : '10px solid blue '};
        }
        .navigation {
          width: 100%;
          height: 50px;
        }

        .navigation .ul {
          display: flex;
          flex-wrap: wrap;
          float: right;
          margin: 0px;
          padding: 200px 0 0 0;
          overflow: hidden;
        }
        .hamburger {
          display: fixed;
          padding-top: 10px;
          margin-left: 10px;
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 9;
        }

        .navigation .ul {
          display: ${hamburgerOpen ? 'flex' : 'none'};
          background-color: #e2e1df;
          height: 100vh;
          width: 100vw;
          position: absolute;
          z-index: 8;
          top: 0px;
          left: 0px;
        }
        .sitelogo {
          padding-top: 15px;
          padding-left: 15px;
          position: relative;
          z-index: ${hamburgerOpen ? '10' : '1'};
          pointer-events: ${hamburgerOpen ? 'none' : 'auto'};
        }
        // .hamburger {
        //   display: none;
        //   z-index: 6;
        // }

        // @media (max-width: 767px) {
        //   .hamburger {
        //     display: fixed;
        //     padding-top: 10px;
        //     margin-left: 10px;
        //     z-index: 6;
        //   }

        //   .navigation ul {
        //     display: ${hamburgerOpen ? 'inline' : 'none'};
        //     background-color: blue;
        //     height: 100vh;
        //     width: 50vw;
        //     margin-top: 50px;
        //     position: fixed;
        //   }
        // }
      `}</style>
    </div>
  )
}
