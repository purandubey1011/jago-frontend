import React from "react";
import { motion } from "framer-motion";

const WellBeing = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };


  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
  };


  const cardVariants = {
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

  return (
    <section className="w-full bg-[#E8FF47] py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* ===== Heading ===== */}
        <div className="text-center mb-14">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-green-950"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.5 }}
          >
            <span className="italic font-medium">Well Being</span> Resources
          </motion.h2>
          <motion.p
            className="text-gray-800 mt-3 max-w-2xl mx-auto text-base md:text-lg"
            variants={subheadingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.5 }}
          >
            Join interactive lessons and explore your creativity in a supportive
            community.
          </motion.p>
        </div>

        {/* ===== Cards ===== */}
        <div className="flex flex-col md:flex-row gap-2 justify-center">
          {/* Card 1 */}
          <motion.div
            className="bg-white rounded-2xl shadow-md w-full md:w-1/3 overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.3 }} 
            transition={{ delay: 0.3 }} 
          >
            <img
              src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849824_1280.jpg"
              alt="Guided Journals"
              className="w-full h-52 object-cover p-2 rounded-2xl"
            />
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-green-950 text-lg">
                  Guided Journals for self-reflection
                </h3>
                <span className="bg-lime-400 text-green-900 text-xs font-medium px-3 py-1 rounded-full">
                  Free
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna.
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849824_1280.jpg"
                  alt="Angela"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-gray-800 text-sm font-medium">
                  Angela Moss
                  <span className="block text-gray-500 text-xs">
                    Professional Coach
                  </span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white rounded-2xl shadow-md w-full md:w-1/3 overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.3 }}
            transition={{ delay: 0.5 }} 
          >
            <img
              src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849824_1280.jpg"
              alt="Audio Practices"
              className="w-full h-52 object-cover p-2 rounded-2xl"
            />
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-green-950 text-lg">
                  Audio Practices for calm and focus
                </h3>
                <span className="bg-lime-400 text-green-900 text-xs font-medium px-3 py-1 rounded-full">
                  Free
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna.
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849824_1280.jpg"
                  alt="Angela"
                  className="w-8 h-8 rounded-full object-cover "
                />
                <span className="text-gray-800 text-sm font-medium">
                  Angela Moss
                  <span className="block text-gray-500 text-xs">
                    Professional Coach
                  </span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white rounded-2xl shadow-md w-full md:w-1/3 overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.3 }}
            transition={{ delay: 0.7 }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849824_1280.jpg"
              alt="Daily Clarity Prompts"
              className="w-full h-52 object-cover p-2 rounded-2xl"
            />
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-green-950 text-lg">
                  Daily Clarity Prompts
                </h3>
                <span className="bg-yellow-300 text-green-900 text-xs font-medium px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna.
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849824_1280.jpg"
                  alt="Steven"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-gray-800 text-sm font-medium">
                  Steven Wise
                  <span className="block text-gray-500 text-xs">
                    Professional Coach
                  </span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WellBeing;