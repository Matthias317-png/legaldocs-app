'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'

export interface CommercialLoanFormData {
  lenderName: string
  lenderAddress: string
  borrowerName: string
  borrowerAddress: string
  loanAmount: string
  interestRate: string
  loanTerm: string
  paymentSchedule: string
  collateral: string
  defaultTerms: string
  businessName?: string
}

interface CommercialLoanFormProps {
  onSubmit: (data: CommercialLoanFormData) => void
  isSubmitting?: boolean
}

export default function CommercialLoanForm({ onSubmit, isSubmitting = false }: CommercialLoanFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    onSubmit({
      lenderName: formData.get('lenderName') as string,
      lenderAddress: formData.get('lenderAddress') as string,
      borrowerName: formData.get('borrowerName') as string,
      borrowerAddress: formData.get('borrowerAddress') as string,
      loanAmount: formData.get('loanAmount') as string,
      interestRate: formData.get('interestRate') as string,
      loanTerm: formData.get('loanTerm') as string,
      paymentSchedule: formData.get('paymentSchedule') as string,
      collateral: formData.get('collateral') as string,
      defaultTerms: formData.get('defaultTerms') as string,
      businessName: formData.get('businessName') as string,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Commercial Loan Agreement Details</h2>
        <p className="text-gray-600">
          Fill in the details below to generate a commercial loan agreement.
        </p>
      </div>

      <div className="space-y-4">
        <Input
          name="businessName"
          placeholder="Business Name (Optional)"
          disabled={isSubmitting}
        />
        <Input
          name="lenderName"
          placeholder="Lender's Name"
          required
          disabled={isSubmitting}
        />
        <Input
          name="lenderAddress"
          placeholder="Lender's Address"
          required
          disabled={isSubmitting}
        />
        <Input
          name="borrowerName"
          placeholder="Borrower's Name"
          required
          disabled={isSubmitting}
        />
        <Input
          name="borrowerAddress"
          placeholder="Borrower's Address"
          required
          disabled={isSubmitting}
        />
        <Input
          name="loanAmount"
          placeholder="Loan Amount"
          type="text"
          pattern="[0-9]*"
          required
          disabled={isSubmitting}
        />
        <Input
          name="interestRate"
          placeholder="Interest Rate (%)"
          type="text"
          pattern="[0-9]*\.?[0-9]*"
          required
          disabled={isSubmitting}
        />
        <Input
          name="loanTerm"
          placeholder="Loan Term (e.g., 36 months)"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="paymentSchedule"
          placeholder="Payment Schedule Details"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="collateral"
          placeholder="Collateral Description"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="defaultTerms"
          placeholder="Default Terms and Conditions"
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
          'Generate Commercial Loan Agreement'
        )}
      </Button>
    </form>
  )
} 