import type { Metadata } from 'next'
import { DM_Mono, DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-dm-mono' })

export const metadata: Metadata = {
  title: 'The Assembly Line - Economic History Museum',
  description: 'Explore the 1920s economy through an interactive Ford assembly line exhibit',
}

// Move viewport config out of `metadata` to the dedicated `viewport` export
// See: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
export const viewport = { width: 'device-width', initialScale: 1 }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
