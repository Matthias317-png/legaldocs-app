import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function generateNDA(formData: {
  businessName: string
  disclosingParty: string
  receivingParty: string
  purpose: string
  confidentialInfo: string
  duration: string
  jurisdiction: string
}) {
  const prompt = `Generate a professional Non-Disclosure Agreement with the following details:
- Business Name: ${formData.businessName}
- Disclosing Party: ${formData.disclosingParty}
- Receiving Party: ${formData.receivingParty}
- Purpose: ${formData.purpose}
- Confidential Information: ${formData.confidentialInfo}
- Duration: ${formData.duration}
- Jurisdiction: ${formData.jurisdiction}

Please generate a complete, legally sound NDA that includes all standard clauses and is formatted in a professional manner.`

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a legal document generator specializing in creating professional legal documents. Generate clear, concise, and legally sound documents."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000,
    })

    return completion.choices[0].message.content
  } catch (error) {
    console.error('Error generating NDA:', error)
    throw new Error('Failed to generate document')
  }
} 