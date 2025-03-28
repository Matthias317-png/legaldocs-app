import OpenAI from 'openai'

// Define document types
export type DocumentType =
  | 'Non-Disclosure Agreement'
  | 'Employment Contract'
  | 'Service Agreement'
  | 'Privacy Policy'
  | 'Terms of Service'

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
})

// Base prompt template for document generation
const basePrompt = `You are a legal document expert. Create a professional legal document of type {documentType} using the following details:

{formDetails}

Please generate a complete, legally sound document that includes:
1. All necessary sections and clauses
2. Proper legal terminology
3. Clear and concise language
4. Professional formatting
5. Date and signature sections
6. Applicable legal references and citations
7. Industry-standard clauses and protections

The document should be ready for use after minor customization. Format the output in a clean, professional manner with proper sections and numbering.`

export async function generateDocument(
  documentType: DocumentType,
  formDetails: any
): Promise<string> {
  try {
    // Format form details into a readable string
    const formattedDetails = Object.entries(formDetails)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')

    // Create the prompt
    const prompt = basePrompt
      .replace('{documentType}', documentType)
      .replace('{formDetails}', formattedDetails)

    // Call GPT-4 Turbo
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-1106-preview', // GPT-4 Turbo model
      messages: [
        {
          role: 'system',
          content: 'You are a legal document expert. Generate professional legal documents based on the provided details.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 4000,
      presence_penalty: 0.6,
      frequency_penalty: 0.6,
      response_format: { type: "text" },
      top_p: 0.95,
      stream: false,
    })

    // Extract the generated document
    const generatedDocument = completion.choices[0]?.message?.content || ''

    if (!generatedDocument) {
      throw new Error('No document was generated')
    }

    return generatedDocument
  } catch (error) {
    console.error('Error generating document:', error)
    throw new Error('Failed to generate document. Please try again.')
  }
} 