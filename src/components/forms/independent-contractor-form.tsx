'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'

export interface IndependentContractorFormData {
  clientName: string
  contractorName: string
  servicesDescription: string
  paymentTerms: string
  projectTimeline: string
  businessName?: string
}

interface IndependentContractorFormProps {
  onSubmit: (data: IndependentContractorFormData) => void
  isSubmitting?: boolean
}

export default function IndependentContractorForm({ onSubmit, isSubmitting = false }: IndependentContractorFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    onSubmit({
      clientName: formData.get('clientName') as string,
      contractorName: formData.get('contractorName') as string,
      servicesDescription: formData.get('servicesDescription') as string,
      paymentTerms: formData.get('paymentTerms') as string,
      projectTimeline: formData.get('projectTimeline') as string,
      businessName: formData.get('businessName') as string,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Independent Contractor Agreement Details</h2>
        <p className="text-gray-600">
          Fill in the details below to generate a professional independent contractor agreement.
        </p>
      </div>

      <div className="space-y-4">
        <Input
          name="businessName"
          placeholder="Business Name (Optional)"
          disabled={isSubmitting}
        />
        <Input
          name="clientName"
          placeholder="Client Name"
          required
          disabled={isSubmitting}
        />
        <Input
          name="contractorName"
          placeholder="Contractor Name"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="servicesDescription"
          placeholder="Detailed description of services to be provided"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="paymentTerms"
          placeholder="Payment terms and conditions"
          required
          disabled={isSubmitting}
        />
        <Input
          name="projectTimeline"
          placeholder="Project timeline (e.g., 3 months)"
          required
          disabled={isSubmitting}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating Agreement...
          </>
        ) : (
          'Generate Independent Contractor Agreement'
        )}
      </Button>
    </form>
  )
} 