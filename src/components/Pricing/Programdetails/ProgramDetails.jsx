import React from "react";
import { BsStars } from "react-icons/bs";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import Testimonials from "../../Home/Testimonials";
import Herosection from "./Herosection";
import Isthisprogram from "./Isthisprogram";
import Awareness from "./Awareness";
import Goals from "./Goals";
import Change from "./Change";
import Bonus from "./Bonus";

const ProgramDetails = () => {
  return (
    <div className="w-full h-full overflow-hidden relative">
      {/* navbar */}
      <div className="h-[8vh] md:h-[10vh] w-full bg-white">
        <Navbar />
      </div>
      
      {/* hero section */}
      <Herosection />

      {/* is this program */}
      <Isthisprogram />

      {/* awareness */}
      <Awareness />

      {/* goals */}
      <Goals/>

      {/* change */}
      <Change />

      {/* bonus */}
      <Bonus />

      {/* testimonials */}
      <Testimonials />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default ProgramDetails;
