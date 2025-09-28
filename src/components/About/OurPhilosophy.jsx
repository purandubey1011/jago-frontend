import React from "react";
import { motion } from "framer-motion";

const OurPhilosophy = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.15, 
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 30, rotate: 0 },
    visible: (customRotation) => ({
      opacity: 1,
      y: 0,
      rotate: customRotation,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="bg-[#f8fceb] py-14 md:py-16 flex flex-col items-center text-center px-5 sm:px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{  amount: 0.3 }} 
    >
      {/* Images */}
      <div className="flex items-center justify-center mb-8 md:mb-10 -space-x-6">
        <motion.img
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/img1a.jpg?updatedAt=1757794172889"
          alt="Sticky notes"
          className="w-28 h-40 sm:w-32 sm:h-44 md:w-40 md:h-56 object-cover rounded-lg shadow-md transform -rotate-6 border-3 border-[#EAFE45]"
          variants={imageVariants}
          custom={-6} 
        />
        <motion.img
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/img2a.jpg?updatedAt=1757794173097"
          alt="Discussion"
          className="w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 object-cover rounded-lg shadow-lg z-10 border-3 border-[#EAFE45]"
          variants={imageVariants}
          custom={0} 
        />
        <motion.img
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/img3a.jpg?updatedAt=1757794172882"
          alt="Thumbs up"
          className="w-28 h-40 sm:w-32 sm:h-44 md:w-40 md:h-56 object-cover rounded-lg shadow-md transform rotate-6 border-3 border-[#EAFE45]"
          variants={imageVariants}
          custom={6} 
        />
      </div>

      {/* Heading */}
      <motion.h2
        className="text-xl md:text-4xl font-semibold text-[#0F2E15] mb-3 md:mb-4 font-serif"
        variants={textVariants}
      >
        Our Philosophy
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="max-w-md md:max-w-3xl text-[#0F2E15]/80 text-sm sm:text-base md:text-lg leading-relaxed"
        variants={textVariants}
      >
        JaGoCoach listens, connects, and guides. Every conversation is a safe space — empathetic, confidential, and tailored to you. Because real change starts with real connection.
      </motion.p>
    </motion.section>
  );
};

export default OurPhilosophy;