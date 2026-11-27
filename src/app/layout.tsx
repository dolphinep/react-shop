import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ร้านมื้อเช้า · Next.js',
  description: 'The why-react shop, moved to Next.js',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
