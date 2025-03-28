import { DocumentType } from './openai'

export interface Document {
  id: string
  title: string
  type: DocumentType
  content: string
  category: string
  lastModified: string
  status: 'Draft' | 'Final'
} 