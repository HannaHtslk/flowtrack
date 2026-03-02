import { motion, AnimatePresence } from 'framer-motion'
import Button from '../../ui/Button'
import './MobileMenu.css'

interface NavLink {
  label: string
  href: string
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navLinks: NavLink[]
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-menu glass"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{ overflow: 'hidden' }}
        >
          <nav className="mobile-menu__nav">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-menu__link"
                onClick={onClose}
              >
                {link.label}
              </a>
            ))}
            <div className="mobile-menu__cta">
              <Button variant="primary" size="md" as="a" href="#cta" onClick={onClose}>
                Get Started Free
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
