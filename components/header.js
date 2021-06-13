import Link from 'next/link'

export default function Header() {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/">
          <a className="hover:underline">sibelürün</a>
        </Link>
        .
      </h2>
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
    </>
  )
}
