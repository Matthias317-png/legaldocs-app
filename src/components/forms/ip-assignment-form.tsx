'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'

export interface IPAssignmentFormData {
  assignorName: string
  assigneeName: string
  ipDescription: string
  assignmentDate: string
  consideration: string
  businessName?: string
}

interface IPAssignmentFormProps {
  onSubmit: (data: IPAssignmentFormData) => void
  isSubmitting?: boolean
}

export default function IPAssignmentForm({ onSubmit, isSubmitting = false }: IPAssignmentFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    onSubmit({
      assignorName: formData.get('assignorName') as string,
      assigneeName: formData.get('assigneeName') as string,
      ipDescription: formData.get('ipDescription') as string,
      assignmentDate: formData.get('assignmentDate') as string,
      consideration: formData.get('consideration') as string,
      businessName: formData.get('businessName') as string,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">IP Assignment Details</h2>
        <p className="text-gray-600">
          Fill in the details below to generate a professional IP assignment agreement.
        </p>
      </div>

      <div className="space-y-4">
        <Input
          name="businessName"
          placeholder="Business Name (Optional)"
          disabled={isSubmitting}
        />
        <Input
          name="assignorName"
          placeholder="Assignor Name"
          required
          disabled={isSubmitting}
        />
        <Input
          name="assigneeName"
          placeholder="Assignee Name"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="ipDescription"
          placeholder="Detailed description of the intellectual property being assigned"
          required
          disabled={isSubmitting}
        />
        <Input
          name="assignmentDate"
          type="date"
          required
          disabled={isSubmitting}
        />
        <Input
          name="consideration"
          placeholder="Consideration (e.g., $10,000)"
          required
          disabled={isSubmitting}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating Agreement...
          </>
        ) : (
          'Generate IP Assignment'
        )}
      </Button>
    </form>
  )
} 