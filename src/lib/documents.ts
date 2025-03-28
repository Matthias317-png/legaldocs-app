import { createClient } from '@supabase/supabase-js'
import { DocumentType } from './openai'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export interface Document {
  id: string
  title: string
  type: DocumentType
  content: string
  status: 'Draft' | 'Final'
  created_at: string
  updated_at: string
}

interface CreateDocumentInput {
  title: string
  type: DocumentType
  content: string
  status: 'Draft' | 'Final'
}

export async function createDocument(input: CreateDocumentInput): Promise<Document> {
  const { data, error } = await supabase
    .from('documents')
    .insert([input])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateDocument(id: string, content: string): Promise<Document> {
  const { data, error } = await supabase
    .from('documents')
    .update({ content, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteDocument(id: string): Promise<void> {
  const { error } = await supabase
    .from('documents')
    .delete()
    .eq('id', id)

  if (error) throw error
}

export async function getDocument(id: string): Promise<Document> {
  const { data, error } = await supabase
    .from('documents')
    .select()
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function getUserDocuments(): Promise<Document[]> {
  const { data, error } = await supabase
    .from('documents')
    .select()
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
} 