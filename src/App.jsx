import { Routes, Route } from "react-router-dom";
import BannerTop from "./utils/BannerTop.jsx";
import Navbar from "./components/Navbar.jsx";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Solution from "./components/Solution/Solution";
import Contact from "./components/Contact/Contact";
import Resources from "./components/FreeResources/Resources";
import Faq from "./components/Faq/Faq";
import Pricing from "./components/Pricing/Pricing.jsx";
import PopupModal from "./utils/PopupModal.jsx";
import ProgramDetails from "./components/Pricing/Programdetails/ProgramDetails.jsx";
import Success from "./components/Pricing/Success.jsx";
import Cancel from "./components/Pricing/Cancel.jsx";

const App = () => {
  return (
    <>
      {/* 🔔 Top Rotating Banner */}
      <BannerTop />

      {/* 🌿 Main Navbar */}
      <Navbar />

      {/* 📄 Page Content */}
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solution />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/program/:id" element={<ProgramDetails />} />

          {/* Stripe Pages */}
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </div>

      {/* 🌍 Global Popup */}
      <PopupModal />
    </>
  );
};

export default App;
