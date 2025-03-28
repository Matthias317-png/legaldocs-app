'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FileText, Search, Plus } from 'lucide-react'
import DocumentCard from '@/components/document-card'
import { useRouter } from 'next/navigation'

// This would be replaced with actual data fetching
const documents = [
  {
    title: 'Non-Disclosure Agreement',
    type: 'Confidentiality',
    lastModified: '2024-02-20',
    status: 'final' as const,
  },
  {
    title: 'Employment Contract',
    type: 'Employment',
    lastModified: '2024-02-19',
    status: 'draft' as const,
  },
  {
    title: 'Service Agreement',
    type: 'Business',
    lastModified: '2024-02-18',
    status: 'final' as const,
  },
  {
    title: 'Website Terms of Service',
    type: 'Website Legal',
    lastModified: '2024-02-17',
    status: 'draft' as const,
  },
  {
    title: 'Privacy Policy',
    type: 'Website Legal',
    lastModified: '2024-02-16',
    status: 'final' as const,
  },
  {
    title: 'Partnership Agreement',
    type: 'Business',
    lastModified: '2024-02-15',
    status: 'draft' as const,
  },
]

export default function DocumentsPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  const filteredDocuments = documents.filter((document) =>
    document.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleCreateDocument = () => {
    // Implement document creation
    console.log('Create new document')
    router.push('/templates')
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">My Documents</h1>
            <Button onClick={handleCreateDocument}>
              <Plus className="h-4 w-4 mr-2" />
              Create Document
            </Button>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search documents..."
                className="pl-10"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid gap-6">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((document) => (
                <DocumentCard
                  key={document.title}
                  {...document}
                  onEdit={() => router.push(`/documents/${document.title}/edit`)}
                  onDownload={() => console.log('Download document:', document.title)}
                  onDelete={() => console.log('Delete document:', document.title)}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No documents found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or create a new document.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 