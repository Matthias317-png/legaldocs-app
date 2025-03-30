'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'

export interface PartnershipFormData {
  partnershipName: string
  partner1Name: string
  partner2Name: string
  businessPurpose: string
  capitalContributions: string
  profitSharing: string
  managementRights: string
  startDate: string
  businessName?: string
}

interface PartnershipFormProps {
  onSubmit: (data: PartnershipFormData) => void
  isSubmitting?: boolean
}

export default function PartnershipForm({ onSubmit, isSubmitting = false }: PartnershipFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    onSubmit({
      partnershipName: formData.get('partnershipName') as string,
      partner1Name: formData.get('partner1Name') as string,
      partner2Name: formData.get('partner2Name') as string,
      businessPurpose: formData.get('businessPurpose') as string,
      capitalContributions: formData.get('capitalContributions') as string,
      profitSharing: formData.get('profitSharing') as string,
      managementRights: formData.get('managementRights') as string,
      startDate: formData.get('startDate') as string,
      businessName: formData.get('businessName') as string,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Partnership Agreement Details</h2>
        <p className="text-gray-600">
          Fill in the details below to generate a professional partnership agreement.
        </p>
      </div>

      <div className="space-y-4">
        <Input
          name="businessName"
          placeholder="Business Name (Optional)"
          disabled={isSubmitting}
        />
        <Input
          name="partnershipName"
          placeholder="Partnership Name"
          required
          disabled={isSubmitting}
        />
        <Input
          name="partner1Name"
          placeholder="First Partner's Name"
          required
          disabled={isSubmitting}
        />
        <Input
          name="partner2Name"
          placeholder="Second Partner's Name"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="businessPurpose"
          placeholder="Business Purpose and Activities"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="capitalContributions"
          placeholder="Capital Contributions (e.g., Partner 1: $50,000, Partner 2: $50,000)"
          required
          disabled={isSubmitting}
        />
        <Input
          name="profitSharing"
          placeholder="Profit Sharing Ratio (e.g., 50-50)"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="managementRights"
          placeholder="Management Rights and Responsibilities"
          required
          disabled={isSubmitting}
        />
        <Input
          name="startDate"
          type="date"
          placeholder="Partnership Start Date"
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
          'Generate Partnership Agreement'
        )}
      </Button>
    </form>
  )
} 