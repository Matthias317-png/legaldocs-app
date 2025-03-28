'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import AuthProvider from './auth-provider'

interface ProvidersProps {
  children: React.ReactNode
}

const queryClient = new QueryClient()

export default function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div>
          {children}
          <Toaster />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  )
} 