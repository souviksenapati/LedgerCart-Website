import { useEffect } from 'react'
import AnnouncementBar from '../../components/layout/AnnouncementBar'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import CareersHero from './components/CareersHero'
import CareersBenefits from './components/CareersBenefits'
import OpenPositions from './components/OpenPositions'
import CareerApplicationForm from './components/CareerApplicationForm'
import CtaBanner from '../../components/shared/CtaBanner'

export default function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Careers - LedgerCart'
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f1a] transition-colors duration-300">
      <AnnouncementBar />
      <Navbar />
      <main>
        <CareersHero />
        <CareersBenefits />
        <OpenPositions />
        <CareerApplicationForm />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
