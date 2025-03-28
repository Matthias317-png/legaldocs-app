import { BusinessDetails, DocumentType } from './openai'

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      documents: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          content: string
          type: DocumentType
          status: 'draft' | 'final'
          business_details: BusinessDetails
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          content: string
          type: DocumentType
          status: 'draft' | 'final'
          business_details: BusinessDetails
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          content?: string
          type?: DocumentType
          status?: 'draft' | 'final'
          business_details?: BusinessDetails
        }
      }
    }
  }
} 