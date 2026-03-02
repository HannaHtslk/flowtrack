import { CheckCircle2, ArrowRight } from 'lucide-react'
import AnimatedSection from '../../ui/AnimatedSection'
import Button from '../../ui/Button'
import './AutomationHighlight.css'

const bullets = [
  'Trigger automations from any event — task updates, due dates, form submissions',
  'Connect to 100+ tools with native integrations and open webhooks',
  'Visual no-code builder — anyone on your team can build powerful flows',
  'Full audit trail and rollback for every automation run',
]

const flowSteps = [
  { label: 'Trigger', detail: 'Task overdue' },
  { label: 'Condition', detail: 'Assignee active?' },
  { label: 'Action', detail: 'Send Slack alert' },
  { label: 'Action', detail: 'Reassign task' },
]

export default function AutomationHighlight() {
  return (
    <section className="automation section">
      <div className="container">
        <div className="automation__inner">
          <AnimatedSection className="automation__text">
            <p className="section-tag">Automation</p>
            <h2>Work smarter, not harder</h2>
            <p className="automation__sub">
              FlowTrack's automation engine handles the repetitive work so your team can focus on
              what only humans can do. Build powerful workflows in minutes — no code required.
            </p>
            <ul className="automation__bullets">
              {bullets.map(b => (
                <li key={b} className="automation__bullet">
                  <CheckCircle2 size={17} className="automation__check" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <Button variant="primary" size="md" as="a" href="#cta">
              Explore automations <ArrowRight size={15} />
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="automation__visual">
            <div className="flow">
              <div className="flow__label">Automation flow</div>
              {flowSteps.map((step, i) => (
                <div key={i} className="flow__item-wrap">
                  <div className="flow__step glass-card">
                    <div className="flow__step-badge">{step.label}</div>
                    <div className="flow__step-detail">{step.detail}</div>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div className="flow__arrow" aria-hidden="true">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
