import { motion, useReducedMotion } from 'framer-motion'
import { Play } from 'lucide-react'
import Badge from '../../ui/Badge'
import Button from '../../ui/Button'
import './Hero.css'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

const reducedVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const variants = prefersReducedMotion ? reducedVariants : itemVariants

  return (
    <section className="hero section" id="hero">
      <div className="hero__blob" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={variants}>
            <Badge variant="accent">Trusted by 5,000+ teams</Badge>
          </motion.div>

          <motion.h1 className="hero__heading" variants={variants}>
            Organize work.{' '}
            <span className="gradient-text">Automate processes.</span>
            <br />
            Deliver on time.
          </motion.h1>

          <motion.p className="hero__subtext" variants={variants}>
            FlowTrack brings your tasks, automations, and team collaboration into one intelligent
            workspace. Stop juggling tools — start delivering results.
          </motion.p>

          <motion.div className="hero__ctas" variants={variants}>
            <Button variant="primary" size="lg" as="a" href="#cta">
              Start for free →
            </Button>
            <Button variant="ghost" size="lg" as="a" href="#how-it-works">
              <Play size={16} />
              Watch demo
            </Button>
          </motion.div>

          <motion.p className="hero__social-proof" variants={variants}>
            No credit card required · Free plan available · Setup in 2 minutes
          </motion.p>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          aria-hidden="true"
        >
          <div className="dashboard">
            <div className="dashboard__header">
              <div className="dashboard__dots">
                <span /><span /><span />
              </div>
              <div className="dashboard__title">FlowTrack — Q2 Launch</div>
            </div>

            <div className="dashboard__body">
              <div className="dashboard__sidebar">
                {['Overview', 'Tasks', 'Automations', 'Reports', 'Settings'].map((item, i) => (
                  <div key={item} className={`dashboard__nav-item${i === 1 ? ' dashboard__nav-item--active' : ''}`}>
                    {item}
                  </div>
                ))}
              </div>

              <div className="dashboard__content">
                <div className="dashboard__stats">
                  {[
                    { label: 'Tasks done', value: '48', color: '#6366f1' },
                    { label: 'In progress', value: '12', color: '#8b5cf6' },
                    { label: 'Blocked', value: '3', color: '#f59e0b' },
                  ].map(stat => (
                    <div key={stat.label} className="dashboard__stat">
                      <div className="dashboard__stat-value" style={{ color: stat.color }}>
                        {stat.value}
                      </div>
                      <div className="dashboard__stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="dashboard__tasks">
                  {[
                    { title: 'Design system update', status: 'done', progress: 100 },
                    { title: 'API integration', status: 'progress', progress: 65 },
                    { title: 'User testing sessions', status: 'progress', progress: 40 },
                    { title: 'Launch announcement', status: 'todo', progress: 0 },
                  ].map(task => (
                    <div key={task.title} className="dashboard__task">
                      <div className={`dashboard__task-dot dashboard__task-dot--${task.status}`} />
                      <span className="dashboard__task-name">{task.title}</span>
                      <div className="dashboard__task-bar">
                        <div
                          className="dashboard__task-fill"
                          style={{ width: `${task.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
