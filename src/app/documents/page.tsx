'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Plus } from 'lucide-react'
import { DocumentCard } from '@/components/document-card'
import { getUserDocuments, updateDocument, deleteDocument } from '@/lib/documents'
import type { Document } from '@/lib/types'

export default function DocumentsPage() {
  const router = useRouter()
  const [documents, setDocuments] = React.useState([] as Document[])
  const [searchQuery, setSearchQuery] = React.useState('')
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    loadDocuments()
  }, [])

  const loadDocuments = async () => {
    try {
      const docs = await getUserDocuments()
      setDocuments(docs)
    } catch (error) {
      console.error('Error loading documents:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleUpdate = async (id: string, content: string) => {
    try {
      const updatedDoc = await updateDocument(id, content)
      setDocuments((docs: Document[]) => docs.map((doc: Document) => 
        doc.id === id ? updatedDoc : doc
      ))
    } catch (error) {
      console.error('Error updating document:', error)
      alert('Failed to update document. Please try again.')
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteDocument(id)
      setDocuments((docs: Document[]) => docs.filter((doc: Document) => doc.id !== id))
    } catch (error) {
      console.error('Error deleting document:', error)
      alert('Failed to delete document. Please try again.')
    }
  }

  const handleDownload = async (id: string) => {
    try {
      const doc = documents.find((d: Document) => d.id === id)
      if (!doc) return

      // Create a blob from the document content
      const blob = new Blob([doc.content], { type: 'application/pdf' })
      const url = URL.createObjectURL(blob)
      
      // Create a temporary link and trigger download
      const link = document.createElement('a')
      link.href = url
      link.download = `${doc.title}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading document:', error)
      alert('Failed to download document. Please try again.')
    }
  }

  const filteredDocuments = documents.filter((doc: Document) =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Documents</h1>
        <Button onClick={() => router.push('/templates')} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create Document
        </Button>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="search"
          placeholder="Search documents..."
          className="pl-10"
          value={searchQuery}
          onChange={(e: { target: { value: string } }) => setSearchQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : filteredDocuments.length > 0 ? (
        <div className="grid gap-6">
          {filteredDocuments.map((doc: Document) => (
            <DocumentCard
              key={doc.id}
              id={doc.id}
              title={doc.title}
              type={doc.type}
              content={doc.content}
              category={doc.category}
              lastModified={doc.lastModified}
              status={doc.status as 'Draft' | 'Final'}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              onDownload={handleDownload}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold mb-2">No documents found</h3>
          <p className="text-gray-600 mb-4">
            {searchQuery
              ? "Try adjusting your search to find what you're looking for."
              : "You haven't created any documents yet."}
          </p>
          {!searchQuery && (
            <Button onClick={() => router.push('/templates')}>
              Create Your First Document
            </Button>
          )}
        </div>
      )}
    </div>
  )
} 