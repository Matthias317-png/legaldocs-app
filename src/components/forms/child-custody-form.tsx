'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export interface ChildCustodyFormData {
  parent1Name: string
  parent1Address: string
  parent2Name: string
  parent2Address: string
  childrenNames: string
  custodyType: 'sole' | 'joint' | 'split' | 'third-party'
  visitation: string
  holidaySchedule: string
  decisionMaking: string
  supportTerms: string
  specialProvisions: string
  businessName?: string
}

interface ChildCustodyFormProps {
  onSubmit: (data: ChildCustodyFormData) => void
  isSubmitting?: boolean
}

export default function ChildCustodyForm({ onSubmit, isSubmitting = false }: ChildCustodyFormProps) {
  const [custodyType, setCustodyType] = React.useState('joint' as const)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    onSubmit({
      parent1Name: formData.get('parent1Name') as string,
      parent1Address: formData.get('parent1Address') as string,
      parent2Name: formData.get('parent2Name') as string,
      parent2Address: formData.get('parent2Address') as string,
      childrenNames: formData.get('childrenNames') as string,
      custodyType: custodyType,
      visitation: formData.get('visitation') as string,
      holidaySchedule: formData.get('holidaySchedule') as string,
      decisionMaking: formData.get('decisionMaking') as string,
      supportTerms: formData.get('supportTerms') as string,
      specialProvisions: formData.get('specialProvisions') as string,
      businessName: formData.get('businessName') as string,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Child Custody Agreement Details</h2>
        <p className="text-gray-600">
          Fill in the details below to generate a child custody agreement.
        </p>
      </div>

      <div className="space-y-4">
        <Input
          name="businessName"
          placeholder="Business Name (Optional)"
          disabled={isSubmitting}
        />
        <Input
          name="parent1Name"
          placeholder="First Parent's Full Name"
          required
          disabled={isSubmitting}
        />
        <Input
          name="parent1Address"
          placeholder="First Parent's Address"
          required
          disabled={isSubmitting}
        />
        <Input
          name="parent2Name"
          placeholder="Second Parent's Full Name"
          required
          disabled={isSubmitting}
        />
        <Input
          name="parent2Address"
          placeholder="Second Parent's Address"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="childrenNames"
          placeholder="Children's Names and Ages"
          required
          disabled={isSubmitting}
        />
        <Select
          value={custodyType}
          onValueChange={setCustodyType}
          disabled={isSubmitting}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Custody Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="joint">Joint Custody</SelectItem>
            <SelectItem value="sole">Sole Custody</SelectItem>
            <SelectItem value="split">Split Custody</SelectItem>
            <SelectItem value="third-party">Third-Party Custody</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          name="visitation"
          placeholder="Visitation Schedule"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="holidaySchedule"
          placeholder="Holiday and Special Occasions Schedule"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="decisionMaking"
          placeholder="Decision-Making Rights and Responsibilities"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="supportTerms"
          placeholder="Child Support Terms"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="specialProvisions"
          placeholder="Special Provisions or Additional Terms"
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
          'Generate Child Custody Agreement'
        )}
      </Button>
    </form>
  )
}