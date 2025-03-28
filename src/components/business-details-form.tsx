'use client'

import React from 'react'
import { DocumentType } from '@/lib/openai'
import NDAForm from './forms/nda-form'
import EmploymentContractForm from './forms/employment-contract-form'
import ServiceAgreementForm from './forms/service-agreement-form'
import PrivacyPolicyForm from './forms/privacy-policy-form'
import TermsOfServiceForm from './forms/terms-of-service-form'

interface BusinessDetailsFormProps {
  documentType: DocumentType
  onSubmit: (data: any) => Promise<void>
}

export default function BusinessDetailsForm({ documentType, onSubmit }: BusinessDetailsFormProps) {
  const renderForm = () => {
    switch (documentType) {
      case 'Non-Disclosure Agreement':
        return <NDAForm onSubmit={onSubmit} />
      case 'Employment Contract':
        return <EmploymentContractForm onSubmit={onSubmit} />
      case 'Service Agreement':
        return <ServiceAgreementForm onSubmit={onSubmit} />
      case 'Privacy Policy':
        return <PrivacyPolicyForm onSubmit={onSubmit} />
      case 'Terms of Service':
        return <TermsOfServiceForm onSubmit={onSubmit} />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Document Details</h2>
        <p className="text-gray-600">
          Please fill in the details for your {documentType}. We&apos;ll use this information to
          generate a professional document tailored to your needs.
        </p>
      </div>

      {renderForm()}
    </div>
  )
} 