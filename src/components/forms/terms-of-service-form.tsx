'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'

export interface TermsOfServiceFormData {
  businessName: string
  websiteUrl: string
  userEligibility: string
  accountTerms: string
  userResponsibilities: string
  intellectualProperty: string
  userContent: string
  prohibitedActivities: string
  termination: string
  disclaimer: string
  liabilityLimits: string
  governingLaw: string
  changesToTerms: string
  contactInfo: string
  lastUpdated: string
}

export interface TermsOfServiceFormProps {
  onSubmit: (data: TermsOfServiceFormData) => Promise<void>
  isSubmitting?: boolean
}

const initialFormData: TermsOfServiceFormData = {
  businessName: '',
  websiteUrl: '',
  userEligibility: '',
  accountTerms: '',
  userResponsibilities: '',
  intellectualProperty: '',
  userContent: '',
  prohibitedActivities: '',
  termination: '',
  disclaimer: '',
  liabilityLimits: '',
  governingLaw: '',
  changesToTerms: '',
  contactInfo: '',
  lastUpdated: new Date().toISOString().split('T')[0],
}

export default function TermsOfServiceForm({ 
  onSubmit, 
  isSubmitting = false 
}: TermsOfServiceFormProps) {
  const [formData, setFormData] = useState(initialFormData as TermsOfServiceFormData)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSubmit(formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev: TermsOfServiceFormData) => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Terms of Service Details</h2>
        <p className="text-gray-600">
          Fill in the details below to generate your Terms of Service. All fields marked with an asterisk (*) are required.
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
          <Label htmlFor="userEligibility">User Eligibility *</Label>
          <Textarea
            id="userEligibility"
            name="userEligibility"
            value={formData.userEligibility}
            onChange={handleChange}
            required
            placeholder="Describe who can use your service"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="accountTerms">Account Terms *</Label>
          <Textarea
            id="accountTerms"
            name="accountTerms"
            value={formData.accountTerms}
            onChange={handleChange}
            required
            placeholder="Describe account registration and maintenance terms"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="userResponsibilities">User Responsibilities *</Label>
          <Textarea
            id="userResponsibilities"
            name="userResponsibilities"
            value={formData.userResponsibilities}
            onChange={handleChange}
            required
            placeholder="Describe user responsibilities and obligations"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="intellectualProperty">Intellectual Property Rights *</Label>
          <Textarea
            id="intellectualProperty"
            name="intellectualProperty"
            value={formData.intellectualProperty}
            onChange={handleChange}
            required
            placeholder="Describe intellectual property ownership and usage rights"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="userContent">User Content *</Label>
          <Textarea
            id="userContent"
            name="userContent"
            value={formData.userContent}
            onChange={handleChange}
            required
            placeholder="Describe terms related to user-generated content"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="prohibitedActivities">Prohibited Activities *</Label>
          <Textarea
            id="prohibitedActivities"
            name="prohibitedActivities"
            value={formData.prohibitedActivities}
            onChange={handleChange}
            required
            placeholder="List activities that are prohibited"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="termination">Termination Terms *</Label>
          <Textarea
            id="termination"
            name="termination"
            value={formData.termination}
            onChange={handleChange}
            required
            placeholder="Describe account termination conditions"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="disclaimer">Disclaimer *</Label>
          <Textarea
            id="disclaimer"
            name="disclaimer"
            value={formData.disclaimer}
            onChange={handleChange}
            required
            placeholder="Describe disclaimers and limitations"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="liabilityLimits">Liability Limits *</Label>
          <Textarea
            id="liabilityLimits"
            name="liabilityLimits"
            value={formData.liabilityLimits}
            onChange={handleChange}
            required
            placeholder="Describe liability limitations"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="governingLaw">Governing Law *</Label>
          <Input
            id="governingLaw"
            name="governingLaw"
            value={formData.governingLaw}
            onChange={handleChange}
            required
            placeholder="e.g., State of California"
          />
        </div>

        <div>
          <Label htmlFor="changesToTerms">Changes to Terms *</Label>
          <Textarea
            id="changesToTerms"
            name="changesToTerms"
            value={formData.changesToTerms}
            onChange={handleChange}
            required
            placeholder="Describe how changes to terms will be handled"
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
            placeholder="Provide contact information for inquiries"
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
          'Generate Terms of Service'
        )}
      </Button>
    </form>
  )
} 