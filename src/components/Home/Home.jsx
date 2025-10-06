import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import AboutJago from './AboutJago';
import SolutionOffer from './SolutionOffer';
import WhoWeHelp from './WhoWeHelp.jsx';
import NotSure from './NotSure.jsx';
import NextChapter from './NextChapter.jsx';
import Testimonials from './Testimonials.jsx';
import Footer from '../Footer.jsx';
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if loader has already been shown this session
    const hasLoaded = sessionStorage.getItem('hasLoaded');

    if (!hasLoaded) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('hasLoaded', 'true'); // Mark as shown
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) return <Loader greetings={greetings} />;

  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutJago />
      <SolutionOffer />
      <WhoWeHelp />
      <NotSure />
      <NextChapter />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
