'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Pencil, Download, Trash2 } from 'lucide-react'
import { DocumentType } from '@/lib/openai'
import { Textarea } from '@/components/ui/textarea'

interface DocumentCardProps {
  id: string
  title: string
  category: string
  type: DocumentType
  content: string
  lastModified: string
  status: 'Draft' | 'Final'
  onUpdate: (id: string, content: string) => Promise<void>
  onDelete: (id: string) => Promise<void>
  onDownload: (id: string) => Promise<void>
}

export function DocumentCard({
  id,
  title,
  category,
  type,
  content,
  lastModified,
  status,
  onUpdate,
  onDelete,
  onDownload
}: DocumentCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState(content)
  const [isLoading, setIsLoading] = useState(false)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleDone = async () => {
    setIsLoading(true)
    try {
      await onUpdate(id, editedContent)
      setIsEditing(false)
    } catch (error) {
      console.error('Error updating document:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = async () => {
    try {
      await onDownload(id)
    } catch (error) {
      console.error('Error downloading document:', error)
    }
  }

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this document?')) {
      try {
        await onDelete(id)
      } catch (error) {
        console.error('Error deleting document:', error)
      }
    }
  }

  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            <p className="text-sm text-gray-500">{category}</p>
            <p className="text-sm text-gray-500">Last modified: {lastModified}</p>
            <span className={`inline-block px-2 py-1 text-xs rounded ${
              status === 'Final' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {status}
            </span>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleEdit} variant="ghost" size="icon">
              <Pencil className="h-4 w-4" />
            </Button>
            <Button onClick={handleDownload} variant="ghost" size="icon">
              <Download className="h-4 w-4" />
            </Button>
            <Button onClick={handleDelete} variant="ghost" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-4">
            <Textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="min-h-[200px]"
            />
            <Button onClick={handleDone} disabled={isLoading}>
              {isLoading ? 'Saving...' : 'Done'}
            </Button>
          </div>
        ) : (
          <div className="prose max-w-none">
            <p className="line-clamp-3">{content}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 