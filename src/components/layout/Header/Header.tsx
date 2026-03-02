import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '../../ui/ThemeToggle'
import Button from '../../ui/Button'
import MobileMenu from './MobileMenu'
import './Header.css'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="container header__inner">
          <a href="#" className="header__logo" aria-label="FlowTrack home">
            <span className="header__logo-text">FlowTrack</span>
            <span className="header__logo-dot" aria-hidden="true" />
          </a>

          <nav className="header__nav" aria-label="Main navigation">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="header__nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <ThemeToggle />
            <Button variant="primary" size="sm" as="a" href="#cta">
              Get Started
            </Button>
            <button
              className="header__hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} navLinks={navLinks} />
    </>
  )
}
