'use client'

import Link from 'next/link'

// @ts-ignore
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navs = [
    { title: 'Home', href: '/' },
    { title: 'Post', href: '/post' },
    { title: 'Demo', href: '/demo' },
  ]

  return (
    <div>
      {navs.map((nav, id) => {
        let isActive
        if (nav.href === '/') isActive = pathname === nav.href
        else isActive = pathname.startsWith(nav.href)

        return (
          <>
            {!id ? <></> : <span>｜</span>}
            <Link href={nav.href} key={id} style={{ color: isActive ? 'blue' : '' }}>
              {nav.title}
            </Link>
          </>
        )
      })}
    </div>
  )
}
