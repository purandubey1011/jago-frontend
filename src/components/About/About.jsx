import React from 'react'
import AboutHero from './AboutHero.jsx'
import OurPhilosophy from './OurPhilosophy.jsx'
import GlobalExperience from './GlobalExperience.jsx'
import Credentials from './Credentials.jsx'
import OurMission from './Ourmisson.jsx'
import Testimonials from '../Home/Testimonials.jsx'
import Footer from '../Footer.jsx'

const About = () => {
  return (
    <div className='w-full h-full overflow-hidden'>
      <AboutHero/>
      <OurPhilosophy/>
      <GlobalExperience/>
      <Credentials/>
      <OurMission/>
      <Footer />
    </div>
  )
}

export default About
