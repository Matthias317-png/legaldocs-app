'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import BusinessDetailsForm from '@/components/business-details-form'
import { BusinessDetails, DocumentType, generateDocument } from '@/lib/openai'
import { supabase } from '@/lib/supabase-client'
import { toast } from 'sonner'

// Explicitly define the DocumentType
const documentTypes = [
  'Non-Disclosure Agreement',
  'Employment Contract',
  'Service Agreement',
  'Privacy Policy',
  'Terms of Service',
] as const

export default function NewDocument() {
  const router = useRouter()
  // Fix the useState typing by removing the generic type argument
  const [selectedType, setSelectedType] = useState('')
  const [showForm, setShowForm] = useState(false)

  const handleDocumentTypeSelect = (type: string) => {
    if (documentTypes.includes(type as DocumentType)) {
      setSelectedType(type)
      setShowForm(true)
    }
  }

  const handleSubmit = async (details: BusinessDetails) => {
    try {
      if (!documentTypes.includes(selectedType as DocumentType)) {
        throw new Error('Invalid document type selected')
      }

      // Generate document using OpenAI
      const content = await generateDocument(selectedType as DocumentType, details)

      // Save to Supabase
      const { data, error } = await supabase
        .from('documents')
        .insert([
          {
            title: `${details.businessName} - ${selectedType}`,
            content,
            type: selectedType as DocumentType,
            status: 'draft',
            business_details: details,
          },
        ])
        .select()

      if (error) throw error

      // Navigate to the edit page for the new document
      if (data?.[0]?.id) {
        router.push(`/documents/${data[0].id}/edit`)
        toast.success('Document created successfully')
      }
    } catch (error) {
      console.error('Error creating document:', error)
      toast.error('Failed to create document. Please try again.')
    }
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Create New Document</h1>

          {!showForm ? (
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Select Document Type</h2>
                <p className="text-gray-600">
                  Choose the type of document you want to create. We&apos;ll help you generate a
                  professional document tailored to your business.
                </p>
              </div>

              <Select 
                value={selectedType} 
                onValueChange={handleDocumentTypeSelect}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select document type" />
                </SelectTrigger>
                <SelectContent>
                  {documentTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : (
            <>
              <Button
                variant="ghost"
                className="mb-6"
                onClick={() => {
                  setShowForm(false)
                  setSelectedType('')
                }}
              >
                ← Back to Document Types
              </Button>
              <BusinessDetailsForm
                documentType={selectedType as DocumentType}
                onSubmit={handleSubmit}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
} 