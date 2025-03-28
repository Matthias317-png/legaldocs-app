'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'

export interface NDAFormData {
  businessName: string
  disclosingParty: string
  receivingParty: string
  purpose: string
  confidentialInfo: string
  duration: string
  jurisdiction: string
  effectiveDate: string
}

export interface NDAFormProps {
  onSubmit: (data: NDAFormData) => Promise<void>
  isSubmitting?: boolean
}

export default function NDAForm({ onSubmit, isSubmitting = false }: NDAFormProps) {
  const [formData, setFormData] = useState<NDAFormData>({
    businessName: '',
    disclosingParty: '',
    receivingParty: '',
    purpose: '',
    confidentialInfo: '',
    duration: '',
    jurisdiction: '',
    effectiveDate: new Date().toISOString().split('T')[0],
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSubmit(formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Non-Disclosure Agreement Details</h2>
        <p className="text-gray-600">
          Fill in the details below to generate your NDA. All fields marked with an asterisk (*) are required.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="businessName">Business Name *</Label>
          <Input
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
            placeholder="Enter your business name"
          />
        </div>

        <div>
          <Label htmlFor="disclosingParty">Disclosing Party *</Label>
          <Input
            id="disclosingParty"
            name="disclosingParty"
            value={formData.disclosingParty}
            onChange={handleChange}
            required
            placeholder="Enter disclosing party name"
          />
        </div>

        <div>
          <Label htmlFor="receivingParty">Receiving Party *</Label>
          <Input
            id="receivingParty"
            name="receivingParty"
            value={formData.receivingParty}
            onChange={handleChange}
            required
            placeholder="Enter receiving party name"
          />
        </div>

        <div>
          <Label htmlFor="purpose">Purpose of Disclosure *</Label>
          <Textarea
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
            placeholder="Describe the purpose of sharing confidential information"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="confidentialInfo">Confidential Information *</Label>
          <Textarea
            id="confidentialInfo"
            name="confidentialInfo"
            value={formData.confidentialInfo}
            onChange={handleChange}
            required
            placeholder="Describe what information will be considered confidential"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="duration">Duration of Agreement *</Label>
          <Input
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            placeholder="e.g., 2 years"
          />
        </div>

        <div>
          <Label htmlFor="jurisdiction">Governing Jurisdiction *</Label>
          <Input
            id="jurisdiction"
            name="jurisdiction"
            value={formData.jurisdiction}
            onChange={handleChange}
            required
            placeholder="e.g., State of California"
          />
        </div>

        <div>
          <Label htmlFor="effectiveDate">Effective Date *</Label>
          <Input
            id="effectiveDate"
            name="effectiveDate"
            type="date"
            value={formData.effectiveDate}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating Document...
          </>
        ) : (
          'Generate NDA'
        )}
      </Button>
    </form>
  )
} 