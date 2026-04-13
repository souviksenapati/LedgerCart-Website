import AnnouncementBar from '../../components/layout/AnnouncementBar'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import ProductHero from './components/ProductHero'
import ProductFeatures from './components/ProductFeatures'
import PricingCtaStrip from '../Service/components/PricingCtaStrip'

export default function ProductPage() {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <main>
        <ProductHero />
        <ProductFeatures />
        <PricingCtaStrip />
      </main>
      <Footer />
    </div>
  )
}
