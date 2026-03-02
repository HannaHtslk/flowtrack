import { Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { PricingTier, Billing } from '../../../types'
import Button from '../../ui/Button'
import Badge from '../../ui/Badge'
import './PricingCard.css'

interface PricingCardProps {
  tier: PricingTier
  billing: Billing
}

export default function PricingCard({ tier, billing }: PricingCardProps) {
  const price = billing === 'annual' ? tier.annualPrice : tier.monthlyPrice
  const isFree = price === 0
  const isHighlighted = tier.highlighted

  return (
    <article className={`pricing-card glass-card${isHighlighted ? ' pricing-card--highlighted' : ''}`}>
      {isHighlighted && (
        <div className="pricing-card__popular">
          <Badge variant="accent">Most Popular</Badge>
        </div>
      )}

      <div className="pricing-card__header">
        <h3 className="pricing-card__name">{tier.name}</h3>
        <p className="pricing-card__desc">{tier.description}</p>
      </div>

      <div className="pricing-card__price">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${tier.id}-${billing}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="pricing-card__price-inner"
          >
            {isFree ? (
              <span className="pricing-card__amount">Free</span>
            ) : (
              <>
                <span className="pricing-card__currency">$</span>
                <span className="pricing-card__amount">{price}</span>
                <span className="pricing-card__period">/mo per user</span>
              </>
            )}
          </motion.div>
        </AnimatePresence>
        {billing === 'annual' && !isFree && (
          <p className="pricing-card__billed">Billed annually</p>
        )}
      </div>

      <Button
        variant={isHighlighted ? 'primary' : 'secondary'}
        size="md"
        as="a"
        href="#cta"
        className="pricing-card__cta"
      >
        {tier.cta}
      </Button>

      <ul className="pricing-card__features">
        {tier.features.map(feature => (
          <li key={feature} className="pricing-card__feature">
            <Check size={15} className="pricing-card__check" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  )
}
