import React, { useRef } from "react";
import { BsStars } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutJago = () => {
  const sectionRef = useRef(null);
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration:0.8, ease: "easeOut" } },
  };

  const contentChildVariants = {
    hidden: { x: 40, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="w-[90vw] max-w-[1200px] mx-auto py-16 sm:py-20 flex flex-col md:flex-row gap-10 md:gap-12 items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{  amount: 0.3 }} 
    >
      {/* Left Image */}
      <motion.div variants={imageVariants} className="relative">
        <div className="absolute -top-3 -left-3 w-full h-full bg-lime-300 rounded-lg -z-10"></div>
        <img
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/herosecondgirl.jpg?updatedAt=1757791267264"
          alt="About Jago"
          className="rounded-lg w-full max-w-[80vw] md:max-w-[30vw] md:h-[70vh] h-[55vh] object-cover"
        />
      </motion.div>

      {/* Right Content */}
      <div className="flex flex-col gap-6 max-w-[550px] px-2 sm:px-0">
        {/* Small heading with icon */}
        <motion.div variants={contentChildVariants} className="flex items-center gap-2 text-gray-600 text-sm font-medium">
          <BsStars className="text-yellow-400" />
          About JaGo
        </motion.div>

        {/* Main Heading */}
        <motion.h2 variants={contentChildVariants} className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
          Arise. Awake. Achieve JaGo <br />
          is your partner in clarity <br />
          and growth.
        </motion.h2>

        {/* Subtext */}
        <motion.p variants={contentChildVariants} className="text-gray-600 text-base leading-relaxed ">
          With over 25 years of global experience in people development across
          the UK, Europe, and India, JaGo brings deep, practical insights into
          human challenges
        </motion.p>

        {/* Button */}
      <motion.div variants={contentChildVariants}>
  <Link
    to="/about"
    className="bg-lime-300 hover:bg-lime-400 transition text-gray-900 font-semibold px-6 py-3 rounded-full w-fit shadow"
  >
    Discover Now
  </Link>
</motion.div>

        {/* Tags */}
        <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 mt-4">
          {[
            "Certified Life Coach",
            "Reiki Healer",
            "Mental Physics Practitioner",
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={contentChildVariants}
              className="flex flex-col items-start gap-2 border border-lime-300 rounded-lg px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm font-medium text-gray-800 bg-white"
            >
              <img src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/check.png?updatedAt=1757791598302" className="w-6" alt="" />
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutJago;