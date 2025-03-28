'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Download, Edit2, Trash2 } from 'lucide-react'

export interface DocumentCardProps {
  key?: number | string
  title: string
  type: string
  lastModified: string
  status: 'draft' | 'final'
  onEdit: () => void
  onDownload: () => void
  onDelete: () => void
}

export default function DocumentCard({
  title,
  type,
  lastModified,
  status,
  onEdit,
  onDownload,
  onDelete,
}: DocumentCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-500 mb-2">{type}</p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">
                Last modified: {new Date(lastModified).toLocaleDateString()}
              </span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  status === 'final'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={onEdit}>
              <Edit2 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={onDownload}>
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={onDelete}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 