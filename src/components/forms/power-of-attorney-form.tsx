'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export interface PowerOfAttorneyFormData {
  principalName: string
  principalAddress: string
  agentName: string
  agentAddress: string
  alternateAgentName: string
  powerType: 'general' | 'limited' | 'medical' | 'financial'
  powers: string
  effectiveDate: string
  terminationConditions: string
  businessName?: string
}

interface PowerOfAttorneyFormProps {
  onSubmit: (data: PowerOfAttorneyFormData) => void
  isSubmitting?: boolean
}

export default function PowerOfAttorneyForm({ onSubmit, isSubmitting = false }: PowerOfAttorneyFormProps) {
  const [powerType, setPowerType] = React.useState('general' as const)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    onSubmit({
      principalName: formData.get('principalName') as string,
      principalAddress: formData.get('principalAddress') as string,
      agentName: formData.get('agentName') as string,
      agentAddress: formData.get('agentAddress') as string,
      alternateAgentName: formData.get('alternateAgentName') as string,
      powerType: powerType,
      powers: formData.get('powers') as string,
      effectiveDate: formData.get('effectiveDate') as string,
      terminationConditions: formData.get('terminationConditions') as string,
      businessName: formData.get('businessName') as string,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Power of Attorney Details</h2>
        <p className="text-gray-600">
          Fill in the details below to generate a power of attorney document.
        </p>
      </div>

      <div className="space-y-4">
        <Input
          name="businessName"
          placeholder="Business Name (Optional)"
          disabled={isSubmitting}
        />
        <Input
          name="principalName"
          placeholder="Principal's Full Name"
          required
          disabled={isSubmitting}
        />
        <Input
          name="principalAddress"
          placeholder="Principal's Address"
          required
          disabled={isSubmitting}
        />
        <Input
          name="agentName"
          placeholder="Agent's Full Name"
          required
          disabled={isSubmitting}
        />
        <Input
          name="agentAddress"
          placeholder="Agent's Address"
          required
          disabled={isSubmitting}
        />
        <Input
          name="alternateAgentName"
          placeholder="Alternate Agent's Name"
          required
          disabled={isSubmitting}
        />
        <Select
          value={powerType}
          onValueChange={setPowerType}
          disabled={isSubmitting}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Power of Attorney Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Power of Attorney</SelectItem>
            <SelectItem value="limited">Limited Power of Attorney</SelectItem>
            <SelectItem value="medical">Medical Power of Attorney</SelectItem>
            <SelectItem value="financial">Financial Power of Attorney</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          name="powers"
          placeholder="Specific Powers Granted"
          required
          disabled={isSubmitting}
        />
        <Input
          name="effectiveDate"
          type="date"
          placeholder="Effective Date"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="terminationConditions"
          placeholder="Termination Conditions"
          required
          disabled={isSubmitting}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating Document...
          </>
        ) : (
          'Generate Power of Attorney'
        )}
      </Button>
    </form>
  )
} 