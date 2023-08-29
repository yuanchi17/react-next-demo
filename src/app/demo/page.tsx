import Link from "next/link";

export default function Demo() {
  const navs = [
    { title: 'Test in /src/demo/test', href: '/demo/test' },
    { title: 'Demo Error', href: '/demo/errorrrrr' },
    { title: 'Demo Not Found (id: 17)', href: '/demo/17' },
  ]
  return (
    <>
      <h1>Demo</h1>
      {navs.map((nav, id) => (
        <li key={id}>
          <Link href={nav.href}>{nav.title}</Link>
        </li>
      ))}
    </>
    
  )
}
