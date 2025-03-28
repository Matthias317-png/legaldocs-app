'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'

export interface ServiceAgreementFormData {
  businessName: string
  clientName: string
  serviceDescription: string
  startDate: string
  endDate: string
  paymentTerms: string
  paymentAmount: string
  paymentSchedule: string
  deliverables: string
  warranties: string
  termination: string
  intellectualProperty: string
  confidentiality: string
  governingLaw: string
  effectiveDate: string
}

export interface ServiceAgreementFormProps {
  onSubmit: (data: ServiceAgreementFormData) => Promise<void>
  isSubmitting?: boolean
}

const initialFormData: ServiceAgreementFormData = {
  businessName: '',
  clientName: '',
  serviceDescription: '',
  startDate: new Date().toISOString().split('T')[0],
  endDate: new Date().toISOString().split('T')[0],
  paymentTerms: '',
  paymentAmount: '',
  paymentSchedule: '',
  deliverables: '',
  warranties: '',
  termination: '',
  intellectualProperty: '',
  confidentiality: '',
  governingLaw: '',
  effectiveDate: new Date().toISOString().split('T')[0],
}

export default function ServiceAgreementForm({ 
  onSubmit, 
  isSubmitting = false 
}: ServiceAgreementFormProps) {
  const [formData, setFormData] = useState<ServiceAgreementFormData>(initialFormData)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSubmit(formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev: ServiceAgreementFormData) => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Service Agreement Details</h2>
        <p className="text-gray-600">
          Fill in the details below to generate your Service Agreement. All fields marked with an asterisk (*) are required.
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
          <Label htmlFor="clientName">Client Name *</Label>
          <Input
            id="clientName"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            required
            placeholder="Enter client's name"
          />
        </div>

        <div>
          <Label htmlFor="serviceDescription">Service Description *</Label>
          <Textarea
            id="serviceDescription"
            name="serviceDescription"
            value={formData.serviceDescription}
            onChange={handleChange}
            required
            placeholder="Describe the services to be provided"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="startDate">Start Date *</Label>
          <Input
            id="startDate"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="endDate">End Date *</Label>
          <Input
            id="endDate"
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="paymentTerms">Payment Terms *</Label>
          <Input
            id="paymentTerms"
            name="paymentTerms"
            value={formData.paymentTerms}
            onChange={handleChange}
            required
            placeholder="e.g., Net 30, 50% upfront"
          />
        </div>

        <div>
          <Label htmlFor="paymentAmount">Payment Amount *</Label>
          <Input
            id="paymentAmount"
            name="paymentAmount"
            value={formData.paymentAmount}
            onChange={handleChange}
            required
            placeholder="Enter total payment amount"
          />
        </div>

        <div>
          <Label htmlFor="paymentSchedule">Payment Schedule *</Label>
          <Input
            id="paymentSchedule"
            name="paymentSchedule"
            value={formData.paymentSchedule}
            onChange={handleChange}
            required
            placeholder="e.g., Monthly, Quarterly"
          />
        </div>

        <div>
          <Label htmlFor="deliverables">Deliverables *</Label>
          <Textarea
            id="deliverables"
            name="deliverables"
            value={formData.deliverables}
            onChange={handleChange}
            required
            placeholder="List all deliverables"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="warranties">Warranties *</Label>
          <Textarea
            id="warranties"
            name="warranties"
            value={formData.warranties}
            onChange={handleChange}
            required
            placeholder="Describe warranties provided"
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
            placeholder="Describe termination conditions"
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
            placeholder="Describe IP ownership terms"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="confidentiality">Confidentiality Terms *</Label>
          <Textarea
            id="confidentiality"
            name="confidentiality"
            value={formData.confidentiality}
            onChange={handleChange}
            required
            placeholder="Describe confidentiality requirements"
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
          'Generate Service Agreement'
        )}
      </Button>
    </form>
  )
} 