'use client'

import '@/globals.css'
import { useState, useEffect } from 'react'

export default function Layout({ children, posts }: { children: React.ReactNode; posts: React.ReactNode }) {
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    setUserId(window.localStorage.getItem('demo-userId') || null)
  }, [])

  return (
    <>
      {children}
      {userId ? posts : <></>}
    </>
  )
}
