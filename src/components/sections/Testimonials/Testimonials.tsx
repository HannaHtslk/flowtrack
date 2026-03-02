import { testimonials } from '../../../data/testimonials'
import AnimatedSection from '../../ui/AnimatedSection'
import TestimonialCard from './TestimonialCard'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <AnimatedSection className="section-header">
          <p className="section-tag">Testimonials</p>
          <h2>Loved by teams everywhere</h2>
          <p>
            Don't take our word for it — hear from teams that transformed how they work with
            FlowTrack.
          </p>
        </AnimatedSection>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.09}>
              <TestimonialCard testimonial={t} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
