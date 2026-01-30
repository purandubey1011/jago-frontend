import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { motion } from "framer-motion"; // Import motion from framer-motion

const PricingHero = () => {
  // Framer Motion Variants
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0.8 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5, transition: { duration: 1.5, ease: "easeOut" } },
  };

  const headingVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.7, duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.header
      className="relative h-[85vh] w-full flex items-center justify-center"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background image */}
      <motion.img
        src="https://ik.imagekit.io/b9tt0xvd7/Falverra/jogo/home/priceheroimg.jpg?updatedAt=1764674313256"
        alt="Pricing Hero"
        className="absolute inset-0 w-full h-full object-cover object-[50%_20%]"
        variants={imageVariants}
      />

      {/* Green overlay */}
      <motion.div
        className="absolute inset-0 bg-green-900" // Start with full green for animation
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>

      {/* Navbar */}
      <Navbar/>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center text-white px-4 max-w-4xl"
        variants={headingVariants}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Investing in yourself is the best decision you'll ever make.
        </h1>
      </motion.div>
    </motion.header>
  );
};

export default PricingHero;