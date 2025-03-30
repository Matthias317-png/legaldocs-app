'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  disclosingParty: z.string().min(2, 'Disclosing party must be at least 2 characters'),
  receivingParty: z.string().min(2, 'Receiving party must be at least 2 characters'),
  purpose: z.string().min(10, 'Purpose must be at least 10 characters'),
  confidentialInfo: z.string().min(10, 'Confidential information must be at least 10 characters'),
  duration: z.string().min(2, 'Duration must be at least 2 characters'),
  jurisdiction: z.string().min(2, 'Jurisdiction must be at least 2 characters'),
})

export type NDAFormData = z.infer<typeof formSchema>

interface NDAFormProps {
  onSubmit: (data: NDAFormData) => Promise<void>
  isSubmitting: boolean
}

export default function NDAForm({ onSubmit, isSubmitting }: NDAFormProps) {
  const form = useForm<NDAFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: '',
      disclosingParty: '',
      receivingParty: '',
      purpose: '',
      confidentialInfo: '',
      duration: '',
      jurisdiction: '',
    },
  })

  const handleSubmit = async (data: NDAFormData) => {
    await onSubmit(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter business name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="disclosingParty"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Disclosing Party</FormLabel>
              <FormControl>
                <Input placeholder="Enter disclosing party" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="receivingParty"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Receiving Party</FormLabel>
              <FormControl>
                <Input placeholder="Enter receiving party" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="purpose"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Purpose of Disclosure</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe the purpose of sharing confidential information"
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confidentialInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confidential Information Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe what information will be considered confidential"
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration (e.g., "2 years")</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 2 years" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jurisdiction"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jurisdiction</FormLabel>
              <FormControl>
                <Input placeholder="e.g., State of California" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating Document...
            </>
          ) : (
            'Generate Document'
          )}
        </Button>
      </form>
    </Form>
  )
}