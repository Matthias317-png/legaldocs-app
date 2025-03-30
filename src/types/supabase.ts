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
          type: string
          status: 'draft' | 'completed'
          business_details: Json
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          content: string
          type: string
          status?: 'draft' | 'completed'
          business_details: Json
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          content?: string
          type?: string
          status?: 'draft' | 'completed'
          business_details?: Json
          user_id?: string
        }
      }
      templates: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          type: string
          name: string
          description: string
          form_schema: Json
          prompt_template: string
          category: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          type: string
          name: string
          description: string
          form_schema: Json
          prompt_template: string
          category: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          type?: string
          name?: string
          description?: string
          form_schema?: Json
          prompt_template?: string
          category?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 