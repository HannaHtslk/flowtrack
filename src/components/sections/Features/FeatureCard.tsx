import {
  LayoutList, Zap, BarChart3, Users, Bell, TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Feature } from '../../../types'
import './FeatureCard.css'

const iconMap: Record<string, LucideIcon> = {
  LayoutList,
  Zap,
  BarChart3,
  Users,
  Bell,
  TrendingUp,
}

interface FeatureCardProps {
  feature: Feature
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const prefersReducedMotion = useReducedMotion()
  const Icon = iconMap[feature.icon] ?? LayoutList

  return (
    <motion.article
      className="feature-card glass-card"
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -4,
              boxShadow: '0 16px 48px rgba(99, 102, 241, 0.18)',
            }
      }
      transition={{ duration: 0.2 }}
    >
      <div className="feature-card__icon-wrap" aria-hidden="true">
        <Icon size={22} />
      </div>
      <h3 className="feature-card__title">{feature.title}</h3>
      <p className="feature-card__desc">{feature.description}</p>
    </motion.article>
  )
}
