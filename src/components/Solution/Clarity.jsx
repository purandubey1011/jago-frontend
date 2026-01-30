import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Clarity = () => {

  const boxContentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const leafVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 0.9, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-green-950 py-16 sm:py-20 px-4 sm:px-6 md:px-0 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="bg-white rounded-3xl shadow-lg px-5 sm:px-8 md:px-16 py-12 sm:py-16 text-center relative overflow-hidden"
          variants={boxContentVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{  amount: 0.6 }} 
        >
          {/* Leaves */}
          <motion.img
            src="https://ik.imagekit.io/b9tt0xvd7/Falverra/jogo/home/leafe.png?updatedAt=1764674312977"
            alt="leaf left"
            className="absolute left-0 bottom-2 w-16 sm:w-24 md:w-36 opacity-90"
            variants={leafVariants}
            transition={{ delay: 0.4 }} 
          />
          <motion.img
            src="https://ik.imagekit.io/b9tt0xvd7/Falverra/jogo/home/leafe.png?updatedAt=1764674312977"
            alt="leaf right"
            className="absolute right-0 bottom-2 w-16 sm:w-24 md:w-36 opacity-90 rotate-180"
            variants={leafVariants}
            transition={{ delay: 0.5 }} 
          />

          {/* Text */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-950 mb-6 sm:mb-8 leading-snug"
            variants={itemVariants} 
          >
            The clarity you seek is
            <br className="hidden sm:block" />
            one call away
          </motion.h2>

          {/* Button */}
          <motion.div variants={itemVariants}> 
            <Link to='/contact#booking-calendar' className="bg-[#0c2b16] text-white font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-[#237f40] transition text-sm sm:text-base">
              Book Your First Session
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clarity;