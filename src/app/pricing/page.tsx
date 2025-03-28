'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import ComparisonTable from '@/components/comparison-table'

const plans = [
  {
    name: 'Basic',
    price: '$9',
    period: 'month',
    description: 'Perfect for individuals and small businesses',
    features: [
      'Up to 5 documents per month',
      'Basic document templates',
      'Email support',
      'Document storage',
    ],
  },
  {
    name: 'Professional',
    price: '$29',
    period: 'month',
    description: 'Ideal for growing businesses and legal professionals',
    features: [
      'Unlimited documents',
      'Advanced document templates',
      'Priority email support',
      'Document storage',
      'Custom branding',
      'Bulk document generation',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'month',
    description: 'For large organizations with custom requirements',
    features: [
      'Unlimited documents',
      'All document templates',
      '24/7 priority support',
      'Advanced document storage',
      'Custom branding',
      'Bulk document generation',
      'API access',
      'Dedicated account manager',
      'Custom integrations',
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include our core document generation features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular ? 'border-blue-500 shadow-lg' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">/{plan.period}</span>}
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full mt-8 ${
                    plan.popular ? 'bg-blue-500 hover:bg-blue-600' : ''
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Compare Plans</h2>
          <ComparisonTable />
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I change my plan later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">
                Yes, all plans come with a 14-day free trial. No credit card required to start.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What kind of support do you offer?</h3>
              <p className="text-gray-600">
                Basic plans include email support, Professional plans get priority support, and Enterprise plans include 24/7 dedicated support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 