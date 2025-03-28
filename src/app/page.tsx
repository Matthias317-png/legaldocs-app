'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileText, Edit, Download } from 'lucide-react'
import StepCard from '@/components/step-card'
import TestimonialCard from '@/components/testimonial-card'

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
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Legal Documents in Minutes
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Create, customize, and download legally-sound documents with our easy-to-use platform.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/templates">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg">View Pricing</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose LegalDocs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <FileText className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
              <p className="text-gray-600">
                Access a wide range of legally-sound document templates crafted by experienced lawyers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Edit className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Customization</h3>
              <p className="text-gray-600">
                Customize your documents with our user-friendly interface and guided process.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Download className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Download</h3>
              <p className="text-gray-600">
                Get your completed documents instantly in multiple formats (PDF, Word, etc.).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust LegalDocs for their legal document needs.
          </p>
          <Link href="/register">
            <Button size="lg" variant="secondary">
              Create Your First Document
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 