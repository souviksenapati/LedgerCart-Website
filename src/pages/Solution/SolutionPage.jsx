import AnnouncementBar from '../../components/layout/AnnouncementBar'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import SolutionHero from './components/SolutionHero'
import IndustrySolutions from './components/IndustrySolutions'

export default function SolutionPage() {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <main>
        <SolutionHero />
        <IndustrySolutions />
      </main>
      <Footer />
    </div>
  )
}
