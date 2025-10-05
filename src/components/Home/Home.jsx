import React, { useState, useEffect } from 'react';
import Hero from './Hero'
import AboutJago from './AboutJago'
import SolutionOffer from './SolutionOffer'
import WhoWeHelp from './WhoWeHelp.jsx'
import NotSure from './NotSure.jsx'
import NextChapter from './NextChapter.jsx'
import Testimonials from './Testimonials.jsx'
import Footer from '../Footer.jsx'
import Loader from '../../utils/Loader.jsx';

const greetings = [
  'Hi',
  'Hola',
  'Bonjour',
  'Hallo',
  'Ciao',
  'नमस्ते',
  'こんにちは',
  'مرحبا'
];

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200); // 3.2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader greetings={greetings} />;

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

export default Home;
