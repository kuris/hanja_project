import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: '한자 이야기 - 재미있게 배우는 한자',
  description: '재미있는 이야기로 배우는 한자 학습 웹사이트'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
