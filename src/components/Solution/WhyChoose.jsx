import React from "react";
import { FaRegStar, FaLightbulb, FaUserFriends } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyChoose = () => {

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
  };


  const boxVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: { scale: 1, rotate: 0, opacity: 1, transition: { duration: 0.5, ease: "backOut" } },
  };

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* === Heading === */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-green-950 mb-4"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.5 }}
        >
          <span className="italic font-semibold">Why Choose</span>{" "}
          <span className="font-semibold">JaGo?</span>
        </motion.h2>
        <motion.p
          className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-14"
          variants={subheadingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.5 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          pellentesque arcu sed felis.
        </motion.p>

        {/* === Feature Boxes === */}
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {/* Box 1 */}
          <motion.div
            className="flex flex-col items-center text-center max-w-xs mx-auto"
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{  amount: 0.3 }} // Trigger when 30% of the box is in view
            transition={{ delay: 0.3 }} // Stagger delay for first box
          >
            <motion.div
              className="bg-[#0c2b16] rounded-xl p-5 flex items-center justify-center mb-5 shadow-sm"
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{  amount: 0.5 }}
              transition={{ delay: 0.5 }} // Delay icon animation a bit more
            >
              <FaRegStar className="text-white w-5 h-5" />
            </motion.div>
            <p className="text-green-950 font-medium text-lg leading-snug">
              Deep empathy + 25 years global experience.
            </p>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            className="flex flex-col items-center text-center max-w-xs mx-auto"
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{  amount: 0.3 }}
            transition={{ delay: 0.5 }} // Stagger delay for second box
          >
            <motion.div
              className="bg-[#0c2b16] rounded-xl p-5 flex items-center justify-center mb-5 shadow-sm"
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{  amount: 0.5 }}
              transition={{ delay: 0.7 }}
            >
              <FaLightbulb className="text-white w-5 h-5" />
            </motion.div>
            <p className="text-green-950 font-medium text-lg leading-snug">
              Tailored solutions, never cookie-cutter advice.
            </p>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            className="flex flex-col items-center text-center max-w-xs mx-auto"
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{  amount: 0.3 }}
            transition={{ delay: 0.7 }} // Stagger delay for third box
          >
            <motion.div
              className="bg-[#0c2b16] rounded-xl p-5 flex items-center justify-center mb-5 shadow-sm"
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{  amount: 0.5 }}
              transition={{ delay: 0.9 }}
            >
              <FaUserFriends className="text-white w-5 h-5" />
            </motion.div>
            <p className="text-green-950 font-medium text-lg leading-snug">
              Safe, private, supportive environment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;