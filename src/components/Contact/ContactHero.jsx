import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import Navbar from "../Navbar";
import api from "../../utils/Axios";
import { motion } from "framer-motion"; 
const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await api.post("/api/v1/form/contact-us", formData);
      setSuccess(res.data.message);
      setFormData({ name: "", email: "", phoneNumber: "", subject: "", message: "" });
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
        delayChildren: 0.3, 
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const formItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const infoItemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full min-h-screen bg-green-950 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          className="text-center text-3xl md:text-4xl font-semibold leading-snug mb-14 font-serif"
          variants={itemVariants}
        >
          Sometimes, the hardest step is reaching out.
          <br />
          We promise to keep your words safe.
        </motion.h1>

        {/* Grid: Left form + Right info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            variants={containerVariants} 
          >
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5" variants={itemVariants}>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 focus:outline-none"
                required
                variants={formItemVariants}
              />
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 focus:outline-none"
                required
                variants={formItemVariants}
              />
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5" variants={itemVariants}>
              <motion.input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 focus:outline-none"
                required
                variants={formItemVariants}
              />
              <motion.input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 focus:outline-none"
                required
                variants={formItemVariants}
              />
            </motion.div>

            <motion.textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 focus:outline-none"
              required
              variants={formItemVariants}
            ></motion.textarea>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-[#EAFE45] text-green-950 font-semibold py-3 rounded-full hover:bg-[#b6c811] transition disabled:opacity-50"
              variants={formItemVariants}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {success && <p className="text-green-400 mt-3">{success}</p>}
            {error && <p className="text-red-400 mt-3">{error}</p>}
          </motion.form>

          {/* Right: Contact Info */}
          <motion.div
            className="space-y-8"
            variants={containerVariants} 
          >
            <motion.h3 className="text-xl font-semibold" variants={infoItemVariants}>
              More contact information
            </motion.h3>

            <div className="space-y-4">
              <motion.div className="flex items-center gap-4 p-4 border border-gray-400 rounded-xl bg-green-900/40" variants={infoItemVariants}>
                <FiMail className="text-yellow-300 text-2xl" />
                <div>
                  <h4 className="font-medium">Quick Contact</h4>
                  <p className="text-sm text-gray-300">talenttraverse@gmail.com</p>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-4 p-4 border border-gray-400 rounded-xl bg-green-900/40" variants={infoItemVariants}>
                <FiPhoneCall className="text-yellow-300 text-2xl" />
                <div>
                  <h4 className="font-medium">Give us a call</h4>
                  <p className="text-sm text-gray-300">+91 12457845780</p>
                </div>
              </motion.div>
            </div>

            <div>
              <motion.h4 className="mb-4 font-medium" variants={infoItemVariants}>
                Follow us on social media
              </motion.h4>
              <motion.div className="flex gap-5 text-lg" variants={containerVariants}>
                <motion.a href="#" className="hover:text-yellow-300" variants={infoItemVariants}><FaFacebookF /></motion.a>
                <motion.a href="#" className="hover:text-yellow-300" variants={infoItemVariants}><FaLinkedinIn /></motion.a>
                <motion.a href="#" className="hover:text-yellow-300" variants={infoItemVariants}><FaInstagram /></motion.a>
                <motion.a href="#" className="hover:text-yellow-300" variants={infoItemVariants}><FaYoutube /></motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactHero;