'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { DocumentType } from '@/lib/openai'

interface DocumentTemplateCardProps {
  title: string
  category: string
  type: DocumentType
}

export function DocumentTemplateCard({ title, category, type }: DocumentTemplateCardProps) {
  const router = useRouter()

  const handleCreateDocument = () => {
    // Navigate to the new document page with the selected type
    router.push(`/documents/new?type=${encodeURIComponent(type)}`)
  }

  return (
    <Card className="relative group hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            <CardDescription className="mt-2 text-gray-600">{category}</CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleCreateDocument}
          >
            <Plus className="h-5 w-5" />
            <span className="sr-only">Create {title}</span>
          </Button>
        </div>
      </CardHeader>
    </Card>
  )
} 