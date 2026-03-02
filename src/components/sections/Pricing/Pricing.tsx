import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { toggleBilling } from '../../../store/slices/pricingSlice'
import type { RootState } from '../../../store/index'
import { pricingTiers } from '../../../data/pricing'
import AnimatedSection from '../../ui/AnimatedSection'
import PricingCard from './PricingCard'
import './Pricing.css'

export default function Pricing() {
  const dispatch = useDispatch()
  const billing = useSelector((state: RootState) => state.pricing.billing)

  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <AnimatedSection className="section-header">
          <p className="section-tag">Pricing</p>
          <h2>Simple, transparent pricing</h2>
          <p>
            Start free and scale as you grow. No hidden fees, no surprises. Cancel anytime.
          </p>
        </AnimatedSection>

        {/* Billing toggle */}
        <AnimatedSection delay={0.1} className="pricing__toggle-wrap">
          <div className="pricing__toggle" role="group" aria-label="Billing period">
            <button
              className={`pricing__toggle-option${billing === 'monthly' ? ' pricing__toggle-option--active' : ''}`}
              onClick={() => billing !== 'monthly' && dispatch(toggleBilling())}
              aria-pressed={billing === 'monthly'}
            >
              Monthly
            </button>
            <button
              className={`pricing__toggle-option${billing === 'annual' ? ' pricing__toggle-option--active' : ''}`}
              onClick={() => billing !== 'annual' && dispatch(toggleBilling())}
              aria-pressed={billing === 'annual'}
            >
              Annual
              <span className="pricing__save-badge">Save 25%</span>
            </button>
            {billing === 'annual' && (
              <motion.div
                className="pricing__pill"
                layoutId="billing-pill"
                style={{ right: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              />
            )}
            {billing === 'monthly' && (
              <motion.div
                className="pricing__pill"
                layoutId="billing-pill"
                style={{ left: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              />
            )}
          </div>
        </AnimatedSection>

        <div className="pricing__grid">
          {pricingTiers.map((tier, i) => (
            <AnimatedSection key={tier.id} delay={i * 0.1}>
              <PricingCard tier={tier} billing={billing} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
