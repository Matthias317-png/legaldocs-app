'use client'

import React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import PricingCard from './pricing-card'
import type { PricingCardProps } from './pricing-card'
import ComparisonTable from '@/components/comparison-table'

const pricingTiers = [
  {
    name: 'Basic',
    price: 29,
    description: 'Perfect for individuals and small businesses',
    features: [
      'Basic document generation',
      'Standard templates',
      'Email support',
      '5 documents per month',
    ],
  },
  {
    name: 'Professional',
    price: 99,
    description: 'Ideal for growing businesses',
    features: [
      'Advanced document generation',
      'Custom templates',
      'Priority support',
      'Unlimited documents',
      'API access',
      'Team collaboration',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 299,
    description: 'For large organizations with custom needs',
    features: [
      'Everything in Professional',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantees',
      'Advanced analytics',
      'White-label options',
    ],
  },
]

export default function PricingSection() {
  const [showComparison, setShowComparison] = useState(false)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include our core document generation features.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Button
            variant={showComparison ? 'outline' : 'default'}
            onClick={() => setShowComparison(!showComparison)}
          >
            {showComparison ? 'Hide Comparison' : 'Show Detailed Comparison'}
          </Button>
        </div>

        {showComparison ? (
          <ComparisonTable />
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map(tier => (
              <div key={tier.name}>
                <PricingCard
                  name={tier.name}
                  price={tier.price}
                  description={tier.description}
                  features={tier.features}
                  popular={tier.popular}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
} 