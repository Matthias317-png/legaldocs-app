'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'

export interface LeaseAgreementFormData {
  propertyAddress: string
  landlordName: string
  tenantName: string
  leaseTerm: string
  monthlyRent: string
  securityDeposit: string
  businessName?: string
}

interface LeaseAgreementFormProps {
  onSubmit: (data: LeaseAgreementFormData) => void
  isSubmitting?: boolean
}

export default function LeaseAgreementForm({ onSubmit, isSubmitting = false }: LeaseAgreementFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    onSubmit({
      propertyAddress: formData.get('propertyAddress') as string,
      landlordName: formData.get('landlordName') as string,
      tenantName: formData.get('tenantName') as string,
      leaseTerm: formData.get('leaseTerm') as string,
      monthlyRent: formData.get('monthlyRent') as string,
      securityDeposit: formData.get('securityDeposit') as string,
      businessName: formData.get('businessName') as string,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Lease Agreement Details</h2>
        <p className="text-gray-600">
          Fill in the details below to generate a professional lease agreement.
        </p>
      </div>

      <div className="space-y-4">
        <Input
          name="businessName"
          placeholder="Business Name (Optional)"
          disabled={isSubmitting}
        />
        <Input
          name="propertyAddress"
          placeholder="Property Address"
          required
          disabled={isSubmitting}
        />
        <Input
          name="landlordName"
          placeholder="Landlord Name"
          required
          disabled={isSubmitting}
        />
        <Input
          name="tenantName"
          placeholder="Tenant Name"
          required
          disabled={isSubmitting}
        />
        <Input
          name="leaseTerm"
          placeholder="Lease Term (e.g., 12 months)"
          required
          disabled={isSubmitting}
        />
        <Input
          name="monthlyRent"
          placeholder="Monthly Rent"
          type="number"
          required
          disabled={isSubmitting}
        />
        <Input
          name="securityDeposit"
          placeholder="Security Deposit"
          type="number"
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
          'Generate Lease Agreement'
        )}
      </Button>
    </form>
  )
} 