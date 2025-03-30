'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { formatDistanceToNow } from 'date-fns'
import { MoreVertical, Download, Edit, Trash2, Plus } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DocumentType } from '@/lib/openai'
import { useRouter } from 'next/navigation'

interface BaseDocumentCardProps {
  title: string
  type: DocumentType
  category: string
  description: string
  onClick: () => void
  loading?: boolean
}

interface DocumentViewProps extends BaseDocumentCardProps {
  id: string
  content: string
  lastModified: string
  status: 'draft' | 'completed'
  onUpdate: (id: string, content: string) => void
  onDelete: (id: string) => void
  onDownload: (id: string) => void
}

interface TemplateViewProps extends BaseDocumentCardProps {
  isTemplate: true
}

type DocumentCardProps = DocumentViewProps | TemplateViewProps

function isDocumentView(props: DocumentCardProps): props is DocumentViewProps {
  return !('isTemplate' in props)
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) {
      return 'Invalid date'
    }
    return formatDistanceToNow(date)
  } catch (error) {
    return 'Invalid date'
  }
}

export function DocumentCard(props: DocumentCardProps) {
  const router = useRouter()
  const isTemplate = 'isTemplate' in props && props.isTemplate

  const handleCreateDocument = () => {
    if (isTemplate) {
      const encodedType = encodeURIComponent(props.type)
      router.push(`/documents/new?type=${encodedType}`)
    } else {
      props.onClick()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{props.title}</h3>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">{props.type}</Badge>
            <Badge variant="outline">{props.category}</Badge>
            {!isTemplate && isDocumentView(props) && (
              <Badge variant={props.status === 'completed' ? 'default' : 'secondary'}>
                {props.status}
              </Badge>
            )}
          </div>
          <p className="text-gray-600 text-sm">{props.description}</p>
          {!isTemplate && isDocumentView(props) && (
            <p className="text-sm text-gray-600 mt-2">
              Last modified {formatDate(props.lastModified)} ago
            </p>
          )}
        </div>

        {!isTemplate && isDocumentView(props) ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => props.onDownload(props.id)}>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => props.onUpdate(props.id, props.content)}>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => props.onDelete(props.id)} className="text-red-600">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCreateDocument}
              disabled={props.loading}
              className="ml-4"
            >
              <Plus className="h-5 w-5" />
            </Button>
          </>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCreateDocument}
            disabled={props.loading}
          >
            <Plus className="h-5 w-5" />
          </Button>
        )}
      </div>
    </motion.div>
  )
} 