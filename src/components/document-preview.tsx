'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { FileText, Edit, Download } from 'lucide-react'

const documentTypes = [
  { value: 'nda', label: 'Non-Disclosure Agreement' },
  { value: 'employment', label: 'Employment Contract' },
  { value: 'service', label: 'Service Agreement' },
]

export default function DocumentPreview() {
  const [selectedType, setSelectedType] = useState('nda')
  const [previewMode, setPreviewMode] = useState<'edit' | 'preview'>('edit')

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <FileText className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold">Document Preview</h3>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant={previewMode === 'edit' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setPreviewMode('edit')}
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
            <Button
              variant={previewMode === 'preview' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setPreviewMode('preview')}
            >
              <Download className="h-4 w-4 mr-2" />
              Preview
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Document Type</label>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Select document type" />
              </SelectTrigger>
              <SelectContent>
                {documentTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Company Name</label>
            <Input placeholder="Enter company name" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <Textarea placeholder="Enter company address" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Additional Notes</label>
            <Textarea placeholder="Enter any additional notes" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-50 rounded-lg p-6"
        >
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Document Preview</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                This is a live preview of how your document will look. The content will update as you make changes
                to the form fields on the left.
              </p>
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-2">Document Details</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Badge variant="secondary" className="mr-2">Type</Badge>
                    <span>{documentTypes.find(t => t.value === selectedType)?.label}</span>
                  </li>
                  <li className="flex items-center">
                    <Badge variant="secondary" className="mr-2">Status</Badge>
                    <span>Draft</span>
                  </li>
                  <li className="flex items-center">
                    <Badge variant="secondary" className="mr-2">Last Modified</Badge>
                    <span>Just now</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 