import { faqItems } from '../../../data/faq'
import AnimatedSection from '../../ui/AnimatedSection'
import FAQItem from './FAQItem'
import './FAQ.css'

export default function FAQ() {
  return (
    <section className="faq section" id="faq">
      <div className="container">
        <AnimatedSection className="section-header">
          <p className="section-tag">FAQ</p>
          <h2>Frequently asked questions</h2>
          <p>
            Everything you need to know about FlowTrack. Can't find your answer?{' '}
            <a href="#cta">Reach out to us.</a>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="faq__list">
          {faqItems.map(item => (
            <FAQItem key={item.id} item={item} />
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
