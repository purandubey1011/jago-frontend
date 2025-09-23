import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const NextChapter = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Stagger them slightly
      },
    },
  };

  const childVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="relative w-full h-[70vh]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.65 }} // Trigger when 65% of the component is in view
    >
      {/* Background Image */}
      <motion.img
  src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/nextChapterbg.jpg?updatedAt=1757792355898"
  alt="Next Chapter"
  className="w-full h-full object-cover rounded-t-3xl object-[50%_50%]"
  initial={{ opacity: 0, scale: 1.05 }}   // start thoda zoom aur invisible
  whileInView={{ opacity: 1, scale: 1 }}  // scroll me fade-in aur zoom-out
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.6 }}  // ek hi baar trigger ho
/>
      {/* Dark Overlay */}
      <div className="absolute inset-0 rounded-t-3xl bg-[#0F2E1599]/90"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          variants={childVariants}
          className="text-3xl md:text-6xl font-semibold text-white max-w-4xl mb-10 md:leading-[9vh] leading-tight font-serif"
        >
          Your next chapter begins <br /> with one conversation
        </motion.h2>
        <Link to='/contact'>
          <motion.button
            variants={childVariants}
            className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100"
          >
            Book a Free 20-minute Discovery Call
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default NextChapter;