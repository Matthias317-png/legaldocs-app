'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { DocumentType, generateDocument } from '@/lib/openai'
import { createDocument } from '@/lib/supabase-client'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

// Import all form components
import NDAForm, { NDAFormData } from '@/components/forms/nda-form'
import EmploymentContractForm from '@/components/forms/employment-contract-form'
import ServiceAgreementForm from '@/components/forms/service-agreement-form'
import PrivacyPolicyForm from '@/components/forms/privacy-policy-form'
import TermsOfServiceForm from '@/components/forms/terms-of-service-form'
import LeaseAgreementForm from '@/components/forms/lease-agreement-form'
import IPAssignmentForm from '@/components/forms/ip-assignment-form'
import IndependentContractorForm from '@/components/forms/independent-contractor-form'
import SoftwareLicenseForm from '@/components/forms/software-license-form'
import PartnershipForm from '@/components/forms/partnership-form'
import WillForm from '@/components/forms/will-form'
import PowerOfAttorneyForm from '@/components/forms/power-of-attorney-form'
import CommercialLoanForm from '@/components/forms/commercial-loan-form'
import ChildCustodyForm from '@/components/forms/child-custody-form'
import CeaseAndDesistForm from '@/components/forms/cease-and-desist-form'
import { generateNDA } from '@/lib/gpt-service'

// Define available document types
const documentTypes = [
  'Non-Disclosure Agreement',
  'Employment Contract',
  'Service Agreement',
  'Privacy Policy',
  'Terms of Service',
  'Lease Agreement',
  'Intellectual Property Assignment',
  'Independent Contractor Agreement',
  'Software License Agreement',
  'Partnership Agreement',
  'Last Will and Testament',
  'Power of Attorney',
  'Commercial Loan Agreement',
  'Child Custody Agreement',
  'Cease and Desist Letter',
] as const

// Define form mapping
const formComponents = {
  'Non-Disclosure Agreement': NDAForm,
  'Employment Contract': EmploymentContractForm,
  'Service Agreement': ServiceAgreementForm,
  'Privacy Policy': PrivacyPolicyForm,
  'Terms of Service': TermsOfServiceForm,
  'Lease Agreement': LeaseAgreementForm,
  'Intellectual Property Assignment': IPAssignmentForm,
  'Independent Contractor Agreement': IndependentContractorForm,
  'Software License Agreement': SoftwareLicenseForm,
  'Partnership Agreement': PartnershipForm,
  'Last Will and Testament': WillForm,
  'Power of Attorney': PowerOfAttorneyForm,
  'Commercial Loan Agreement': CommercialLoanForm,
  'Child Custody Agreement': ChildCustodyForm,
  'Cease and Desist Letter': CeaseAndDesistForm,
} as const

function NewDocumentContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedType, setSelectedType] = useState<DocumentType | ''>('')
  const [showForm, setShowForm] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle URL parameters
  useEffect(() => {
    const typeFromUrl = searchParams.get('type')
    if (typeFromUrl && documentTypes.includes(typeFromUrl as DocumentType)) {
      setSelectedType(typeFromUrl as DocumentType)
      setShowForm(true)
    }
  }, [searchParams])

  // Handle document type selection
  const handleDocumentTypeSelect = (type: string) => {
    if (documentTypes.includes(type as DocumentType)) {
      setSelectedType(type as DocumentType)
      setShowForm(true)
    }
  }

  // Handle form submission
  const handleSubmit = async (formData: NDAFormData) => {
    try {
      setIsSubmitting(true)
      
      // Generate the document content using GPT-4
      const documentContent = await generateNDA(formData)
      
      // Create the document in the database
      const document = await createDocument({
        title: `NDA - ${formData.businessName}`,
        type: 'NDA',
        content: documentContent,
        category: 'Business',
        metadata: formData,
      })

      toast.success('Document generated successfully!')
      router.push('/documents')
    } catch (error) {
      console.error('Error generating document:', error)
      toast.error('Failed to generate document. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Render the appropriate form based on selected type
  const renderForm = () => {
    if (!selectedType || !formComponents[selectedType]) return null

    const FormComponent = formComponents[selectedType]
    return <FormComponent onSubmit={handleSubmit} isSubmitting={isSubmitting} />
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

export default function NewDocument() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewDocumentContent />
    </Suspense>
  )
} 