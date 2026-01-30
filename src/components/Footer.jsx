import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "backOut" },
    },
  };

  return (
    <motion.footer
      className="bg-[#0c2b16] text-gray-100 py-12 px-6 relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16">
        {/* === Left column === */}
        <motion.div
          variants={childVariants}
          className="w-full md:w-1/3 flex flex-col gap-2 md:gap-10"
        >
          <div>
            <div className="text-xl font-semibold mb-8 tracking-wide">
              <img
                src="https://ik.imagekit.io/b9tt0xvd7/Falverra/jogo/home/jago%20logo%20white.png?updatedAt=1764674312979"
                alt="JaGoCoach Logo"
                className="w-28"
              />
            </div>
            <p className="text-sm text-gray-300 mb-0">
              Coaching helps with Transformation.
            </p>
          </div>

          {/* ✅ Updated Footer Rights Section */}
          <div>
            <p className="text-xs text-gray-400">© 2025 JaGoCoach</p>
            <p className="text-xs text-gray-400 mt-1">
              All Rights Reserved |{" "}
              <Link to="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>{" "}
              |{" "}
              <Link to="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={childVariants}
          className="hidden md:block w-[.1vw] h-48 bg-white opacity-50"
        ></motion.div>

        {/* === Middle column === */}
        <motion.div
          variants={childVariants}
          className="w-full md:w-1/3 grid grid-cols-2 gap-x-10 gap-y-2 text-sm"
        >
          <div className="space-y-4">
            <motion.div variants={childVariants}>
              <Link to="/" className="hover:text-white block">
                Home
              </Link>
            </motion.div>
            <motion.div variants={childVariants}>
              <Link to="/pricing" className="hover:text-white block">
                Coaching Programs
              </Link>
            </motion.div>
            <motion.div variants={childVariants}>
              <Link to="/solution" className="hover:text-white block">
                Why JaGoCoach
              </Link>
            </motion.div>
            <motion.div variants={childVariants}>
              <Link to="/contact" className="hover:text-white block">
                Contact
              </Link>
            </motion.div>
          </div>
          <div className="space-y-4">
            <motion.div variants={childVariants}>
              <Link to="/testimonials" className="hover:text-white block">
                Success Stories
              </Link>
            </motion.div>
            <motion.div variants={childVariants}>
              <Link to="/resources" className="hover:text-white block">
                Free Resource
              </Link>
            </motion.div>
            <motion.div variants={childVariants}>
              <Link to="/faq" className="hover:text-white block">
                FAQ
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={childVariants}
          className="hidden md:block w-[.1vw] h-48 bg-white opacity-50"
        ></motion.div>

        {/* === Right column === */}
        <motion.div
          variants={childVariants}
          className="w-full md:w-1/3 flex flex-col gap-5"
        >
          {/* ✅ Removed phone number section */}
          <div>
            <h3 className="font-semibold text-sm mb-1">Email Us</h3>
            <p className="text-sm text-gray-300">contact@jagocoach.com</p>
          </div>

          <motion.div
            className="flex gap-3 pt-1"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.a
              href="https://facebook.com/jagocoach"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white rounded-full text-white bg-[#0c2b16] hover:bg-[#124121] transition"
              variants={socialIconVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebookF />
            </motion.a>

            <motion.a
              href="https://linkedin.com/company/jagocoach"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white rounded-full text-white bg-[#0c2b16] hover:bg-[#237f40] transition"
              variants={socialIconVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedinIn />
            </motion.a>

            <motion.a
              href="https://instagram.com/jagocoach"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white rounded-full text-white bg-[#0c2b16] hover:bg-[#237f40] transition"
              variants={socialIconVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              href="https://youtube.com/@jagocoach"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white rounded-full text-white bg-[#0c2b16] hover:bg-[#237f40] transition"
              variants={socialIconVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaYoutube />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* ✅ Bottom Center - Developed by Falverra */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[12px] text-gray-400">
        Developed by{" "}
        <a
          href="https://falverra.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition font-medium"
        >
          Falverra
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
