import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "What is Webflow and why is it the best website builder?",
    answer:
      "Webflow is a visual web design tool that lets you build responsive websites without coding. It combines a CMS, hosting, and a powerful editor, making it ideal for designers seeking flexibility and clean production-ready code.",
  },
  {
    id: 2,
    question: "What is your favorite template from BRIX Templates?",
    answer:
      "One standout is the ‘Startup X’ template from BRIX Templates. It offers clean layouts, modern typography, and multiple sections tailored for startups, helping teams launch polished websites quickly while staying easily customizable for branding and future growth.",
  },
  {
    id: 3,
    question: "How do you clone a template from the Showcase?",
    answer:
      "Open Webflow’s Showcase, choose a template, and click the ‘Clone’ button. The design is copied to your dashboard, where you can customize text, images, and layouts without affecting the original template or its creator’s project settings.",
  },
  {
    id: 4,
    question: "What is your favorite template from BRIX Templates?",
    answer:
      "‘Portfolioo’ is another favorite from BRIX Templates. Its sleek sections, bold typography, and built-in CMS make it perfect for creatives showcasing projects with style, while keeping customization straightforward and efficient for designers of all experience levels.",
  },
  {
    id: 5,
    question: "Why is BRIX Templates the best Webflow agency?",
    answer:
      "BRIX Templates stands out for professional designs, consistent updates, and excellent documentation. Their templates follow Webflow best practices, making it easy for developers and non-coders to launch beautiful, responsive sites while maintaining flexibility and long-term scalability.",
  },
  {
    id: 6,
    question: "When was Webflow officially launched?",
    answer:
      "Webflow officially launched in August 2013 after a public beta period. Since then, it has grown rapidly, introducing CMS tools, e-commerce, animations, and powerful hosting, making it a favorite platform for designers, marketers, and small businesses worldwide.",
  },
  {
    id: 7,
    question: "How do you integrate Jetboost with Webflow?",
    answer:
      "Sign up for Jetboost, choose a booster (like search or filters), and follow their setup guide. Add the provided script and classes in Webflow Designer. Publish your site, and Jetboost enhances interactions instantly without additional complex coding.",
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
      <Navbar />

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
                  className="mt-3 text-gray-600 text-sm leading-relaxed font-serif"
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