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
import { DocumentType, generateDocument } from '@/lib/openai'
import { createDocument, type Document } from '@/lib/supabase-client'
import { toast } from 'sonner'
import NDAForm from '@/components/forms/nda-form'
import EmploymentContractForm from '@/components/forms/employment-contract-form'
import ServiceAgreementForm from '@/components/forms/service-agreement-form'
import PrivacyPolicyForm from '@/components/forms/privacy-policy-form'
import TermsOfServiceForm from '@/components/forms/terms-of-service-form'
import { Loader2 } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'

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
  const { user } = useAuth()
  const [selectedType, setSelectedType] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDocumentTypeSelect = (type: string) => {
    if (documentTypes.includes(type as DocumentType)) {
      setSelectedType(type)
      setShowForm(true)
    }
  }

  const handleSubmit = async (details: any) => {
    try {
      setIsGenerating(true)
      
      if (!documentTypes.includes(selectedType as DocumentType)) {
        throw new Error('Invalid document type selected')
      }

      if (!user) {
        throw new Error('You must be logged in to create a document')
      }

      // Generate document using OpenAI
      const content = await generateDocument(selectedType as DocumentType, details)

      // Create document in Supabase
      const document = await createDocument({
        title: `${details.businessName || 'Untitled'} - ${selectedType}`,
        content,
        type: selectedType as DocumentType,
        status: 'draft',
        business_details: details,
        user_id: user.id,
      })

      // Navigate to the edit page for the new document
      if (document?.id) {
        router.push(`/documents/${document.id}/edit`)
        toast.success('Document created successfully')
      }
    } catch (error) {
      console.error('Error creating document:', error)
      toast.error('Failed to create document. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const renderForm = () => {
    switch (selectedType) {
      case 'Non-Disclosure Agreement':
        return <NDAForm onSubmit={handleSubmit} isSubmitting={isGenerating} />
      case 'Employment Contract':
        return <EmploymentContractForm onSubmit={handleSubmit} isSubmitting={isGenerating} />
      case 'Service Agreement':
        return <ServiceAgreementForm onSubmit={handleSubmit} isSubmitting={isGenerating} />
      case 'Privacy Policy':
        return <PrivacyPolicyForm onSubmit={handleSubmit} isSubmitting={isGenerating} />
      case 'Terms of Service':
        return <TermsOfServiceForm onSubmit={handleSubmit} isSubmitting={isGenerating} />
      default:
        return null
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
                disabled={isGenerating}
              >
                ← Back to Document Types
              </Button>
              {renderForm()}
            </>
          )}
        </div>
      </div>
    </div>
  )
} 