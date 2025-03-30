'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'

export interface WillFormData {
  testatorName: string
  testatorAddress: string
  executorName: string
  executorAddress: string
  alternateExecutorName: string
  beneficiaries: string
  specificBequests: string
  residualEstate: string
  finalWishes: string
  businessName?: string
}

interface WillFormProps {
  onSubmit: (data: WillFormData) => void
  isSubmitting?: boolean
}

export default function WillForm({ onSubmit, isSubmitting = false }: WillFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    onSubmit({
      testatorName: formData.get('testatorName') as string,
      testatorAddress: formData.get('testatorAddress') as string,
      executorName: formData.get('executorName') as string,
      executorAddress: formData.get('executorAddress') as string,
      alternateExecutorName: formData.get('alternateExecutorName') as string,
      beneficiaries: formData.get('beneficiaries') as string,
      specificBequests: formData.get('specificBequests') as string,
      residualEstate: formData.get('residualEstate') as string,
      finalWishes: formData.get('finalWishes') as string,
      businessName: formData.get('businessName') as string,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Last Will and Testament Details</h2>
        <p className="text-gray-600">
          Fill in the details below to generate your last will and testament.
        </p>
      </div>

      <div className="space-y-4">
        <Input
          name="businessName"
          placeholder="Business Name (Optional)"
          disabled={isSubmitting}
        />
        <Input
          name="testatorName"
          placeholder="Your Full Legal Name"
          required
          disabled={isSubmitting}
        />
        <Input
          name="testatorAddress"
          placeholder="Your Current Address"
          required
          disabled={isSubmitting}
        />
        <Input
          name="executorName"
          placeholder="Executor's Full Name"
          required
          disabled={isSubmitting}
        />
        <Input
          name="executorAddress"
          placeholder="Executor's Address"
          required
          disabled={isSubmitting}
        />
        <Input
          name="alternateExecutorName"
          placeholder="Alternate Executor's Name"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="beneficiaries"
          placeholder="List of Beneficiaries (Name, Relationship, and Contact Information)"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="specificBequests"
          placeholder="Specific Bequests (List specific items or amounts and their intended recipients)"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="residualEstate"
          placeholder="Distribution of Residual Estate"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="finalWishes"
          placeholder="Final Wishes (funeral arrangements, organ donation, etc.)"
          required
          disabled={isSubmitting}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating Will...
          </>
        ) : (
          'Generate Last Will and Testament'
        )}
      </Button>
    </form>
  )
} 