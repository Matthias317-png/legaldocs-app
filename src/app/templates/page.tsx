'use client'

import React from 'react'
import { DocumentTemplateCard } from '@/components/document-template-card'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { DocumentType } from '@/lib/openai'

const documentTypes: Array<{
  title: string
  type: DocumentType
  category: string
}> = [
  {
    title: 'Non-Disclosure Agreement',
    type: 'Non-Disclosure Agreement',
    category: 'Confidentiality'
  },
  {
    title: 'Employment Contract',
    type: 'Employment Contract',
    category: 'Employment'
  },
  {
    title: 'Service Agreement',
    type: 'Service Agreement',
    category: 'Business'
  },
  {
    title: 'Privacy Policy',
    type: 'Privacy Policy',
    category: 'Website Legal'
  },
  {
    title: 'Terms of Service',
    type: 'Terms of Service',
    category: 'Website Legal'
  }
]

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredDocuments = documentTypes.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = ['All', ...new Set(documentTypes.map((doc) => doc.category))]

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Document Templates</h1>

      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search templates..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredDocuments.map((doc) => (
          <DocumentTemplateCard
            key={doc.type}
            title={doc.title}
            category={doc.category}
            type={doc.type}
          />
        ))}
      </div>
    </div>
  )
} 