import React from 'react'
import PricingHero from './PricingHero.jsx'
import Coaching from './Coaching.jsx'
import Clarity from '../Solution/Clarity.jsx'
import Testimonials from '../Home/Testimonials.jsx'
import Footer from '../Footer.jsx'

const Pricing = () => {
  return (
    <div>
      <PricingHero/>
      <Coaching/>
       <Clarity/>
      <Testimonials/>
      <Footer />
    </div>
  )
}

export default Pricing
