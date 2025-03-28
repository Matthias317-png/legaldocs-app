import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { DocumentType } from '@/lib/openai'

interface DocumentTemplateCardProps {
  title: string
  category: string
  type: DocumentType
  lastModified?: string
}

export function DocumentTemplateCard({ title, category, type, lastModified }: DocumentTemplateCardProps) {
  const router = useRouter()

  const handleCreate = () => {
    router.push(`/documents/new?type=${type}`)
  }

  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-gray-500">{category}</p>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          {lastModified && (
            <p className="text-sm text-gray-500">Last modified: {lastModified}</p>
          )}
          <Button onClick={handleCreate} variant="ghost" size="icon">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 