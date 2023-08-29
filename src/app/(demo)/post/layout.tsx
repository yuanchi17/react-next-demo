import type { Metadata } from 'next'
import { Inter } from 'next/font/google' // 字型

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Post',
  description: 'Demo Post',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={inter.className}>
      {children}
    </div>
  )
}
