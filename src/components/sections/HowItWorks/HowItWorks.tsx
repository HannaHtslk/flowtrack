import { Rocket, Settings, BarChart3 } from 'lucide-react'
import AnimatedSection from '../../ui/AnimatedSection'
import './HowItWorks.css'

const steps = [
  {
    number: '01',
    icon: Settings,
    title: 'Set up your workspace',
    description:
      'Import your existing projects or start fresh. Invite your team in seconds — no lengthy onboarding required.',
  },
  {
    number: '02',
    icon: Rocket,
    title: 'Build your workflows',
    description:
      'Use our visual builder to automate repetitive tasks, set up approval chains, and connect your favourite tools.',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Track & deliver',
    description:
      'Monitor progress in real time, get AI-powered insights, and report to stakeholders with a single click.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <AnimatedSection className="section-header">
          <p className="section-tag">How It Works</p>
          <h2>From setup to delivery in 3 steps</h2>
          <p>
            Get your team up and running in minutes. No complex configuration, no steep learning
            curve.
          </p>
        </AnimatedSection>

        <div className="steps">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <AnimatedSection key={step.number} delay={i * 0.15} className="step">
                <div className="step__connector" aria-hidden="true" />
                <div className="step__icon-wrap" aria-hidden="true">
                  <Icon size={24} />
                </div>
                <div className="step__number" aria-hidden="true">{step.number}</div>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__desc">{step.description}</p>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
