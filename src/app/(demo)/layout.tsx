import type { Metadata } from 'next'
import { Black_Ops_One } from 'next/font/google' // 字型

const blackOpsOne = Black_Ops_One({weight:['400'], subsets: ['latin'] })

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
    <div className={blackOpsOne.className}>
      {children}
    </div>
  )
}
