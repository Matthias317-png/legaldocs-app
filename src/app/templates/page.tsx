'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FileText, Search } from 'lucide-react'
import DocumentCard from '@/components/document-card'

const templates = [
  {
    title: 'Non-Disclosure Agreement',
    type: 'Confidentiality',
    lastModified: '2024-02-20',
    status: 'final' as const,
  },
  {
    title: 'Employment Contract',
    type: 'Employment',
    lastModified: '2024-02-19',
    status: 'final' as const,
  },
  {
    title: 'Service Agreement',
    type: 'Business',
    lastModified: '2024-02-18',
    status: 'final' as const,
  },
  {
    title: 'Website Terms of Service',
    type: 'Website Legal',
    lastModified: '2024-02-17',
    status: 'final' as const,
  },
  {
    title: 'Privacy Policy',
    type: 'Website Legal',
    lastModified: '2024-02-16',
    status: 'final' as const,
  },
  {
    title: 'Partnership Agreement',
    type: 'Business',
    lastModified: '2024-02-15',
    status: 'final' as const,
  },
]

const categories = [
  'All',
  'Business',
  'Employment',
  'Website Legal',
  'Confidentiality',
  'Property',
  'Financial',
]

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory = selectedCategory === 'All' || template.type === selectedCategory
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Document Templates</h1>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search templates..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Templates Grid */}
          <div className="grid gap-6">
            {filteredTemplates.length > 0 ? (
              filteredTemplates.map((template) => {
                const { title, ...rest } = template
                return (
                  <DocumentCard
                    key={title}
                    title={title}
                    {...rest}
                    onEdit={() => {}}
                    onDownload={() => {}}
                    onDelete={() => {}}
                  />
                )
              })
            ) : (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No templates found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter to find what you&apos;re looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 