'use client'

import React from 'react'
import { Toaster } from 'sonner'
import PageTransition from '@/components/page-transition'
import Navbar from '@/components/navbar'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main>
          {children}
        </main>
      </PageTransition>
      <Toaster />
    </>
  )
} 