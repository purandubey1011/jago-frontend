import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const coachingData = [
  {
    id: 1,
    title: "The JaGoCoach Signature: 12-Week Program",
    subtitle: "Weekly 1:1 60-min sessions (virtual or in-person)",
    details: [
      "Covers Awareness → Beliefs & Big Goals → Change",
      "Bonus: Breathwork, Meditation, Persona Mapping, Voice-note check-ins",
    ],
    price: "INR 2,99,999",
    oldPrice: "INR 5,00,000",
    note: "Payment Plan: 3 × $1,200",
    popular: true,
  },
  {
    id: 2,
    title: "JaGoCoach Launchpad: Obstacle Breaker",
    subtitle: "3 × 60-min 1:1 sessions",
    details: [
      "Framework: Awareness → Audit → Reset",
      "Bonus: Follow-up check-in",
    ],
    price: "INR 49,999",
    oldPrice: "INR 69,999",
    note: "Includes: 3 sessions + bonus check-in",
    popular: false,
  },
  {
    id: 3,
    title: "JaGoCoach Lifeline: Emergency Call",
    subtitle: "45-min focused virtual call",
    details: ["For tough decisions, overwhelm, or urgent mindset reset"],
    price: "INR 19,999",
    oldPrice: "INR 29,999",
    note: "Quick access, fast turnaround",
    popular: false,
  },
];

const Coaching = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate()

  const modalBackdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const modalContent = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <motion.section className="bg-white py-20 px-4 md:px-12">
      <ToastContainer />

      {/* Heading */}
      <motion.h2 className="text-5xl font-bold text-green-900 mb-12 font-serif">
        Coaching
      </motion.h2>

      {/* Cards */}
      <motion.div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-[#0F2E15]">
        {coachingData.map((item) => (
          <motion.div
            key={item.id}
            className="relative bg-[#f8fce0] rounded-lg  px-6 py-8 flex flex-col justify-between"
            onClick={() => navigate(`/program/${item.id}`)}
          >
            {/* Popular Badge */}
            {item.popular && (
              <span className="absolute top-3 md:top-1.5 right-4 bg-yellow-400 text-green-900 text-[2vw] md:text-[.5vw] font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            {/* Title */}
            <h3 className="text-xl font-bold text-green-900 font-serif min-h-[7vh]">
              {item.title}
            </h3>

            {/* Subtitle */}
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-2 text-sm text-black font-medium">
                <AiOutlineCalendar className="text-lg" />
                <span>Mar 02 – Mar 17</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-black font-medium">
                <AiOutlineClockCircle className="text-lg" />
                <span>{item.subtitle}</span>
              </div>
            </div>

            {/* View Details */}
            <div className="mt-3 border border-gray-300 rounded p-1 ">
              <button className="w-full text-left  px-1 py-1 rounded text-xs font-medium hover:bg-white/70 transition">
                View Details
              </button>
              <hr className="my-1 border-gray-300" />
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 px-3 py-1 min-h-[9vh]">
                {item.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="mt-2">
              <p className="text-lg font-bold bg-gradient-to-r from-[#b8cc21] via-[#061309] to-green-400 bg-clip-text text-transparent">
                {item.price}
              </p>

              <p className="text-xs text-gray-500 line-through">
                {item.oldPrice}
              </p>
              {/* <p className="text-xs text-gray-600">{item.note}</p> */}
            </div>

            {/* CTA Button */}
            <motion.button
              className="mt-4 w-full bg-[#0c2b16] text-white font-medium py-2 rounded-md hover:bg-[#1a5b2f] transition"
              onClick={() => {
                setSelectedPackage(item);
                setIsModalOpen(true);
              }}
            >
              Know more
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPackage && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative"
              variants={modalContent}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              >
                ✕
              </button>

              <h3 className="text-xl font-semibold mb-4">
                {selectedPackage.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {selectedPackage.subtitle}
              </p>

              <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                {selectedPackage.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>

              <p className="text-lg font-bold text-green-800">
                {selectedPackage.price}
              </p>
              <p className="text-sm text-gray-500 line-through">
                {selectedPackage.oldPrice}
              </p>
              <p className="text-xs text-gray-600 mb-4">
                {selectedPackage.note}
              </p>

              <motion.button
                type="button"
                className="w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Confirm Enroll
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Coaching;
