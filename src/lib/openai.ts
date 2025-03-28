import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export type BusinessDetails = {
  businessName: string
  businessType: 'Sole Proprietorship' | 'Partnership' | 'LLC' | 'Corporation'
  industry: string
  address: string
  ownerName: string
  contactEmail: string
  contactPhone: string
}

const documentTypes = [
  'Non-Disclosure Agreement',
  'Employment Contract',
  'Service Agreement',
  'Privacy Policy',
  'Terms of Service',
] as const

export type DocumentType = typeof documentTypes[number]

export async function generateDocument(documentType: DocumentType, businessDetails: BusinessDetails): Promise<string> {
  const prompt = `Create a professional ${documentType} for a ${businessDetails.businessType} named "${businessDetails.businessName}" in the ${businessDetails.industry} industry.
  
Business Details:
- Business Name: ${businessDetails.businessName}
- Business Type: ${businessDetails.businessType}
- Industry: ${businessDetails.industry}
- Address: ${businessDetails.address}
- Owner Name: ${businessDetails.ownerName}
- Contact Email: ${businessDetails.contactEmail}
- Contact Phone: ${businessDetails.contactPhone}

Please generate a detailed and legally-sound ${documentType} that includes all necessary clauses and sections appropriate for this type of business and industry. Format the document professionally with clear headings and sections.`

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a legal document assistant that creates professional, well-structured legal documents. Format the output in a clean, professional manner with proper sections and numbering."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    model: "gpt-4",
  })

  return completion.choices[0].message.content || 'Error generating document'
} 