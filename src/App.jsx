import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Solution from './components/Solution/Solution';
import Contact from './components/Contact/Contact';
import Resources from './components/FreeResources/Resources';
import Faq from './components/Faq/Faq';
import Pricing from './components/Pricing/Pricing.jsx';
import PopupModal from './utils/PopupModal.jsx';
import ProgramDetails from './components/Pricing/ProgramDetails.jsx';

const App = () => {
  return (
      <>
      {/* Routes ke andar sirf Route components hi hone chahiye */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/program/:id" element={<ProgramDetails />} />
      </Routes>

      {/* Global Popup Routes ke bahar */}
      <PopupModal />
    </>
  )
}

export default App
