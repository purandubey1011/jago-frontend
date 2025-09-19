import React from "react";
import { motion } from "framer-motion";
import { PiSparkleFill } from "react-icons/pi";

const Credentials = () => {
  const credentials = [
    {
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
      text: "Certified Life Coach.",
    },
    {
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      text: "Master Reiki Healer.",
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/05/31/11/17/office-2360063_1280.jpg",
      text: "Advanced Student of Mental Physics.",
    },
    {
      img: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=80",
      text: "MBA, Master’s in Management, Bachelor’s in Tourism/Hotel.",
    },
  ];

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const sparkleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      className="relative bg-[#072a19] py-16 px-4 sm:px-6 text-white"
    >
      {/* Sparkle */}
      <motion.div
        className="absolute top-6 right-8 text-lime-300 text-3xl"
        variants={sparkleVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 0.5 }}
      >
        <img src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/whitestar.png?updatedAt=1757795085083" alt="" />
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl text-center mb-10 font-serif"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
      >
        Credentials
      </motion.h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row md:justify-center md:items-stretch gap-6">
        {credentials.map((item, idx) => (
          <motion.div
            key={idx}
            className="w-full md:w-64 rounded-xl border border-lime-600 overflow-hidden flex flex-col bg-transparent"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ delay: idx * 0.15 + 0.2 }} 
          >
            <div className="p-3">
              <img
                src={item.img}
                alt={item.text}
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
            <div className="px-4 pb-6 pt-2">
              <p className="text-white text-sm leading-snug">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Credentials;