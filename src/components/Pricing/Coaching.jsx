import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion"; 

const coachingData = [
  {
    id: 1,
    title: "1:1 Coaching Session",
    date: "Mar 02 – Mar 17",
    duration: "60-minute online session",
    details: ["Includes Personalized Notes & Action Roadmap."],
    price: "INR 24,999",
    oldPrice: "INR 34,999",
    popular: false,
  },
  {
    id: 2,
    title: "Clarity Package",
    date: "Mar 02 – Mar 17",
    duration: "4 sessions over 6 weeks.",
    details: ["Bonus: Guided Journal PDF"],
    price: "INR 24,999",
    oldPrice: "INR 34,999",
    popular: true,
  },
  {
    id: 3,
    title: "Deep Growth Package",
    date: "Mar 02 – Mar 17",
    duration: "8 sessions over 3 months.",
    details: ["Includes Priority Scheduling + Bonus Audio Pack."],
    price: "INR 24,999",
    oldPrice: "INR 34,999",
    popular: false,
  },
];

const Coaching = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
        delayChildren: 0.2, 
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const popularBadgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 10, delay: 0.6 } },
  };


  return (
    <motion.section
      className="bg-white py-20 px-4 md:px-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }} 
    >
      {/* Heading */}
      <motion.h2
        className="text-5xl font-bold text-green-900 mb-12 font-serif"
        variants={headingVariants}
      >
        Coaching
      </motion.h2>

      {/* Cards */}
      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-[#0F2E15]"
        variants={containerVariants} 
      >
        {coachingData.map((item) => (
          <motion.div
            key={item.id}
            className="relative bg-lime-50 rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col"
            variants={cardVariants} 
            whileHover={{ y: -5, boxShadow: "0 10px 15px rgba(0, 0,0, 0.1)" }} 
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Most Popular badge */}
            {item.popular && (
              <motion.span
                className="absolute top-4 right-4 bg-yellow-300 text-green-900 text-xs font-semibold px-3 py-1 rounded-full"
                variants={popularBadgeVariants}
              >
                Most Popular
              </motion.span>
            )}

            {/* Title */}
            <h3 className="text-xl font-semibold text-green-900">
              {item.title}
            </h3>

            {/* Date & Duration */}
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <p className="flex items-center gap-2">
                <FaCalendarAlt className="text-green-800" />
                {item.date}
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="text-green-800" />
                {item.duration}
              </p>
            </div>

            {/* Details */}
            <div className="mt-4 border rounded-md p-3 bg-white">
              <p className="text-sm text-gray-700 font-medium">View Details</p>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                {item.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="mt-5">
              <p className="text-lg font-bold text-red-600">{item.price}</p>
              <p className="text-sm text-gray-400 line-through">{item.oldPrice}</p>
              <p className="text-xs text-gray-600 mt-1">(Excl all taxes)</p>
            </div>

            {/* Button */}
            <motion.button
              className="mt-6 w-full bg-lime-300 text-green-900 font-medium py-2 rounded-md hover:bg-lime-400 transition"
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}   
            >
              Enroll Now
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Coaching;