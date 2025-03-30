import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Type for the documents table
export interface Document {
  id: string
  title: string
  content: string
  type: string
  status: 'draft' | 'completed'
  business_details: any
  user_id: string
  created_at: string
  updated_at: string
}

// Helper functions for document operations
export async function createDocument(document: Omit<Document, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('documents')
    .insert([document])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getUserDocuments() {
  const { data, error } = await supabase
    .from('documents')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function updateDocument(id: string, content: string) {
  const { data, error } = await supabase
    .from('documents')
    .update({ content, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteDocument(id: string) {
  const { error } = await supabase
    .from('documents')
    .delete()
    .eq('id', id)

  if (error) throw error
}

export async function getTemplate(type: string) {
  const { data, error } = await supabase
    .from('templates')
    .select('*')
    .eq('type', type)
    .single()

  if (error) throw error
  return data
} 