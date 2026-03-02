import './Badge.css'

type BadgeVariant = 'default' | 'accent' | 'glass'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return <span className={`badge badge--${variant} ${className}`}>{children}</span>
}
