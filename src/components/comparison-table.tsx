'use client'

import React from 'react'
import { Check, X } from 'lucide-react'

const features = [
  {
    name: 'Document Generation',
    basic: true,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Basic Customization',
    basic: true,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Advanced Customization',
    basic: false,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Special Clauses Library',
    basic: false,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Document Storage',
    basic: true,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Email Support',
    basic: true,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Chat Support',
    basic: false,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Priority Support',
    basic: false,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Dedicated Account Manager',
    basic: false,
    professional: false,
    enterprise: true,
  },
  {
    name: 'Bulk Generation',
    basic: false,
    professional: true,
    enterprise: true,
  },
]

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="py-4 px-6 text-left">Features</th>
            <th className="py-4 px-6 text-center">Basic</th>
            <th className="py-4 px-6 text-center">Professional</th>
            <th className="py-4 px-6 text-center">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature.name} className="border-b">
              <td className="py-4 px-6">{feature.name}</td>
              <td className="py-4 px-6 text-center">
                {feature.basic ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                )}
              </td>
              <td className="py-4 px-6 text-center">
                {feature.professional ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                )}
              </td>
              <td className="py-4 px-6 text-center">
                {feature.enterprise ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 