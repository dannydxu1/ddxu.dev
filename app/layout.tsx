import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Head from 'next/head';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  
  title: 'Danny Xu - Portfolio',
  description: 'Personal portfolio of Danny Xu',
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Danny Xu - Portfolio',
    statusBarStyle: 'default',
  },
  other: {
    'msapplication-TileColor': '#da532c',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}