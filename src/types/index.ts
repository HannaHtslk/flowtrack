export type Theme = 'light' | 'dark'
export type Billing = 'monthly' | 'annual'

export interface Feature {
  id: string
  icon: string
  title: string
  description: string
}

export interface PricingTier {
  id: string
  name: string
  monthlyPrice: number | null
  annualPrice: number | null
  description: string
  features: string[]
  highlighted: boolean
  cta: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  quote: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface TrustedCompany {
  id: string
  name: string
}

export interface Step {
  id: string
  number: string
  title: string
  description: string
  icon: string
}
