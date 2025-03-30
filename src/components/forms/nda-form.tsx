'use client'

import React from 'react'
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
}

interface NDAFormProps {
  onSubmit: (data: NDAFormData) => Promise<void>
  isSubmitting: boolean
}

export default function NDAForm({ onSubmit, isSubmitting }: NDAFormProps) {
  const [formData, setFormData] = React.useState<NDAFormData>({
    businessName: '',
    disclosingParty: '',
    receivingParty: '',
    purpose: '',
    confidentialInfo: '',
    duration: '',
    jurisdiction: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSubmit(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="businessName">Business Name</Label>
          <Input
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="disclosingParty">Disclosing Party</Label>
          <Input
            id="disclosingParty"
            name="disclosingParty"
            value={formData.disclosingParty}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="receivingParty">Receiving Party</Label>
          <Input
            id="receivingParty"
            name="receivingParty"
            value={formData.receivingParty}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="purpose">Purpose of Disclosure</Label>
          <Textarea
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="confidentialInfo">Confidential Information Description</Label>
          <Textarea
            id="confidentialInfo"
            name="confidentialInfo"
            value={formData.confidentialInfo}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="duration">Duration (e.g., "2 years")</Label>
          <Input
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="jurisdiction">Jurisdiction</Label>
          <Input
            id="jurisdiction"
            name="jurisdiction"
            value={formData.jurisdiction}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating Document...
          </>
        ) : (
          'Generate Document'
        )}
      </Button>
    </form>
  )
} 