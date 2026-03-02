import './App.css'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import Hero from './components/sections/Hero/Hero'
import TrustedBy from './components/sections/TrustedBy/TrustedBy'
import Features from './components/sections/Features/Features'
import HowItWorks from './components/sections/HowItWorks/HowItWorks'
import AutomationHighlight from './components/sections/AutomationHighlight/AutomationHighlight'
import Pricing from './components/sections/Pricing/Pricing'
import Testimonials from './components/sections/Testimonials/Testimonials'
import FAQ from './components/sections/FAQ/FAQ'
import CTASection from './components/sections/CTASection/CTASection'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <AutomationHighlight />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default App
