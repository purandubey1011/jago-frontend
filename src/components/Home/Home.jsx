import Hero from './Hero'
import AboutJago from './AboutJago'
import SolutionOffer from './SolutionOffer'
import WhoWeHelp from './WhoWeHelp.jsx'
import NotSure from './NotSure.jsx'
import NextChapter from './NextChapter.jsx'
import Testimonials from './Testimonials.jsx'
import Footer from '../Footer.jsx'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <AboutJago />
      <SolutionOffer />
      <WhoWeHelp />
      <NotSure />
      <NextChapter />
      <Testimonials/>
      <Footer />
    </div>
  )
}

export default Home
