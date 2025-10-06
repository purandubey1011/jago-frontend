import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { programsData } from "./programData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Custom Inline SVG for Checkmark
const SVGCheck = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const Bonus = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const program = programsData[id - 1];
  if (!program)
    return <div className="text-center py-10">Program not found.</div>;

  const { bonusAddons, investment } = program;

  // Animation Variants
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
    <>
      <div className="w-full bg-[#133216] py-10 px-4 sm:px-6 md:px-16 font-['Inter',_sans-serif]">
        <div className="max-w-6xl mx-auto bg-[#EAFE45] rounded-2xl py-10 md:py-20 px-4 sm:px-8 md:px-16 relative overflow-hidden flex flex-col md:flex-row items-center md:justify-around">
          {/* --- DESKTOP GRID --- */}
          <div className="hidden md:grid grid-cols-12 gap-x-12 w-full">
            {/* Left Column */}
            <div className="col-span-7 flex flex-col space-y-3">
              {/* Bonus Tag */}
              <div className="flex items-center space-x-2 w-fit px-3 py-1 rounded-full bg-black/10 border-2 border-black/50">
                <SVGCheck className="w-4 h-4 text-gray-700" />
                <span className="text-sm font-semibold text-gray-700">
                  {bonusAddons?.heading || "Bonus"}
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl font-serif font-extrabold text-black leading-tight pt-2">
                {program.whoThisIsFor?.heading || "Who This Course Is For"}
              </h2>

              {/* Description */}
              <p className="text-md text-gray-700 font-medium opacity-90 mb-4">
                {program.whoThisIsFor?.description ||
                  "Who Should Attend the PMP Course Online"}
              </p>

              {/* CTA Button */}
              <div
                onClick={() => {
                  setSelectedProgram(program);
                  setIsModalOpen(true);
                }}
                className="px-6 py-3 w-fit rounded-full bg-white flex items-center space-x-2 transition duration-300 hover:scale-[1.03] cursor-pointer"
                style={{
                  boxShadow:
                    "-10px 10px 15px rgba(128,128,128,0.4), 0 4px 10px rgba(0,0,0,0.2)",
                }}
              >
                <span className="text-lg font-semibold text-gray-800">
                  Enroll Now at {investment?.price || "$0"}
                </span>
                {investment?.discountedFrom && (
                  <div className="flex gap-2 text-xs leading-none">
                    <span className="text-gray-700 opacity-70">25% off</span>
                    <span className="line-through text-gray-500 opacity-50">
                      {investment.discountedFrom}
                    </span>
                  </div>
                )}
              </div>

              {/* Plan */}
              {investment?.paymentPlan && (
                <div className="pt-4">
                  <p className="text-sm text-gray-600 opacity-80 font-medium leading-2.5">
                    Plan
                  </p>
                  <p className="text-sm text-gray-800 font-medium">
                    {investment.paymentPlan}
                  </p>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="col-span-5 flex flex-col justify-center mt-2 md:mt-0">
              <ul className="space-y-4 text-base pl-0 list-none">
                {bonusAddons?.items?.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 items-center text-black"
                  >
                    <span className="text-xl leading-none">•</span>
                    <span className="font-bold text-[1vw]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- MOBILE STACK --- */}
          <div className="flex flex-col md:hidden items-center text-center w-full space-y-6">
            {/* 1️⃣ Bonus Tag */}
            <div className="flex items-center justify-center space-x-2 w-fit px-4 py-1 rounded-full bg-black/10 border-2 border-black/50">
              <SVGCheck className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-semibold text-gray-700">
                {bonusAddons?.heading || "Bonus"}
              </span>
            </div>

            {/* 2️⃣ Heading */}
            <h2 className="text-2xl font-serif font-extrabold text-black leading-snug">
              {program.whoThisIsFor?.heading || "Who This Course Is For"}
            </h2>

            {/* 3️⃣ List Items */}
            <ul className="space-y-3 text-sm sm:text-base w-full max-w-sm">
              {bonusAddons?.items?.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start justify-start text-black text-base font-semibold"
                >
                  <span className="mr-2 text-md leading-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* 4️⃣ Enroll Now Button */}
            <div
              onClick={() => {
                setSelectedProgram(program);
                setIsModalOpen(true);
              }}
              className="mt-4 px-6 py-3 rounded-full bg-white shadow-md hover:scale-[1.03] transition duration-300 cursor-pointer"
              style={{
                boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
              }}
            >
              <span className="text-base font-semibold text-gray-800">
                Enroll Now at {investment?.price || "$0"}
              </span>
            </div>

            {/* 5️⃣ Plan */}
            {investment?.paymentPlan && (
              <div className="pt-1">
                <p className="text-xs text-gray-600 opacity-80 font-medium leading-2.5">
                  Plan
                </p>
                <p className="text-sm text-gray-800 font-semibold">
                  {investment.paymentPlan}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- Modal (same as Coaching.js) --- */}
      <AnimatePresence>
        {isModalOpen && selectedProgram && (
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

              <h3 className="text-xl font-semibold mb-3">
                {selectedProgram.title || "Confirm Enrollment"}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {selectedProgram.whoThisIsFor?.description ||
                  "You are about to enroll in this program."}
              </p>

              {bonusAddons?.items && (
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                  {bonusAddons.items.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              )}

              <p className="text-lg font-bold text-green-800">
                {investment?.price || "INR 0"}
              </p>
              {investment?.discountedFrom && (
                <p className="text-sm text-gray-500 line-through">
                  {investment.discountedFrom}
                </p>
              )}
              <p className="text-xs text-gray-600 mb-4">
                {investment?.paymentPlan}
              </p>

             <motion.button
  type="button"
  className="w-full py-2 px-4 bg-green-700 text-white rounded hover:bg-green-800 transition"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => {
    if (!window.Razorpay) {
      toast.error("Razorpay SDK not loaded!");
      return;
    }

    const options = {
      key: "rzp_test_RIZb5le1ykNbRN", // Razorpay test key
      amount: (selectedProgram.investment?.inrPrice || 0) * 100, // paisa
      currency: "INR",
      name: "JaGoCoach",
      description: `Booking: ${selectedProgram.title}`,
      handler: async function (response) {
        try {
          await fetch("https://jago-backend.onrender.com/api/v1/form/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: "Guest", // optional: add name/email input if needed
              email: "guest@example.com",
              package: selectedProgram.title,
              paymentId: response.razorpay_payment_id,
            }),
          });

          toast.success("✅ Booking confirmed!", { position: "top-right", autoClose: 3000 });

          // ✅ Close modal after successful payment
          setIsModalOpen(false);
        } catch (error) {
          toast.error("Booking save failed!");
          console.error(error);
        }
      },
      theme: { color: "#10b981" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  }}
>
  Confirm Enroll
</motion.button>



            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Bonus;
