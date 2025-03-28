'use client'

import { Card, CardContent } from '@/components/ui/card'
import { FileText, Edit, Download } from 'lucide-react'

interface StepCardProps {
  number: number
  title: string
  description: string
  icon: 'FileText' | 'Edit' | 'Download'
  key?: number | string
}

const iconMap = {
  FileText,
  Edit,
  Download,
}

export default function StepCard({ number, title, description, icon }: StepCardProps) {
  const Icon = iconMap[icon]

  return (
    <Card className="relative">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Icon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                {number}
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="mt-2 text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 