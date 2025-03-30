import { OpenAI } from 'openai'

// Define document types
export type DocumentType =
  | 'Non-Disclosure Agreement'
  | 'Employment Contract'
  | 'Service Agreement'
  | 'Privacy Policy'
  | 'Terms of Service'
  | 'Lease Agreement'
  | 'Intellectual Property Assignment'
  | 'Independent Contractor Agreement'
  | 'Software License Agreement'
  | 'Partnership Agreement'
  | 'Last Will and Testament'
  | 'Power of Attorney'
  | 'Commercial Loan Agreement'
  | 'Child Custody Agreement'
  | 'Cease and Desist Letter'

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

function generatePromptForDocumentType(type: DocumentType, details: any): string {
  const commonPrompt = `Generate a professional ${type} with the following details:\n`
  
  switch (type) {
    case 'Lease Agreement':
      return `${commonPrompt}
Property Details: ${details.propertyAddress}
Landlord: ${details.landlordName}
Tenant: ${details.tenantName}
Lease Term: ${details.leaseTerm}
Monthly Rent: ${details.monthlyRent}
Security Deposit: ${details.securityDeposit}
Include standard lease terms, maintenance responsibilities, and termination conditions.`

    case 'Intellectual Property Assignment':
      return `${commonPrompt}
Assignor: ${details.assignorName}
Assignee: ${details.assigneeName}
IP Description: ${details.ipDescription}
Assignment Date: ${details.assignmentDate}
Consideration: ${details.consideration}
Include comprehensive IP rights transfer and warranties.`

    case 'Independent Contractor Agreement':
      return `${commonPrompt}
Client: ${details.clientName}
Contractor: ${details.contractorName}
Services: ${details.servicesDescription}
Payment Terms: ${details.paymentTerms}
Project Timeline: ${details.projectTimeline}
Include scope of work, payment terms, and intellectual property rights.`

    case 'Software License Agreement':
      return `${commonPrompt}
Licensor: ${details.licensorName}
Licensee: ${details.licenseeName}
Software: ${details.softwareName}
License Type: ${details.licenseType}
License Scope: ${details.licenseScope}
License Restrictions: ${details.licenseRestrictions}
License Fee: ${details.licenseFee}
Include usage rights, restrictions, and maintenance terms.`

    case 'Partnership Agreement':
      return `${commonPrompt}
Partnership Name: ${details.partnershipName}
Partner 1: ${details.partner1Name}
Partner 2: ${details.partner2Name}
Business Purpose: ${details.businessPurpose}
Capital Contributions: ${details.capitalContributions}
Profit Sharing: ${details.profitSharing}
Management Rights: ${details.managementRights}
Start Date: ${details.startDate}
Include management rights, decision-making processes, and dissolution terms.`

    case 'Last Will and Testament':
      return `${commonPrompt}
Testator: ${details.testatorName}
Testator Address: ${details.testatorAddress}
Executor: ${details.executorName}
Executor Address: ${details.executorAddress}
Alternate Executor: ${details.alternateExecutorName}
Beneficiaries: ${details.beneficiaries}
Specific Bequests: ${details.specificBequests}
Residual Estate: ${details.residualEstate}
Final Wishes: ${details.finalWishes}
Include asset distribution, executor powers, and final wishes.`

    case 'Power of Attorney':
      return `${commonPrompt}
Principal: ${details.principalName}
Principal Address: ${details.principalAddress}
Agent: ${details.agentName}
Agent Address: ${details.agentAddress}
Alternate Agent: ${details.alternateAgentName}
Power Type: ${details.powerType}
Powers Granted: ${details.powers}
Effective Date: ${details.effectiveDate}
Termination Conditions: ${details.terminationConditions}
Include scope of authority and termination conditions.`

    case 'Commercial Loan Agreement':
      return `${commonPrompt}
Lender: ${details.lenderName}
Lender Address: ${details.lenderAddress}
Borrower: ${details.borrowerName}
Borrower Address: ${details.borrowerAddress}
Loan Amount: ${details.loanAmount}
Interest Rate: ${details.interestRate}
Loan Term: ${details.loanTerm}
Payment Schedule: ${details.paymentSchedule}
Collateral: ${details.collateral}
Default Terms: ${details.defaultTerms}
Include repayment schedule, security interests, and default provisions.`

    case 'Child Custody Agreement':
      return `${commonPrompt}
Parent 1: ${details.parent1Name}
Parent 1 Address: ${details.parent1Address}
Parent 2: ${details.parent2Name}
Parent 2 Address: ${details.parent2Address}
Children: ${details.childrenNames}
Custody Type: ${details.custodyType}
Visitation Schedule: ${details.visitation}
Holiday Schedule: ${details.holidaySchedule}
Decision Making Rights: ${details.decisionMaking}
Support Terms: ${details.supportTerms}
Special Provisions: ${details.specialProvisions}
Include decision-making rights, holiday schedules, and modification terms.`

    case 'Cease and Desist Letter':
      return `${commonPrompt}
Sender: ${details.senderName}
Sender Address: ${details.senderAddress}
Recipient: ${details.recipientName}
Recipient Address: ${details.recipientAddress}
Violation Type: ${details.violationType}
Violation Details: ${details.violationDetails}
Demanded Actions: ${details.demandedActions}
Compliance Deadline: ${details.complianceDeadline}
Legal Consequences: ${details.legalConsequences}
Include legal basis, specific violations, and required actions.`

    default:
      return commonPrompt
  }
}