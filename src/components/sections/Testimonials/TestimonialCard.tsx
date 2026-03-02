import { motion, useReducedMotion } from 'framer-motion'
import type { Testimonial } from '../../../types'
import './TestimonialCard.css'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.article
      className="testimonial-card glass-card"
      whileHover={prefersReducedMotion ? {} : { y: -4, boxShadow: '0 16px 48px rgba(99, 102, 241, 0.14)' }}
      transition={{ duration: 0.2 }}
    >
      <p className="testimonial-card__quote">"{testimonial.quote}"</p>
      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar" aria-hidden="true">
          {testimonial.avatar}
        </div>
        <div className="testimonial-card__info">
          <span className="testimonial-card__name">{testimonial.name}</span>
          <span className="testimonial-card__role">
            {testimonial.role} · {testimonial.company}
          </span>
        </div>
      </div>
    </motion.article>
  )
}
