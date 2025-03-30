'use client'

import React from 'react'
import { DocumentCard } from '@/components/document-card'
import { DocumentType } from '@/lib/openai'

const templates = [
  {
    id: 'nda',
    title: 'Non-Disclosure Agreement',
    type: 'Non-Disclosure Agreement' as DocumentType,
    category: 'Business',
    description: 'Protect your confidential information with a professional NDA.',
    isTemplate: true,
  },
  {
    id: 'employment',
    title: 'Employment Contract',
    type: 'Employment Contract' as DocumentType,
    category: 'Employment',
    description: 'Create a comprehensive employment contract for your team.',
    isTemplate: true,
  },
  {
    id: 'service',
    title: 'Service Agreement',
    type: 'Service Agreement' as DocumentType,
    category: 'Business',
    description: 'Define terms and conditions for your services.',
    isTemplate: true,
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    type: 'Privacy Policy' as DocumentType,
    category: 'Legal',
    description: 'Protect your business with a compliant privacy policy.',
    isTemplate: true,
  },
  {
    id: 'terms',
    title: 'Terms of Service',
    type: 'Terms of Service' as DocumentType,
    category: 'Legal',
    description: 'Set clear terms for your website or service.',
    isTemplate: true,
  },
]

export default function TemplatesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Document Templates</h1>
        <p className="text-gray-600">
          Choose a template to create your legal document. All templates are free to use.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div key={template.id}>
            <DocumentCard
              title={template.title}
              type={template.type}
              category={template.category}
              description={template.description}
              isTemplate={true}
              onClick={() => {}}
            />
          </div>
        ))}
      </div>
    </div>
  )
}