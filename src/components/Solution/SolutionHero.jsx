import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../Navbar";

const SolutionHero = () => {
  const leftContentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const rightImageVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } },
  };

  const leafVariants = {
    hidden: { opacity: 0, x: -50, y: -50, rotate: -20 },
    visible: { opacity: 1, x: 0, y: 0, rotate: 0, transition: { duration: 0.8, delay: 0.1, ease: "easeOut" } },
  };

  const clarityBoxVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-[#F6FBEF] relative overflow-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative w-full flex flex-col md:flex-row items-center justify-between px-5 sm:px-8 md:px-20 pt-28 md:pt-32 pb-16 md:pb-24">
        {/* Left */}
        <motion.div
          className="relative md:w-full z-10 text-center md:text-left"
          variants={leftContentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/leafe.png?updatedAt=1757570791498"
            alt="Leaf"
            className="hero-leaf absolute md:-left-20 -left-10 top-26 md:top-48 opacity-100 brightness-90 contrast-110 pointer-events-none -z-10 h-48 md:h-80"
            variants={leafVariants}
            initial="hidden"
            animate="visible"
          />

          <motion.h1 variants={itemVariants} className="text-3xl md:text-6xl font-medium text-green-950 leading-tight mb-4 sm:mb-6">
            Simple, Human, <br />
            <i className="italic font-bold font-serif">Effective Coaching</i>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-gray-700 text-base sm:text-lg mb-6 max-w-md mx-auto md:mx-0">
            Not therapy. Not consulting. Just clear, confidential guidance.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link to='/contact' className="bg-lime-400 text-green-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:bg-lime-500 transition text-sm sm:text-base">
              Book a Free 15-Minute Call
            </Link>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="md:w-1/2 justify-end mt-8 md:mt-0 md:flex hidden"
          variants={rightImageVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/solutionhero.jpg?updatedAt=1757570907767"
            alt="Coaching discussion"
            className="rounded-xl w-[80vw] h-[50vh] md:w-[30vw] md:h-[70vh] object-cover shadow-lg"
          />
        </motion.div>
      </div>

      {/* CLARITY BOX */}
      <div className="w-full bg-[#F6FBEF] flex justify-center pb-16 md:pb-24 relative z-10">
        <motion.div
          className="relative bg-green-950 text-center text-white py-12 sm:py-16 md:py-20 px-5 sm:px-10 md:px-20 rounded-2xl w-[95%] md:w-[85%] shadow-xl overflow-hidden"
          variants={clarityBoxVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ amount: 0.2 }} 
        >
          {/* BG circles only on large screens */}
          <div className="hidden md:block absolute top-0 left-0 w-80 h-80 bg-green-900 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="hidden md:block absolute bottom-0 right-0 w-80 h-80 bg-green-900 rounded-full opacity-20 translate-x-1/3 -translate-y-1/3"></div>

          <div className="relative z-10">
            <p className="text-xs sm:text-sm text-lime-300 mb-2 sm:mb-3">✨ 1:1 Coaching</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug mb-4 sm:mb-6 max-w-2xl mx-auto font-serif">
              Career clarity, personal purpose, identity, stress management.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8">
              60-minute online sessions.
            </p>
            <Link to='/contact' className="bg-lime-400 text-green-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:bg-lime-500 transition text-sm sm:text-base">
              Book a Free 15-Minute Call
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionHero;