'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export interface CeaseAndDesistFormData {
  senderName: string
  senderAddress: string
  recipientName: string
  recipientAddress: string
  violationType: 'trademark' | 'copyright' | 'harassment' | 'defamation' | 'other'
  violationDetails: string
  demandedActions: string
  complianceDeadline: string
  legalConsequences: string
  businessName?: string
}

interface CeaseAndDesistFormProps {
  onSubmit: (data: CeaseAndDesistFormData) => void
  isSubmitting?: boolean
}

export default function CeaseAndDesistForm({ onSubmit, isSubmitting = false }: CeaseAndDesistFormProps) {
  const [violationType, setViolationType] = React.useState('trademark' as const)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    onSubmit({
      senderName: formData.get('senderName') as string,
      senderAddress: formData.get('senderAddress') as string,
      recipientName: formData.get('recipientName') as string,
      recipientAddress: formData.get('recipientAddress') as string,
      violationType: violationType,
      violationDetails: formData.get('violationDetails') as string,
      demandedActions: formData.get('demandedActions') as string,
      complianceDeadline: formData.get('complianceDeadline') as string,
      legalConsequences: formData.get('legalConsequences') as string,
      businessName: formData.get('businessName') as string,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Cease and Desist Letter Details</h2>
        <p className="text-gray-600">
          Fill in the details below to generate a cease and desist letter.
        </p>
      </div>

      <div className="space-y-4">
        <Input
          name="businessName"
          placeholder="Business Name (Optional)"
          disabled={isSubmitting}
        />
        <Input
          name="senderName"
          placeholder="Your Full Name"
          required
          disabled={isSubmitting}
        />
        <Input
          name="senderAddress"
          placeholder="Your Address"
          required
          disabled={isSubmitting}
        />
        <Input
          name="recipientName"
          placeholder="Recipient's Name"
          required
          disabled={isSubmitting}
        />
        <Input
          name="recipientAddress"
          placeholder="Recipient's Address"
          required
          disabled={isSubmitting}
        />
        <Select
          value={violationType}
          onValueChange={setViolationType}
          disabled={isSubmitting}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Violation Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="trademark">Trademark Infringement</SelectItem>
            <SelectItem value="copyright">Copyright Infringement</SelectItem>
            <SelectItem value="harassment">Harassment</SelectItem>
            <SelectItem value="defamation">Defamation</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          name="violationDetails"
          placeholder="Detailed Description of the Violation"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="demandedActions"
          placeholder="Actions Required to Comply"
          required
          disabled={isSubmitting}
        />
        <Input
          name="complianceDeadline"
          type="date"
          placeholder="Compliance Deadline"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="legalConsequences"
          placeholder="Legal Consequences of Non-Compliance"
          required
          disabled={isSubmitting}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating Letter...
          </>
        ) : (
          'Generate Cease and Desist Letter'
        )}
      </Button>
    </form>
  )
}