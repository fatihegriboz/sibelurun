import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import IconMenu from '../components/icons/menu'

const MENU = {
  '/': 'Anasayfa',
  '/hakkinda': 'Hakkında',
  '/blog': 'Blog',
  '/projeler': 'Projeler',
  '/projeler/once-sonra': 'Önce Sonra',
  '/iletisim': 'İletişim'
}
export default function Header() {
  const [showNav, showNavSet] = useState(false)
  const router = useRouter()
  const splitPath = router.pathname.split('/')
  const pathname = splitPath.length > 2 ? `/${splitPath[1]}` : router.pathname
  const activePage = MENU[pathname]

  useEffect(() => {
    showNavSet(false)
    console.log('splitPath:', splitPath)
  }, [router.pathname])
  return (
    <>
      <div className="text-xl font-bold mb-4">sibelürün.</div>
      {showNav ? (
        <nav
          className="
            flex flex-col space-y-2
            md:space-y-0 md:space-x-4 md:flex-row"
        >
          {Object.keys(MENU).map((url) => {
            return (
              <Link key={url} href={url}>
                <a>{MENU[url]}</a>
              </Link>
            )
          })}
        </nav>
      ) : (
        <button
          type="button"
          className="flex items-center"
          onClick={() => {
            showNavSet(true)
          }}
        >
          <IconMenu />
          <span className="ml-2">{activePage}</span>
        </button>
      )}

      {/* <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/">
          <a className="hover:underline">sibelürün</a>
        </Link>
        .
      </h2> */}
    </>
  )
}
