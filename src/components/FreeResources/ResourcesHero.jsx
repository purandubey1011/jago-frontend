import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import Navbar from "../Navbar";

const Resources = () => {
  const root = useRef(null);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div ref={root} className="relative bg-white overflow-hidden">
      {/* === NAVBAR === */}
      <Navbar />

      {/* === HERO === */}
      <motion.section
        className="flex flex-col justify-center items-center text-center px-4 pt-32 sm:pt-36 pb-16 sm:pb-20 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT LEAF */}
        <motion.img
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/leafe.png?updatedAt=1757570791498"
          alt="Leaf"
          className="absolute -left-6 sm:-left-10 top-28 sm:top-40 w-28 sm:w-60 rotate-[60deg] opacity-90 pointer-events-none"
          initial={{ opacity: 0, x: -50, }}
          animate={{ opacity: 0.9, x: 0,}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        />
        {/* RIGHT LEAF */}
        <motion.img
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/leafe.png?updatedAt=1757570791498"
          alt="Leaf mirrored"
          className="absolute -right-6 sm:-right-10 top-28 sm:top-40 w-28 sm:w-60 -scale-x-100 -rotate-[60deg] opacity-90 pointer-events-none"
          initial={{ opacity: 0, x: 50, }}
          animate={{ opacity: 0.9, x: 0, }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        />

        <motion.h1
          className="res-headline text-3xl sm:text-5xl font-bold text-green-900 leading-tight relative z-10"
          variants={itemVariants}
        >
          Clarity starts with <br />
          <span className="block">Reflection</span>
        </motion.h1>

        <motion.p
          className="res-paragraph mt-5 sm:mt-6 max-w-xl text-gray-700 text-base sm:text-lg relative z-10"
          variants={itemVariants}
        >
          Explore free tools, practices, and reflections to begin your journey.
        </motion.p>

        <motion.div
          className="res-buttons mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 relative z-10"
          variants={containerVariants} 
        >
          <motion.button
            className="px-4 sm:px-5 py-2 bg-lime-300 text-black rounded-full font-medium shadow-sm hover:bg-lime-400 text-sm sm:text-base"
            variants={buttonVariants}
          >
            Stress relief
          </motion.button>
          <motion.button
            className="px-4 sm:px-5 py-2 border border-lime-300 text-black rounded-full font-medium hover:bg-lime-50 text-sm sm:text-base"
            variants={buttonVariants}
          >
            Navigating career crossroads
          </motion.button>
          <motion.button
            className="px-4 sm:px-5 py-2 border border-lime-300 text-black rounded-full font-medium hover:bg-lime-50 text-sm sm:text-base"
            variants={buttonVariants}
          >
            Purpose vs Confusion
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Resources;