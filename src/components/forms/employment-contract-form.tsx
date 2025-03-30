'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'

export interface EmploymentContractFormData {
  businessName: string
  employeeName: string
  position: string
  startDate: string
  employmentType: string
  salary: string
  benefits: string
  workSchedule: string
  probationPeriod: string
  terminationNotice: string
  nonCompete: string
  confidentiality: string
  intellectualProperty: string
  governingLaw: string
  effectiveDate: string
}

export interface EmploymentContractFormProps {
  onSubmit: (data: EmploymentContractFormData) => Promise<void>
  isSubmitting?: boolean
}

const initialFormData: EmploymentContractFormData = {
  businessName: '',
  employeeName: '',
  position: '',
  startDate: new Date().toISOString().split('T')[0],
  employmentType: '',
  salary: '',
  benefits: '',
  workSchedule: '',
  probationPeriod: '',
  terminationNotice: '',
  nonCompete: '',
  confidentiality: '',
  intellectualProperty: '',
  governingLaw: '',
  effectiveDate: new Date().toISOString().split('T')[0],
}

export default function EmploymentContractForm({ 
  onSubmit, 
  isSubmitting = false 
}: EmploymentContractFormProps) {
  const [formData, setFormData] = useState(initialFormData as EmploymentContractFormData)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSubmit(formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev: EmploymentContractFormData) => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Employment Contract Details</h2>
        <p className="text-gray-600">
          Fill in the details below to generate your Employment Contract. All fields marked with an asterisk (*) are required.
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
          <Label htmlFor="employeeName">Employee Name *</Label>
          <Input
            id="employeeName"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            required
            placeholder="Enter employee's full name"
          />
        </div>

        <div>
          <Label htmlFor="position">Position *</Label>
          <Input
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            placeholder="Enter job position"
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
          <Label htmlFor="employmentType">Employment Type *</Label>
          <Input
            id="employmentType"
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
            required
            placeholder="e.g., Full-time, Part-time, Contract"
          />
        </div>

        <div>
          <Label htmlFor="salary">Salary *</Label>
          <Input
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
            placeholder="Enter salary details"
          />
        </div>

        <div>
          <Label htmlFor="benefits">Benefits *</Label>
          <Textarea
            id="benefits"
            name="benefits"
            value={formData.benefits}
            onChange={handleChange}
            required
            placeholder="Describe benefits package"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="workSchedule">Work Schedule *</Label>
          <Input
            id="workSchedule"
            name="workSchedule"
            value={formData.workSchedule}
            onChange={handleChange}
            required
            placeholder="e.g., 9 AM - 5 PM, Monday - Friday"
          />
        </div>

        <div>
          <Label htmlFor="probationPeriod">Probation Period *</Label>
          <Input
            id="probationPeriod"
            name="probationPeriod"
            value={formData.probationPeriod}
            onChange={handleChange}
            required
            placeholder="e.g., 90 days"
          />
        </div>

        <div>
          <Label htmlFor="terminationNotice">Termination Notice Period *</Label>
          <Input
            id="terminationNotice"
            name="terminationNotice"
            value={formData.terminationNotice}
            onChange={handleChange}
            required
            placeholder="e.g., 2 weeks"
          />
        </div>

        <div>
          <Label htmlFor="nonCompete">Non-Compete Clause *</Label>
          <Textarea
            id="nonCompete"
            name="nonCompete"
            value={formData.nonCompete}
            onChange={handleChange}
            required
            placeholder="Describe non-compete terms"
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
          'Generate Employment Contract'
        )}
      </Button>
    </form>
  )
} 