import React from 'react'
import ContactHero from './ContactHero.jsx'
import QuickContact from './QuickContact.jsx'
import BookingCalendar from './BookingCalendar.jsx'
import Footer from '../Footer.jsx'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // thoda delay taki render ho jaye
      }
    }
  }, [location]);
  return (
    <div className='w-full h-full overflow-hidden'>
      <ContactHero/>
      <QuickContact/>
      <BookingCalendar id="booking-calendar"/>
      <Footer />
    </div>
  )
}

export default Contact
