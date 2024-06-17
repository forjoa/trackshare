import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import NavigationBar from '@/components/NavigationBar'
import Footer from '@/components/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '800']})

export const metadata: Metadata = {
  title: 'Trackshare - The easiest way to share your music',
  description: 'Generate your own links for each song you release',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
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
