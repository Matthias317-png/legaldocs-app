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
  const [formData, setFormData] = React.useState<BaseFormData>({
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="businessName">Business Name</Label>
          <Input
            id="businessName"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="businessAddress">Business Address</Label>
          <Textarea
            id="businessAddress"
            value={formData.businessAddress}
            onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="businessEmail">Business Email</Label>
          <Input
            id="businessEmail"
            type="email"
            value={formData.businessEmail}
            onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="businessPhone">Business Phone</Label>
          <Input
            id="businessPhone"
            type="tel"
            value={formData.businessPhone}
            onChange={(e) => setFormData({ ...formData, businessPhone: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="businessWebsite">Business Website (Optional)</Label>
          <Input
            id="businessWebsite"
            type="url"
            value={formData.businessWebsite}
            onChange={(e) => setFormData({ ...formData, businessWebsite: e.target.value })}
          />
        </div>

        <div>
          <Label htmlFor="businessRegistrationNumber">Business Registration Number (Optional)</Label>
          <Input
            id="businessRegistrationNumber"
            value={formData.businessRegistrationNumber}
            onChange={(e) => setFormData({ ...formData, businessRegistrationNumber: e.target.value })}
          />
        </div>

        <div>
          <Label htmlFor="businessTaxId">Business Tax ID (Optional)</Label>
          <Input
            id="businessTaxId"
            value={formData.businessTaxId}
            onChange={(e) => setFormData({ ...formData, businessTaxId: e.target.value })}
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        {submitLabel}
      </Button>
    </form>
  )
} 