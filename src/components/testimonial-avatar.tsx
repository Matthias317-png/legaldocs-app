'use client'

import React from 'react'

interface TestimonialAvatarProps {
  name: string
  className?: string
}

export default function TestimonialAvatar({ name, className = '' }: TestimonialAvatarProps) {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()

  return (
    <div
      className={`w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold ${className}`}
    >
      {initials}
    </div>
  )
} 