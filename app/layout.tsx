import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Logicwerk DLM: Manufacturing at the Speed of Light',
  description: 'Logicwerk DLM: Manufacturing at the Speed of Light. AI-powered manufacturing, global scale, and rapid prototyping.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
