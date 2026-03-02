import { Twitter, Linkedin, Github } from 'lucide-react'
import './Footer.css'

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Documentation', 'Help Center', 'API Reference', 'Status'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo" aria-label="FlowTrack home">
              <span className="footer__logo-text">FlowTrack</span>
              <span className="footer__logo-dot" aria-hidden="true" />
            </a>
            <p className="footer__tagline">
              The modern project management platform for high-performing teams. Organize work,
              automate processes, deliver on time.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="Twitter/X" className="footer__social-link">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="footer__social-link">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="GitHub" className="footer__social-link">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div className="footer__links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer__col">
                <h4 className="footer__col-heading">{category}</h4>
                <ul>
                  {links.map(link => (
                    <li key={link}>
                      <a href="#" className="footer__link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} FlowTrack, Inc. All rights reserved.
          </p>
          <p className="footer__built-with">Built with FlowTrack</p>
        </div>
      </div>
    </footer>
  )
}
