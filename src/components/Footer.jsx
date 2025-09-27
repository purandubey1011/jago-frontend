import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "backOut" } },
  };

  return (
    <motion.footer
      className="bg-[#0c2b16] text-gray-100 py-12 px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{  amount: 0.5, once: true }} // Trigger when 30% of the footer is in view
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16">
        {/* === Left column === */}
        <motion.div variants={childVariants} className="w-full md:w-1/3 flex flex-col gap-2 md:gap-10">
          <div>
            <h2 className="text-xl font-semibold mb-2 tracking-wide">JaGoCoach™</h2>
            <p className="text-sm text-gray-300 mb-6">
              Transformation helps with Coaching.
            </p>
          </div>
          <p className="text-xs text-gray-400">© 2025 JaGoCoach</p>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={childVariants}
          className="hidden md:block w-[.1vw] h-48 bg-white opacity-50"
        ></motion.div>

        {/* === Middle column === */}
        <motion.div variants={childVariants} className="w-full md:w-1/3 grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
                    <div className="space-y-4">
            <motion.div variants={childVariants}>
              <Link to="/" className="hover:text-white block">Home</Link>
            </motion.div>
            <motion.div variants={childVariants}>
              <Link to="/pricing" className="hover:text-white block">Coaching Programs</Link>
            </motion.div>
            <motion.div variants={childVariants}>
              <Link to="/solution" className="hover:text-white block">Why JaGoCoach</Link>
            </motion.div>
            <motion.div variants={childVariants}>
              <Link to="/contact" className="hover:text-white block">Contact</Link>
            </motion.div>
          </div>
          <div className="space-y-4">
            <motion.div variants={childVariants}>
              <Link to="/testimonials" className="hover:text-white block">Success Stories</Link>
            </motion.div>
            <motion.div variants={childVariants}>
              <Link to="/resources" className="hover:text-white block">Free Resource</Link>
            </motion.div>
            <motion.div variants={childVariants}>
              <Link to="/faq" className="hover:text-white block">FAQ</Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={childVariants}
          className="hidden md:block w-[.1vw] h-48 bg-white opacity-50"
        ></motion.div>

        {/* === Right column === */}
        <motion.div variants={childVariants} className="w-full md:w-1/3 flex flex-col gap-5">
          <div>
            <h3 className="font-semibold text-sm mb-1">Contact Us</h3>
            <p className="text-sm text-gray-300">+91 08041015439</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-1">Email Us</h3>
            <p className="text-sm text-gray-300">hello@example.com</p>
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
              className="p-2 border border-lime-400 rounded-full text-lime-400 hover:bg-lime-400 hover:text-[#0c2b16] transition"
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
              className="p-2 border border-lime-400 rounded-full text-lime-400 hover:bg-lime-400 hover:text-[#0c2b16] transition"
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
              className="p-2 border border-lime-400 rounded-full text-lime-400 hover:bg-lime-400 hover:text-[#0c2b16] transition"
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
              className="p-2 border border-lime-400 rounded-full text-lime-400 hover:bg-lime-400 hover:text-[#0c2b16] transition"
              variants={socialIconVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaYoutube />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;