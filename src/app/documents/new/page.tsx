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
import NDAForm, { NDAFormData } from '@/components/forms/nda-form'
import EmploymentContractForm, { EmploymentContractFormData } from '@/components/forms/employment-contract-form'
import ServiceAgreementForm, { ServiceAgreementFormData } from '@/components/forms/service-agreement-form'
import PrivacyPolicyForm, { PrivacyPolicyFormData } from '@/components/forms/privacy-policy-form'
import TermsOfServiceForm, { TermsOfServiceFormData } from '@/components/forms/terms-of-service-form'
import LeaseAgreementForm, { LeaseAgreementFormData } from '@/components/forms/lease-agreement-form'
import IPAssignmentForm, { IPAssignmentFormData } from '@/components/forms/ip-assignment-form'
import IndependentContractorForm, { IndependentContractorFormData } from '@/components/forms/independent-contractor-form'
import SoftwareLicenseForm, { SoftwareLicenseFormData } from '@/components/forms/software-license-form'
import PartnershipForm, { PartnershipFormData } from '@/components/forms/partnership-form'
import WillForm, { WillFormData } from '@/components/forms/will-form'
import PowerOfAttorneyForm, { PowerOfAttorneyFormData } from '@/components/forms/power-of-attorney-form'
import CommercialLoanForm, { CommercialLoanFormData } from '@/components/forms/commercial-loan-form'
import ChildCustodyForm, { ChildCustodyFormData } from '@/components/forms/child-custody-form'
import CeaseAndDesistForm, { CeaseAndDesistFormData } from '@/components/forms/cease-and-desist-form'
import { Loader2 } from 'lucide-react'

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

type FormData = 
  | NDAFormData 
  | EmploymentContractFormData 
  | ServiceAgreementFormData 
  | PrivacyPolicyFormData 
  | TermsOfServiceFormData
  | LeaseAgreementFormData
  | IPAssignmentFormData
  | IndependentContractorFormData
  | SoftwareLicenseFormData
  | PartnershipFormData
  | WillFormData
  | PowerOfAttorneyFormData
  | CommercialLoanFormData
  | ChildCustodyFormData
  | CeaseAndDesistFormData

function NewDocumentContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedType, setSelectedType] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    const typeFromUrl = searchParams.get('type')
    if (typeFromUrl && documentTypes.includes(typeFromUrl as DocumentType)) {
      setSelectedType(typeFromUrl)
      setShowForm(true)
    }
  }, [searchParams])

  const handleDocumentTypeSelect = (type: string) => {
    if (documentTypes.includes(type as DocumentType)) {
      setSelectedType(type)
      setShowForm(true)
    }
  }

  const handleSubmit = async (details: FormData) => {
    try {
      setIsGenerating(true)
      
      if (!documentTypes.includes(selectedType as DocumentType)) {
        throw new Error('Invalid document type selected')
      }

      const content = await generateDocument(selectedType as DocumentType, details)

      const document = await createDocument({
        title: `${details.businessName || 'Untitled'} - ${selectedType}`,
        content,
        type: selectedType as DocumentType,
        status: 'draft',
        business_details: details,
        user_id: 'anonymous'
      })

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
      case 'Lease Agreement':
        return <LeaseAgreementForm onSubmit={handleSubmit} isSubmitting={isGenerating} />
      case 'Intellectual Property Assignment':
        return <IPAssignmentForm onSubmit={handleSubmit} isSubmitting={isGenerating} />
      case 'Independent Contractor Agreement':
        return <IndependentContractorForm onSubmit={handleSubmit} isSubmitting={isGenerating} />
      case 'Software License Agreement':
        return <SoftwareLicenseForm onSubmit={handleSubmit} isSubmitting={isGenerating} />
      case 'Partnership Agreement':
        return <PartnershipForm onSubmit={handleSubmit} isSubmitting={isGenerating} />
      case 'Last Will and Testament':
        return <WillForm onSubmit={handleSubmit} isSubmitting={isGenerating} />
      case 'Power of Attorney':
        return <PowerOfAttorneyForm onSubmit={handleSubmit} isSubmitting={isGenerating} />
      case 'Commercial Loan Agreement':
        return <CommercialLoanForm onSubmit={handleSubmit} isSubmitting={isGenerating} />
      case 'Child Custody Agreement':
        return <ChildCustodyForm onSubmit={handleSubmit} isSubmitting={isGenerating} />
      case 'Cease and Desist Letter':
        return <CeaseAndDesistForm onSubmit={handleSubmit} isSubmitting={isGenerating} />
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

export default function NewDocument() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewDocumentContent />
    </Suspense>
  )
} 