import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Solution from './components/Solution/Solution';
import Contact from './components/Contact/Contact';
import Resources from './components/FreeResources/Resources';
import Faq from './components/Faq/Faq';
import Pricing from './components/Pricing/Pricing.jsx';

const App = () => {
  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/solutions" element={<Solution />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  )
}

export default App
