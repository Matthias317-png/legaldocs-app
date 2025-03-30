'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export interface BaseFormData {
  businessName: string
  businessAddress: string
  businessEmail: string
  businessPhone: string
  businessWebsite?: string
  businessRegistrationNumber?: string
  businessTaxId?: string
}

interface BaseFormProps {
  onSubmit: (data: BaseFormData) => Promise<void>
  submitLabel?: string
}

export default function BaseForm({ onSubmit, submitLabel = 'Continue' }: BaseFormProps) {
  const [formData, setFormData] = React.useState({
    businessName: '',
    businessAddress: '',
    businessEmail: '',
    businessPhone: '',
    businessWebsite: '',
    businessRegistrationNumber: '',
    businessTaxId: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSubmit(formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev: BaseFormData) => ({ ...prev, [id]: value }))
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev: BaseFormData) => ({ ...prev, [id]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="businessName">Business Name</Label>
          <Input
            id="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="businessAddress">Business Address</Label>
          <Textarea
            id="businessAddress"
            value={formData.businessAddress}
            onChange={handleTextareaChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="businessEmail">Business Email</Label>
          <Input
            id="businessEmail"
            type="email"
            value={formData.businessEmail}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="businessPhone">Business Phone</Label>
          <Input
            id="businessPhone"
            type="tel"
            value={formData.businessPhone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="businessWebsite">Business Website (Optional)</Label>
          <Input
            id="businessWebsite"
            type="url"
            value={formData.businessWebsite}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Label htmlFor="businessRegistrationNumber">Business Registration Number (Optional)</Label>
          <Input
            id="businessRegistrationNumber"
            value={formData.businessRegistrationNumber}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Label htmlFor="businessTaxId">Business Tax ID (Optional)</Label>
          <Input
            id="businessTaxId"
            value={formData.businessTaxId}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        {submitLabel}
      </Button>
    </form>
  )
} 