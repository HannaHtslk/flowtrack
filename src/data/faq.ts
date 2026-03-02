import type { FAQItem } from '../types'

export const faqItems: FAQItem[] = [
  {
    id: 'free-plan',
    question: 'Is the free plan really free forever?',
    answer:
      'Yes — our Starter plan is free with no time limit and no credit card required. You get up to 5 users, 10 projects, and basic automations. You can upgrade or stay on the free plan as long as you like.',
  },
  {
    id: 'billing-changes',
    question: 'Can I change my billing plan at any time?',
    answer:
      'Absolutely. You can upgrade, downgrade, or cancel your subscription at any time from your account settings. Upgrades take effect immediately and are prorated. Downgrades take effect at the start of your next billing cycle.',
  },
  {
    id: 'integrations',
    question: 'What tools does FlowTrack integrate with?',
    answer:
      'FlowTrack integrates natively with Slack, GitHub, Figma, Google Workspace, Microsoft 365, Jira, Zapier, and dozens more. Our open API and webhooks let you build custom integrations for tools not in our directory.',
  },
  {
    id: 'security',
    question: 'How does FlowTrack handle data security?',
    answer:
      'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We are SOC 2 Type II certified and GDPR compliant. Enterprise plans include SSO, SAML, audit logs, and custom data residency options.',
  },
  {
    id: 'automation-limits',
    question: 'What counts as an automation run?',
    answer:
      'Each time an automation trigger fires and executes its actions, that counts as one run. The Pro plan includes 100 runs per month per workspace. The Team plan has unlimited runs. Unused runs do not roll over.',
  },
  {
    id: 'free-trial',
    question: 'Does the Pro plan have a free trial?',
    answer:
      'Yes — every new workspace gets a 14-day free trial of the Pro plan, no credit card required. At the end of the trial you can choose to upgrade or automatically revert to the free Starter plan.',
  },
]
