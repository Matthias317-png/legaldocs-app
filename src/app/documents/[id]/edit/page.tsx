'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Save, X, FileCheck, FileEdit } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface DocumentEditProps {
  params: {
    id: string
  }
}

type DocumentStatus = 'draft' | 'final'

export default function DocumentEdit({ params }: DocumentEditProps) {
  const router = useRouter()
  const [title, setTitle] = useState('Sample Document')
  const [status, setStatus] = useState('draft' as DocumentStatus)
  const [content, setContent] = useState(`
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
  `)

  const handleSave = () => {
    // Implement save functionality
    console.log('Save document:', { id: params.id, title, content, status })
    router.push(`/documents/${params.id}`)
  }

  const handleCancel = () => {
    router.push(`/documents/${params.id}`)
  }

  const toggleStatus = () => {
    setStatus(status === 'draft' ? 'final' : 'draft')
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Document Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <Input
                type="text"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                className="text-3xl font-bold mb-2 w-full"
                placeholder="Document Title"
              />
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Contract</span>
                <span className="text-sm text-gray-500">
                  Last modified: {new Date().toLocaleDateString()}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleStatus}
                  className={`${
                    status === 'draft' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' : 'bg-green-100 text-green-800 hover:bg-green-200'
                  }`}
                >
                  {status === 'draft' ? (
                    <>
                      <FileEdit className="mr-2 h-4 w-4" />
                      Draft
                    </>
                  ) : (
                    <>
                      <FileCheck className="mr-2 h-4 w-4" />
                      Final
                    </>
                  )}
                </Button>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={handleCancel}>
                <X className="h-4 w-4" />
              </Button>
              <Button size="icon" onClick={handleSave}>
                <Save className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Document Content */}
          <Card>
            <CardContent className="p-6">
              <textarea
                value={content}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                className="w-full h-[600px] p-4 font-sans text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Document content..."
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 