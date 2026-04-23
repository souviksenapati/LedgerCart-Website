import AnnouncementBar from '../../components/layout/AnnouncementBar'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import ProductHero from './components/ProductHero'
import ProductFeatures from './components/ProductFeatures'
import ProductPricing from './components/ProductPricing'
import PricingCtaStrip from '../Service/components/PricingCtaStrip'

export default function ProductPage() {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <main>
        <ProductHero />
        <ProductFeatures />
        <ProductPricing />
        <PricingCtaStrip />
      </main>
      <Footer />
    </div>
  )
}
