'use client'

import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export interface PricingCardProps {
  name: string
  price: number
  description: string
  features: string[]
  popular?: boolean
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-lg border p-6 ${
        popular
          ? 'border-blue-600 shadow-lg'
          : 'border-gray-200'
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-gray-600">/month</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className="w-full"
        variant={popular ? 'default' : 'outline'}
      >
        Get Started
      </Button>
    </div>
  )
} 