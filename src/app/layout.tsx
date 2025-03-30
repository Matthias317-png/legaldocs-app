import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Providers from '@/components/providers'
import ClientLayout from '@/components/client-layout'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Legal Document Generator',
  description: 'Generate professional legal documents with AI assistance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ClientLayout>
            {children}
          </ClientLayout>
        </Providers>
      </body>
    </html>
  )
} 