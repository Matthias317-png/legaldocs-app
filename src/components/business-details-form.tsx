'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { BusinessDetails, DocumentType } from '@/lib/openai'

interface BusinessDetailsFormProps {
  documentType: DocumentType
  onSubmit: (details: BusinessDetails) => Promise<void>
}

const initialFormData: BusinessDetails = {
  businessName: '',
  businessType: 'Sole Proprietorship',
  industry: '',
  address: '',
  ownerName: '',
  contactEmail: '',
  contactPhone: '',
}

export default function BusinessDetailsForm({ documentType, onSubmit }: BusinessDetailsFormProps) {
  const [loading, setLoading] = React.useState(false)
  const [formData, setFormData] = React.useState(initialFormData)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      await onSubmit(formData)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev: BusinessDetails) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleBusinessTypeChange = (value: BusinessDetails['businessType']) => {
    setFormData((prev: BusinessDetails) => ({
      ...prev,
      businessType: value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Business Details for {documentType}</h2>
        <p className="text-gray-600">
          Please provide your business information to generate a customized document.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium mb-1">
            Business Name
          </label>
          <Input
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="businessType" className="block text-sm font-medium mb-1">
            Business Type
          </label>
          <Select
            value={formData.businessType}
            onValueChange={handleBusinessTypeChange}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Sole Proprietorship">Sole Proprietorship</SelectItem>
              <SelectItem value="Partnership">Partnership</SelectItem>
              <SelectItem value="LLC">LLC</SelectItem>
              <SelectItem value="Corporation">Corporation</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium mb-1">
            Industry
          </label>
          <Input
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-1">
            Business Address
          </label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="ownerName" className="block text-sm font-medium mb-1">
            Owner Name
          </label>
          <Input
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium mb-1">
            Contact Email
          </label>
          <Input
            id="contactEmail"
            name="contactEmail"
            type="email"
            value={formData.contactEmail}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="contactPhone" className="block text-sm font-medium mb-1">
            Contact Phone
          </label>
          <Input
            id="contactPhone"
            name="contactPhone"
            type="tel"
            value={formData.contactPhone}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? 'Generating Document...' : 'Generate Document'}
      </Button>
    </form>
  )
} 