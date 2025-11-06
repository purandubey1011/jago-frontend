import React from "react";
import { motion } from "framer-motion";

const OurMission = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
  };

  return (
    <section
      className="relative w-full h-[500px] flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0f2e15a3]"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 sm:px-24 flex flex-col md:flex-row justify-between h-full text-white">
        {/* Left Heading */}
        <motion.div
          className="md:w-1/3 flex items-start pt-16"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug font-serif">
            Our <br /> Mission
          </h2>
        </motion.div>

        {/* Right Paragraph */}
        <motion.div
          className="md:w-2/3 flex items-end pb-12 sm:pb-16 mt-6 md:mt-0"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.5 }}
        >
          <p className="text-sm sm:text-sm md:text-[1.5vw] md:font-medium lg:font-semibold lg:text-xl leading-normal max-w-2xl">
           JaGoCoach's mission is provide personalised coaching, guidance, and tools that give you the support to grow into your best self – at any age, at any stage, background, or where you are in life. JaGoCoach offers real support to help you move past temporary setbacks (yes, they are temporary), shift your limiting beliefs, and hep you build a stronger mindset for the future. Whether you're leading a global team or exploring personal growth, JaGoCoach meets you where you are—with real support and lasting impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;