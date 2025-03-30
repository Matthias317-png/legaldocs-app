import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import path from 'path'

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

const templates = [
  {
    type: 'Non-Disclosure Agreement',
    name: 'Non-Disclosure Agreement',
    description: 'Protect your confidential information with a legally binding NDA.',
    category: 'Business',
    form_schema: {
      type: 'object',
      properties: {
        disclosingParty: { type: 'string', title: 'Disclosing Party Name' },
        receivingParty: { type: 'string', title: 'Receiving Party Name' },
        effectiveDate: { type: 'string', title: 'Effective Date', format: 'date' },
        confidentialInfo: { type: 'string', title: 'Description of Confidential Information' },
        duration: { type: 'string', title: 'Duration of Agreement' },
        businessName: { type: 'string', title: 'Business Name' },
      },
      required: ['disclosingParty', 'receivingParty', 'effectiveDate', 'confidentialInfo', 'duration'],
    },
    prompt_template: `Create a professional Non-Disclosure Agreement between {disclosingParty} and {receivingParty}. The agreement should be effective from {effectiveDate} and last for {duration}. The confidential information includes: {confidentialInfo}. The business name is {businessName}. Include standard NDA clauses for confidentiality, non-disclosure, and return of materials.`,
  },
  {
    type: 'Employment Contract',
    name: 'Employment Contract',
    description: 'Create professional employment contracts for your team.',
    category: 'Employment',
    form_schema: {
      type: 'object',
      properties: {
        employeeName: { type: 'string', title: 'Employee Name' },
        position: { type: 'string', title: 'Position' },
        startDate: { type: 'string', title: 'Start Date', format: 'date' },
        salary: { type: 'string', title: 'Annual Salary' },
        benefits: { type: 'string', title: 'Benefits Package' },
        businessName: { type: 'string', title: 'Business Name' },
      },
      required: ['employeeName', 'position', 'startDate', 'salary', 'businessName'],
    },
    prompt_template: `Create a professional Employment Contract for {employeeName} as {position} at {businessName}. The contract should start from {startDate} with an annual salary of {salary}. Benefits include: {benefits}. Include standard employment contract clauses for duties, compensation, benefits, termination, and non-compete.`,
  },
  // Add more templates here...
]

async function seedTemplates() {
  try {
    for (const template of templates) {
      const { error } = await supabase
        .from('templates')
        .upsert([template], { onConflict: 'type' })

      if (error) {
        console.error(`Error seeding template ${template.type}:`, error)
      } else {
        console.log(`Successfully seeded template: ${template.type}`)
      }
    }
    console.log('Template seeding completed')
  } catch (error) {
    console.error('Error seeding templates:', error)
  }
}

seedTemplates() 