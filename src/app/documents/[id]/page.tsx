'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Download, Edit2, Trash2 } from 'lucide-react'

interface DocumentPreviewProps {
  params: {
    id: string
  }
}

type DocumentStatus = 'draft' | 'final'

export default function DocumentPreview({ params }: DocumentPreviewProps) {
  // This would be replaced with actual data fetching
  const document = {
    id: params.id,
    title: 'Sample Document',
    type: 'Contract',
    content: `
      THIS AGREEMENT is made on [DATE]

      BETWEEN:
      [PARTY A], a company incorporated in [JURISDICTION] with company number [NUMBER] whose registered office is at [ADDRESS] ("Party A")

      AND
      [PARTY B], a company incorporated in [JURISDICTION] with company number [NUMBER] whose registered office is at [ADDRESS] ("Party B")

      BACKGROUND:
      A. [Background information]
      B. [Additional context]

      IT IS AGREED as follows:

      1. DEFINITIONS
      1.1 In this Agreement:
          "Business Day" means a day other than a Saturday, Sunday or public holiday in [JURISDICTION]
          "Confidential Information" means [definition]
          "Intellectual Property Rights" means [definition]

      2. INTERPRETATION
      2.1 In this Agreement:
          (a) references to Clauses are to clauses of this Agreement
          (b) the headings are for convenience only and shall not affect interpretation
    `,
    lastModified: '2024-02-20',
    status: 'draft' as DocumentStatus,
  }

  const handleEdit = () => {
    // Implement edit functionality
    console.log('Edit document:', document.id)
  }

  const handleDownload = () => {
    // Implement download functionality
    console.log('Download document:', document.id)
  }

  const handleDelete = () => {
    // Implement delete functionality
    console.log('Delete document:', document.id)
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Document Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">{document.title}</h1>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">{document.type}</span>
                <span className="text-sm text-gray-500">
                  Last modified: {new Date(document.lastModified).toLocaleDateString()}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    document.status === 'final'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {document.status.charAt(0).toUpperCase() + document.status.slice(1)}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={handleEdit}>
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={handleDownload}>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={handleDelete}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Document Content */}
          <Card>
            <CardContent className="p-6">
              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-sm">{document.content}</pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 