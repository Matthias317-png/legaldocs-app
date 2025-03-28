'use client'

import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  image: string
  testimonial: string
  rating: number
}

export default function TestimonialCard({
  name,
  role,
  company,
  image,
  testimonial,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">
            {role} at {company}
          </p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700">
        &ldquo;{testimonial}&rdquo;
      </p>
    </div>
  )
} 