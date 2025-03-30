'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Download, Edit, FileText, MapPin, Shield } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PricingCard from '@/components/pricing-card'
import { DocumentCard } from '@/components/document-card'
import TestimonialCard from '@/components/testimonial-card'
import StepCard from '@/components/step-card'
import ComparisonTable from '@/components/comparison-table'
import DocumentPreview from '@/components/document-preview'
import { motion } from 'framer-motion'
import PricingSection from '@/components/pricing-section'
import Testimonials from '@/components/testimonials'
import StepByStepGuide from '@/components/step-by-step-guide'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const steps = [
  {
    number: 1,
    title: 'Choose Your Document',
    description: 'Select from our wide range of professionally crafted legal document templates.',
    icon: 'FileText' as const,
  },
  {
    number: 2,
    title: 'Customize Content',
    description: 'Fill in your specific details and customize the document to match your needs.',
    icon: 'Edit' as const,
  },
  {
    number: 3,
    title: 'Download & Use',
    description: 'Get your completed document in multiple formats, ready for immediate use.',
    icon: 'Download' as const,
  },
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: '/testimonials/sarah.jpg',
    rating: 5,
    testimonial: 'LegalDocs has transformed how we handle our legal documentation. The process is incredibly smooth and efficient.',
  },
  {
    name: 'Michael Chen',
    role: 'Small Business Owner',
    company: 'Chen Enterprises',
    image: '/testimonials/michael.jpg',
    rating: 5,
    testimonial: 'As a small business owner, having access to professional legal documents at an affordable price is invaluable.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Legal Counsel',
    company: 'Growth Corp',
    image: '/testimonials/emily.jpg',
    rating: 5,
    testimonial: 'The quality and accuracy of the documents are impressive. It saves us countless hours of work.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Generate Legal Documents with AI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              Create professional legal documents in minutes. Our AI-powered platform helps you generate accurate and legally sound documents tailored to your needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 justify-center"
            >
              <Link href="/templates">
                <Button size="lg">Browse Templates</Button>
              </Link>
              <Link href="/documents/new">
                <Button size="lg" variant="outline">Create Document</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Efficient</h3>
              <p className="text-gray-600">Generate professional legal documents in minutes, not hours.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Legally Sound</h3>
              <p className="text-gray-600">Our AI ensures your documents are accurate and up-to-date with current laws.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Updates</h3>
              <p className="text-gray-600">Modify and update your documents anytime with our intuitive interface.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <StepByStepGuide />
      <Testimonials />
      <PricingSection />
      <Footer />
    </div>
  )
} 