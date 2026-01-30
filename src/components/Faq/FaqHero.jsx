import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "Tell me more about the Chief Coach of JaGoCoach?",
    answer: `JaGoCoach is based in London, with associate offices in the United States, Canada, Dubai, and India. 
    The Chief Coach’s award-winning career spans Asia, the Middle East, and Europe, including work with leading US organisations. 
    His journey began at age 8, meditating at an ashram in the Himalayas. 
    He later developed the pioneering “Have Interviewers Ask You Questions You Want Them To” program, achieving a 99.9% success rate. 
    A Certified Life Coach, Master Reiki Healer, Breathwork Practitioner, Certified Hypnotherapist, MBA, and Mentalphysics luminary — 
    he integrates modern psychology, neuroscience, and ancient wisdom to help people find clarity, confidence, and purpose.`,
  },
  {
    id: 2,
    question: "Will I work with a certified Life Coach?",
    answer: `Yes. The Chief Coach is certified through the Jay Shetty Certification School as a Certified Life and Success Coach. 
    The Jay Shetty Certification School is accredited by the Association for Coaching and approved by OTHM. 
    He is also a Master Reiki Healer, Certified Hypnotherapist, and has a team of certified experts for specialized areas.`,
  },
  {
    id: 3,
    question: "What happens in a Discovery Session?",
    answer: `The Discovery Session is a complimentary, no-pressure call to explore your goals, motivations, and challenges. 
    You’ll learn about our coaching approach, ask questions, and see if our program aligns with your needs. 
    If there’s a fit, we’ll discuss the next steps and pricing. 
    It’s an open conversation designed to help both of us understand if we’re the right match before any commitment.`,
  },
  {
    id: 4,
    question: "What is the difference between Life Coaching and Mentoring?",
    answer: `Life Coaching, as practiced through the A.W.A.K.E.N. Model™, is a structured, client-led journey focused on self-awareness and growth. 
    Coaches guide through powerful questioning and accountability — empowering clients to find their own answers.  
    Mentoring, on the other hand, is advice-driven — sharing lessons from personal experience. 
    At JaGoCoach, we emphasize discovery over direction, helping clients awaken their own wisdom.`,
  },
  {
    id: 5,
    question: "Why should I choose JaGoCoach as my Life Coaching partner?",
    answer: `Transformation begins with connection. 
    JaGoCoach’s Chief Coach brings a rare mix of global experience, education, and energetic presence — blending science with spirituality. 
    Yet, the real power lies in resonance. 
    If our energy and philosophy align, we’ll co-create your growth journey. 
    If not, we’ll gladly help you find the coach who’s right for you. 
    Book a Discovery Session — no pressure, just possibility.`,
  },
  {
    id: 6,
    question: "Is my information kept confidential and private?",
    answer: `Yes. All client information is protected under the principles of confidentiality set forth in the Association for Coaching Code of Ethics. 
    No details are disclosed without written consent. 
    However, note that coaching isn’t a legally privileged relationship like therapy or law. 
    Your data is stored securely, and your privacy is always respected.`,
  },
];

const FaqHero = () => {
  const [openId, setOpenId] = React.useState(1);

  // Framer Motion Variants
  const heroHeaderVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } },
  };

  const faqItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const iconRotateVariants = {
    open: { rotate: 0 },
    closed: { rotate: -180 }, 
  };

  return (
    <section className="bg-white">
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* === HERO HEADER === */}
      <motion.div
        className="bg-[#0F2E15] text-white py-36 px-6 md:px-12 text-center relative"
        variants={heroHeaderVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl mx-auto">
          <motion.span
            className="text-lime-300 text-sm font-medium tracking-wide"
            variants={textVariants}
          >
            ✨ FAQ
          </motion.span>
          <motion.h1
            className="mt-4 text-4xl md:text-5xl font-bold leading-snug font-serif"
            variants={textVariants}
          >
            Frequently Asked Questions
          </motion.h1>
        </div>
      </motion.div>

      {/* === FAQ LIST === */}
      <motion.div
        className="max-w-3xl mx-auto px-6 md:px-0 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.05 }} 
      >
        {faqData.map((faq) => (
          <motion.div
            key={faq.id}
            className="border-b border-gray-200 py-5 cursor-pointer"
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            variants={faqItemVariants}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium text-gray-900 font-serif">
                {faq.question}
              </h3>
              <motion.div
                initial={false} 
                animate={openId === faq.id ? "open" : "closed"}
                variants={iconRotateVariants}
              >
                {openId === faq.id ? (
                  <FiMinus className="text-gray-700 text-xl" />
                ) : (
                  <FiPlus className="text-gray-700 text-xl" />
                )}
              </motion.div>
            </div>
            <AnimatePresence initial={false}> 
              {openId === faq.id && faq.answer && (
                <motion.p
                  className="mt-3 text-gray-600 text-sm md:text-[1.2vw] leading-relaxed font-serif"
                  variants={answerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit" 
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FaqHero;