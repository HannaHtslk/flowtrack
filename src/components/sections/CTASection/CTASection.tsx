import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../../lib/firebase'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import AnimatedSection from '../../ui/AnimatedSection'
import Button from '../../ui/Button'
import './CTASection.css'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setState('loading')
    try {
      await addDoc(collection(db, 'email_subscribers'), {
        email: email.trim().toLowerCase(),
        timestamp: serverTimestamp(),
        source: 'cta',
      })
      setState('success')
      setEmail('')
    } catch (err) {
      console.error('Firestore error:', err)
      setErrorMsg('Something went wrong. Please try again.')
      setState('error')
    }
  }

  return (
    <section className="cta-section section" id="cta">
      <div className="cta-section__blob" aria-hidden="true" />

      <div className="container">
        <AnimatedSection className="cta-section__inner">
          <p className="section-tag">Get early access</p>
          <h2 className="cta-section__heading">
            Ready to transform how your team works?
          </h2>
          <p className="cta-section__sub">
            Join thousands of teams already using FlowTrack. Start free — no credit card required.
          </p>

          <AnimatePresence mode="wait">
            {state === 'success' ? (
              <motion.div
                key="success"
                className="cta-section__feedback cta-section__feedback--success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle2 size={20} aria-hidden="true" />
                <span>You're on the list! We'll be in touch soon.</span>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="cta-section__form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <input
                  type="email"
                  className="cta-section__input"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  disabled={state === 'loading'}
                  aria-label="Work email address"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={state === 'loading'}
                  className="cta-section__submit"
                >
                  {state === 'loading' ? (
                    <>
                      <Loader2 size={16} className="cta-section__spinner" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    'Get early access'
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>

          {state === 'error' && (
            <motion.p
              className="cta-section__feedback cta-section__feedback--error"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertCircle size={16} aria-hidden="true" />
              {errorMsg}{' '}
              <button
                className="cta-section__retry"
                onClick={() => setState('idle')}
                type="button"
              >
                Try again
              </button>
            </motion.p>
          )}

          <p className="cta-section__legal">
            By submitting, you agree to our{' '}
            <a href="#">Privacy Policy</a>. No spam, ever.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
