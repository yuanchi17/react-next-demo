import Link from 'next/link'

export default function Header() {
  const navs = [
    { title: 'Home', href: '/' },
    { title: 'Post', href: '/post' },
    { title: 'Demo', href: '/demo' },
  ]
  return (
    <div>
      {navs.map((nav, id) => (
        <>
          {!id ? <></> : <span>｜</span>}
          <Link href={nav.href} key={id}>{nav.title}</Link>
        </>
      ))}
    </div>
  )
}
