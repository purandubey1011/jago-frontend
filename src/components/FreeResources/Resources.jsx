import React from 'react'
import ResourcesHero from './ResourcesHero.jsx'
import ResourcesCards from './ResourcesCards.jsx'
import Clarity from '../Solution/Clarity.jsx'
import Testimonials from '../Home/Testimonials.jsx'
import Footer from '../Footer.jsx'

const Resources = () => {
  return (
    <div className='w-full h-full overflow-hidden'>
      <ResourcesHero/>
      <ResourcesCards/>
      <Clarity/>
      <Testimonials/>
      <Footer />
    </div>
  )
}

export default Resources
