import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion"; 

const QuickContact = () => {
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "backOut" } },
  };

  return (
    <motion.section
      className="w-full bg-[#eff2de] text-green-950 py-16 px-6 md:px-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" 
      viewport={{  amount: 0.3 }} 
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-12"
          variants={itemVariants}
        >
          <span className="italic"> Quick Contact</span>{" "}
          <span className="font-bold">Now</span>
        </motion.h2>

        {/* 3 columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12"
          variants={containerVariants} 
        >
          {/* Address */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-2">
              <FiMapPin className="text-xl" />
              <h4 className="font-medium md:text-[1.2vw]">Address</h4>
            </div>
            <p className="text-sm md:text-md">UK</p>
          </motion.div>

          {/* Contact details */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-2">
              <FiPhoneCall className="text-xl" />
              <h4 className="font-medium md:text-[1.2vw]">Contact Details</h4>
            </div>
            <p className="text-sm md:text-[1vw]">
              Booking Inquiries:{" "}
              <a href="tel:+9711234567" className="underline">
                +971 123 4567
              </a>
            </p>
            <p className="text-sm md:text-[1vw]">
              Support:{" "}
              <a href="tel:+9719876543" className="underline ">
                +971 987 6543
              </a>
            </p>
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-2">
              <FiMail className="text-xl" />
              <h4 className="font-medium md:text-[1.2vw]">Email Us</h4>
            </div>
            <p className="text-sm md:text-[1vw]">
              General Inquiries:{" "}
              <a href="mailto:support@jagocoach.com" className="underline">
                support@jagocoach.com
              </a>
            </p>
          </motion.div>
        </motion.div>

        {/* Follow us */}
        <motion.div className="mt-4" variants={containerVariants}>
          <motion.h4 className="mb-3 font-medium" variants={itemVariants}>
            Follow us :
          </motion.h4>
          <motion.div className="flex gap-5 text-lg" variants={containerVariants}>
            <motion.a href="#" className="hover:text-green-700" variants={socialIconVariants}>
              <FaFacebookF />
            </motion.a>
            <motion.a href="#" className="hover:text-green-700" variants={socialIconVariants}>
              <FaInstagram />
            </motion.a>
            <motion.a href="#" className="hover:text-green-700" variants={socialIconVariants}>
              <FaLinkedinIn />
            </motion.a>
          </motion.div>
          <motion.p className="text-xs mt-4 text-green-800" variants={itemVariants}>
            *We respect your privacy. No spam, ever. Your details are safe with
            us.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default QuickContact;