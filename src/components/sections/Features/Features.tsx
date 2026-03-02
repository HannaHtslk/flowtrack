import { features } from '../../../data/features'
import AnimatedSection from '../../ui/AnimatedSection'
import FeatureCard from './FeatureCard'
import './Features.css'

export default function Features() {
  return (
    <section className="features section" id="features">
      <div className="container">
        <AnimatedSection className="section-header">
          <p className="section-tag">Features</p>
          <h2>Everything your team needs to ship faster</h2>
          <p>
            From task management to automation, FlowTrack gives you a complete toolkit to plan,
            execute, and deliver — all in one place.
          </p>
        </AnimatedSection>

        <div className="features__grid">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.id} delay={i * 0.08}>
              <FeatureCard feature={feature} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
