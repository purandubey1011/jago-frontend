import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { programsData } from "./programData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCurrencyStore } from "../../store/currencyStore";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51PhEeQB2qUwm737GB72wW58cES7qVxmI0VhdlThaTw41dSrs97Mva1kC96sXmMTYauyiEBAP9YhoFGdicMaiv6FU00V25118aL"); // ← tumhari publishable key


// ------------ CURRENCY RATES -------------
const conversionRates = {
  "£": 1, // GBP (BASE)
  "₹": 105, // INR
  $: 1.25, // USD
  "€": 1.15, // EURO
  "د.إ": 4.6, // AED
};

// ------------ PRICE FORMATTER -------------
const formatPrice = (currency, amount) => {
  const rate = conversionRates[currency] || 1;
  const converted = Math.round(amount * rate);
  return currency + converted.toLocaleString();
};

// SVG Check Icon
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

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

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

const Bonus = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  // 🟢 Global Currency State
  const currency = useCurrencyStore((state) => state.currency);

  const program = programsData[id - 1];
  if (!program)
    return <div className="text-center py-10">Program not found.</div>;

  const { bonusAddons, investment } = program;

  // Extract only numeric values
  const cleanPrice = parseInt(investment?.price?.replace(/\D/g, "")) || 0;
  const cleanDiscount =
    parseInt(investment?.discountedFrom?.replace(/\D/g, "")) || 0;

  // Apply conversion
  const mainPrice = formatPrice(currency, cleanPrice);
  const discountPrice = cleanDiscount
    ? formatPrice(currency, cleanDiscount)
    : null;

  return (
    <>
      <motion.div
        className="w-full bg-[#133216] py-10 px-4 sm:px-6 md:px-16 font-['Inter',_sans-serif]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="max-w-6xl mx-auto bg-[#EAFE45] rounded-2xl py-10 md:py-20 px-4 sm:px-8 md:px-16 relative overflow-hidden flex flex-col md:flex-row items-center md:justify-around"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* DESKTOP */}
          <div className="hidden md:grid grid-cols-12 gap-x-12 w-full">
            {/* Left Column */}
            <motion.div
              className="col-span-7 flex flex-col space-y-3"
              variants={staggerContainer}
            >
              <motion.div
                className="flex items-center space-x-2 w-fit px-3 py-1 rounded-full bg-black/10 border-2 border-black/50"
                variants={fadeUp}
              >
                <SVGCheck className="w-4 h-4 text-gray-700" />
                <span className="text-sm font-semibold text-gray-700">
                  {bonusAddons?.heading || "Bonus"}
                </span>
              </motion.div>

              <motion.h2
                className="text-4xl font-serif font-extrabold text-black leading-tight pt-2"
                variants={fadeUp}
              >
                {program.whoThisIsFor?.heading}
              </motion.h2>

              <motion.p
                className="text-md text-gray-700 font-medium opacity-90 mb-4"
                variants={fadeUp}
              >
                {program.whoThisIsFor?.description}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                onClick={() => {
                  setSelectedProgram(program);
                  setIsModalOpen(true);
                }}
                className="px-6 py-3 w-fit rounded-full bg-white flex items-center space-x-2 duration-300 hover:scale-[1.03] cursor-pointer"
                variants={fadeUp}
                style={{
                  boxShadow:
                    "-10px 10px 15px rgba(128,128,128,0.4), 0 4px 10px rgba(0,0,0,0.2)",
                }}
              >
                <span className="text-lg font-semibold text-gray-800">
                  Enroll Now at {mainPrice}
                </span>

                {discountPrice && (
                  <div className="flex gap-2 text-xs leading-none">
                    <span className="text-gray-700 opacity-70">25% off</span>
                    <span className="line-through text-gray-500 opacity-50">
                      {discountPrice}
                    </span>
                  </div>
                )}
              </motion.div>

              {/* Plan */}
              {investment?.paymentPlan && (
                <motion.div className="pt-4" variants={fadeUp}>
                  <p className="text-sm text-gray-600 opacity-80 font-medium leading-2.5">
                    Plan
                  </p>
                  <p className="text-sm text-gray-800 font-medium">
                    {investment.paymentPlan}
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Right Column */}
            <motion.ul
              className="col-span-5 flex flex-col justify-center mt-2 md:mt-0 space-y-4 text-base pl-0 list-none"
              variants={staggerContainer}
            >
              {bonusAddons?.items?.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex gap-3 items-center text-black"
                  variants={listItem}
                >
                  <span className="text-xl leading-none">•</span>
                  <span className="font-bold text-[1vw]">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* MOBILE */}
          <motion.div
            className="flex flex-col md:hidden items-center text-center w-full space-y-6"
            variants={staggerContainer}
          >
            <motion.div
              className="flex items-center justify-center space-x-2 w-fit px-4 py-1 rounded-full bg-black/10 border-2 border-black/50"
              variants={fadeUp}
            >
              <SVGCheck className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-semibold text-gray-700">
                {bonusAddons?.heading}
              </span>
            </motion.div>

            <motion.h2
              className="text-2xl font-serif font-extrabold text-black leading-snug"
              variants={fadeUp}
            >
              {program.whoThisIsFor?.heading}
            </motion.h2>

            <motion.ul
              className="space-y-3 text-sm sm:text-base w-full max-w-sm"
              variants={staggerContainer}
            >
              {bonusAddons?.items?.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start justify-start text-black text-base font-semibold"
                  variants={listItem}
                >
                  <span className="mr-2 text-md leading-none">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Button */}
            <motion.div
              onClick={() => {
                setSelectedProgram(program);
                setIsModalOpen(true);
              }}
              className="mt-4 px-6 py-3 rounded-full bg-white shadow-md hover:scale-[1.03] duration-300 cursor-pointer"
              style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.25)" }}
              variants={fadeUp}
            >
              <span className="text-base font-semibold text-gray-800">
                Enroll Now at {mainPrice}
              </span>
            </motion.div>

            {investment?.paymentPlan && (
              <motion.div className="pt-1" variants={fadeUp}>
                <p className="text-xs text-gray-600 opacity-80 font-medium">
                  Plan
                </p>
                <p className="text-sm text-gray-800 font-semibold">
                  {investment.paymentPlan}
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* MODAL */}
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
                {selectedProgram.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {selectedProgram.whoThisIsFor?.description}
              </p>

              <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                {bonusAddons.items.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>

              {/* Dynamic Currency */}
              <p className="text-lg font-bold text-green-800">{mainPrice}</p>

              <motion.button
                type="button"
                className="w-full py-2 px-4 bg-green-700 text-white rounded hover:bg-green-800"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={async () => {
                  const stripe = await stripePromise;

                  const amount =
                    selectedProgram.investment?.inrPrice ||
                    selectedProgram.investment?.usdPrice ||
                    selectedProgram.price ||
                    0;

                  try {
                    fetch("http://localhost:3000/api/v1/form/create-checkout-session", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      amount: 100,        // ⚠️ Must be a number
                      programName: "Yoga" // ⚠️ Must be a string
                    }),
                  })
                  .then(res => res.json())
                  .then(data => {
                    window.location.href = data.url; // redirect to Stripe Checkout
                  })
                  .catch(err => console.error(err));

                    // else toast.error("Failed to start checkout");
                  } catch (err) {
                    toast.error("Payment failed");
                    console.error(err);
                  }
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
