'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href='/post/1'>POST/1</Link>
    </>
  )
}
