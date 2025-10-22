import type { Metadata } from 'next'
import { Bitter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

export const metadata: Metadata = {
  title: 'Logicwerk DLM - Smart, Fast & Scalable Manufacturing',
  description: 'Logicwerk DLM - Smart, Fast & Scalable Manufacturing. AI-powered manufacturing, global scale, and rapid prototyping.',
  generator: 'v0.dev',
}

const bitter = Bitter({
  subsets: ['latin'],
  variable: '--font-bitter',
  display: 'swap',
})

const garet = localFont({
  src: [
    // Light (300)
    { path: '../public/fonts/fonnts.com-garet-light.otf',   weight: '300', style: 'normal' },
    // Regular (400)
    { path: '../public/fonts/fonnts.com-garet-regular.otf', weight: '400', style: 'normal' },
    // Medium (500)
    { path: '../public/fonts/fonnts.com-garet-medium.otf',  weight: '500', style: 'normal' },
    { path: '../public/fonts/Garet-Book.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Garet-Book.woff',  weight: '400', style: 'normal' },
    { path: '../public/fonts/Garet-Book.otf',   weight: '400', style: 'normal' },
    { path: '../public/fonts/Garet-Book.ttf',   weight: '400', style: 'normal' },
    { path: '../public/fonts/Garet-Heavy.woff2', weight: '800', style: 'normal' },
    { path: '../public/fonts/Garet-Heavy.woff',  weight: '800', style: 'normal' },
    { path: '../public/fonts/Garet-Heavy.otf',   weight: '800', style: 'normal' },
    { path: '../public/fonts/Garet-Heavy.ttf',   weight: '800', style: 'normal' },
  ],
  variable: '--font-garet',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bitter.variable} ${garet.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
