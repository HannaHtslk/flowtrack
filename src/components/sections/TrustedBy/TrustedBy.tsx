import { trustedCompanies } from '../../../data/trustedBy'
import './TrustedBy.css'

export default function TrustedBy() {
  // Duplicate for seamless loop
  const items = [...trustedCompanies, ...trustedCompanies]

  return (
    <section className="trusted-by" aria-label="Trusted by">
      <div className="container">
        <p className="trusted-by__heading">Trusted by innovative teams worldwide</p>
      </div>

      <div className="trusted-by__track-wrapper" aria-hidden="true">
        <div className="trusted-by__track">
          {items.map((company, i) => (
            <span key={`${company.id}-${i}`} className="trusted-by__name">
              {company.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
