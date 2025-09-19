import React from 'react'
import ContactHero from './ContactHero.jsx'
import QuickContact from './QuickContact.jsx'
import BookingCalendar from './BookingCalendar.jsx'
import Footer from '../Footer.jsx'

const Contact = () => {
  return (
    <div>
      <ContactHero/>
      <QuickContact/>
      <BookingCalendar/>
      <Footer />
    </div>
  )
}

export default Contact
