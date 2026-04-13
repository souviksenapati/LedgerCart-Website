import AnnouncementBar from '../../components/layout/AnnouncementBar'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import ServiceOverviewHero from './components/ServiceOverviewHero'
import ZigzagFeatures from './components/ZigzagFeatures'
import PricingCtaStrip from './components/PricingCtaStrip'

export default function ServicePage() {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <main>
        <ServiceOverviewHero />
        <ZigzagFeatures />
        <PricingCtaStrip />
      </main>
      <Footer />
    </div>
  )
}
