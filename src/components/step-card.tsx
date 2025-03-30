'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Edit, Download } from 'lucide-react'

interface StepCardProps {
  number: number
  title: string
  description: string
  icon: 'FileText' | 'Edit' | 'Download'
}

const icons = {
  FileText,
  Edit,
  Download,
}

export default function StepCard({ number, title, description, icon }: StepCardProps) {
  const Icon = icons[icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
} 