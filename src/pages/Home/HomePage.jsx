import AnnouncementBar from '../../components/layout/AnnouncementBar'
import Navbar from '../../components/layout/Navbar'
import HomeHero from './components/HomeHero'
import LogosStrip from '../../components/shared/LogosStrip'
import ServicesGrid from '../../components/shared/ServicesGrid'
import CaseStudy from './components/CaseStudy'
import GlobeSection from './components/GlobeSection'
import FeaturesSection from './components/FeaturesSection'
import CtaBanner from '../../components/shared/CtaBanner'
import Footer from '../../components/layout/Footer'

export default function HomePage() {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <main>
        <HomeHero />
        <LogosStrip />
        <ServicesGrid />
        <CaseStudy />
        <GlobeSection />
        <FeaturesSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
