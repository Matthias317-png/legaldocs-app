'use client'

import React from 'react'
import TestimonialAvatar from './testimonial-avatar'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content: 'LegalDocs has revolutionized how we handle our legal documentation. The AI-powered generation is incredibly accurate and saves us countless hours.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, GrowthLabs',
    content: 'The customization options are fantastic. We can create professional legal documents that perfectly match our brand voice and requirements.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Legal Counsel, InnovateCorp',
    content: 'As a legal professional, I appreciate the attention to detail and compliance. The documents are well-structured and legally sound.',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <TestimonialAvatar name={testimonial.name} />
                <div className="ml-4">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 