import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import './Button.css'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children?: ReactNode
  className?: string
}

type ButtonAsButton = ButtonBaseProps & ComponentPropsWithoutRef<'button'> & { as?: 'button' }
type ButtonAsA = ButtonBaseProps & ComponentPropsWithoutRef<'a'> & { as: 'a' }
type ButtonProps = ButtonAsButton | ButtonAsA

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className = '', children, as, ...rest } = props
  const classes = `btn btn--${variant} btn--${size} ${className}`

  if (as === 'a') {
    return (
      <a className={classes} {...(rest as ComponentPropsWithoutRef<'a'>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<'button'>)}>
      {children}
    </button>
  )
}
