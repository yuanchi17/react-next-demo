'use client'

import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navs = [
    { title: 'Home', href: '/' },
    { title: 'Post', href: '/post' },
    { title: 'Demo', href: '/demo' },
    { title: 'Member', href: '/member' },
  ]

  return (
    <div>
      {navs.map((nav, id) => {
        let isActive
        if (nav.href === '/') isActive = pathname === nav.href
        else isActive = pathname.startsWith(nav.href)

        return (
          <span key={nav.href}>
            {!id ? <></> : <span>｜</span>}
            <Link href={nav.href} style={{ color: isActive ? 'blue' : '' }}>
              {nav.title}
            </Link>
          </span>
        )
      })}
    </div>
  )
}
