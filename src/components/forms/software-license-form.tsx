'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export interface SoftwareLicenseFormData {
  licensorName: string
  licenseeName: string
  softwareName: string
  licenseType: 'perpetual' | 'subscription' | 'term'
  licenseScope: string
  licenseRestrictions: string
  licenseFee: string
  businessName?: string
}

interface SoftwareLicenseFormProps {
  onSubmit: (data: SoftwareLicenseFormData) => void
  isSubmitting?: boolean
}

export default function SoftwareLicenseForm({ onSubmit, isSubmitting = false }: SoftwareLicenseFormProps) {
  const [licenseType, setLicenseType] = React.useState<'perpetual' | 'subscription' | 'term'>('perpetual')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    onSubmit({
      licensorName: formData.get('licensorName') as string,
      licenseeName: formData.get('licenseeName') as string,
      softwareName: formData.get('softwareName') as string,
      licenseType: licenseType,
      licenseScope: formData.get('licenseScope') as string,
      licenseRestrictions: formData.get('licenseRestrictions') as string,
      licenseFee: formData.get('licenseFee') as string,
      businessName: formData.get('businessName') as string,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Software License Agreement Details</h2>
        <p className="text-gray-600">
          Fill in the details below to generate a professional software license agreement.
        </p>
      </div>

      <div className="space-y-4">
        <Input
          name="businessName"
          placeholder="Business Name (Optional)"
          disabled={isSubmitting}
        />
        <Input
          name="licensorName"
          placeholder="Licensor Name"
          required
          disabled={isSubmitting}
        />
        <Input
          name="licenseeName"
          placeholder="Licensee Name"
          required
          disabled={isSubmitting}
        />
        <Input
          name="softwareName"
          placeholder="Software Name"
          required
          disabled={isSubmitting}
        />
        <Select
          value={licenseType}
          onValueChange={(value: 'perpetual' | 'subscription' | 'term') => setLicenseType(value)}
          disabled={isSubmitting}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select License Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="perpetual">Perpetual License</SelectItem>
            <SelectItem value="subscription">Subscription License</SelectItem>
            <SelectItem value="term">Term License</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          name="licenseScope"
          placeholder="License scope and permitted uses"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="licenseRestrictions"
          placeholder="License restrictions and limitations"
          required
          disabled={isSubmitting}
        />
        <Input
          name="licenseFee"
          placeholder="License Fee"
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
          'Generate Software License Agreement'
        )}
      </Button>
    </form>
  )
} 