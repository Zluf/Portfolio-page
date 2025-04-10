import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '../components/Header/Header'
import Icons from '../components/Icons'
import Image from 'next/image'
import bg from '@/public/img/bg.jpg'

export const metadata: Metadata = {
  title: 'Slav Konovalov | Front End Developer',
  description: 'Front End Developer Portfolio',
  icons: ['/img/sk-logo.png'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body id="body">
        <Header />
        <Icons />
        <div className="wrapper">{children}</div>
      </body>
    </html>
  )
}
