import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'


const inter = Inter({ subsets: ['latin'] })

// Font files can be colocated inside of `app`
export const myFont = localFont({
  src: '../../public/fonts/MADEOkineSansPERSONALUSE-regular.otf'
  })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${myFont.className}`}> 
      <body>{children}</body>
    </html>
  )
}
