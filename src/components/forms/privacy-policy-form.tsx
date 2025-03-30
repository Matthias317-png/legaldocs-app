'use client'

import React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'

export interface PrivacyPolicyFormData {
  businessName: string
  websiteUrl: string
  dataCollection: string
  dataUsage: string
  dataSharing: string
  cookiesPolicy: string
  userRights: string
  dataSecurity: string
  contactInfo: string
  lastUpdated: string
}

export interface PrivacyPolicyFormProps {
  onSubmit: (data: PrivacyPolicyFormData) => Promise<void>
  isSubmitting?: boolean
}

const initialFormData: PrivacyPolicyFormData = {
  businessName: '',
  websiteUrl: '',
  dataCollection: '',
  dataUsage: '',
  dataSharing: '',
  cookiesPolicy: '',
  userRights: '',
  dataSecurity: '',
  contactInfo: '',
  lastUpdated: new Date().toISOString().split('T')[0],
}

export default function PrivacyPolicyForm({ 
  onSubmit, 
  isSubmitting = false 
}: PrivacyPolicyFormProps) {
  const [formData, setFormData] = useState(initialFormData as PrivacyPolicyFormData)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSubmit(formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev: PrivacyPolicyFormData) => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Privacy Policy Details</h2>
        <p className="text-gray-600">
          Fill in the details below to generate your Privacy Policy. All fields marked with an asterisk (*) are required.
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
          <Label htmlFor="websiteUrl">Website URL *</Label>
          <Input
            id="websiteUrl"
            name="websiteUrl"
            type="url"
            value={formData.websiteUrl}
            onChange={handleChange}
            required
            placeholder="https://your-website.com"
          />
        </div>

        <div>
          <Label htmlFor="dataCollection">Data Collection *</Label>
          <Textarea
            id="dataCollection"
            name="dataCollection"
            value={formData.dataCollection}
            onChange={handleChange}
            required
            placeholder="Describe what personal information you collect"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="dataUsage">Data Usage *</Label>
          <Textarea
            id="dataUsage"
            name="dataUsage"
            value={formData.dataUsage}
            onChange={handleChange}
            required
            placeholder="Describe how you use the collected information"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="dataSharing">Data Sharing *</Label>
          <Textarea
            id="dataSharing"
            name="dataSharing"
            value={formData.dataSharing}
            onChange={handleChange}
            required
            placeholder="Describe with whom you share the information"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="cookiesPolicy">Cookies Policy *</Label>
          <Textarea
            id="cookiesPolicy"
            name="cookiesPolicy"
            value={formData.cookiesPolicy}
            onChange={handleChange}
            required
            placeholder="Describe your cookies policy"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="userRights">User Rights *</Label>
          <Textarea
            id="userRights"
            name="userRights"
            value={formData.userRights}
            onChange={handleChange}
            required
            placeholder="Describe user rights regarding their data"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="dataSecurity">Data Security *</Label>
          <Textarea
            id="dataSecurity"
            name="dataSecurity"
            value={formData.dataSecurity}
            onChange={handleChange}
            required
            placeholder="Describe your data security measures"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="contactInfo">Contact Information *</Label>
          <Textarea
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            required
            placeholder="Provide contact information for privacy inquiries"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="lastUpdated">Last Updated *</Label>
          <Input
            id="lastUpdated"
            name="lastUpdated"
            type="date"
            value={formData.lastUpdated}
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
          'Generate Privacy Policy'
        )}
      </Button>
    </form>
  )
} 