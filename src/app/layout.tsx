import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import NavigationBar from '@/components/NavigationBar'
import Footer from '@/components/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '800'] })

export const metadata: Metadata = {
  title: 'Trackshare - The easiest way to share your music',
  description: 'Generate your own links for each song you release',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favico.png' sizes='any' />
      </head>
      <body className={poppins.className}>
        <div className='flex flex-col justify-between min-h-[100dvh]'>
          <NavigationBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
