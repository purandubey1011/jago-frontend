import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const sectionRef = useRef(null);

  const testimonials = [
    {
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      name: "Carolyn Willms",
      role: "Global Accountability Officer",
      text: "Lorem ipsum dolor sit amet consectetur. Massa sed dapibus adipiscing felis at. Integer at dictum ullamcorper magna nam eget. Elementum semper ultrices quam elementum dignissim etiam velit molestie diam. Netus arcu varius lectus dignissim mollis lorem pulvinar tortor arcu.",
    },
    {
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      name: "John Smith",
      role: "Chief Marketing Officer",
      text: "Praesent euismod, ipsum eget blandit dignissim, est leo faucibus ipsum, vitae suscipit libero nisl vel leo. Proin commodo bibendum metus, in eleifend nisi gravida ac.",
    },
    {
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      name: "Emily Johnson",
      role: "Product Designer",
      text: "Suspendisse potenti. Donec venenatis diam sed neque malesuada, vel facilisis eros vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada.",
    },
    {
      img: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
      name: "David Miller",
      role: "Lead Developer",
      text: "Aliquam erat volutpat. Integer nec dui vitae est bibendum venenatis. Cras ut odio eget elit volutpat tincidunt.",
    },
    {
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      name: "Sophia Lee",
      role: "UX Researcher",
      text: "Mauris congue, sapien eget volutpat feugiat, enim lorem luctus est, nec tempus nisl risus vitae ligula.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const { img, name, role, text } = testimonials[current];

  const thumbsToShow = Array.from({ length: 3 }, (_, i) =>
    testimonials[(current + i) % testimonials.length]
  );

  const handleNext = () => setCurrent((p) => (p + 1) % testimonials.length);
  const handleThumbClick = (i) => setCurrent(i);

  // Section entrance
const sectionVariants = {
  hidden: { opacity: 0, y: 80 }, // thoda neeche se aaye
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,       // lambi duration for clarity
      ease: [0.16, 1, 0.3, 1], // smooth ease (easeOutExpo like)
      staggerChildren: 0.25,   // ek ek karke aaye
    },
  },
};

// Heading fade
const headingVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 0.25,
    y: 0,
    transition: {
      duration: 1.6,
      ease: "easeOut",
      delay: 0.3, // thoda late aaye
    },
  },
};

// Image / text for slide change
const imgVariants = {
  enter: { opacity: 0, y: 60 },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: { opacity: 0, y: -40, transition: { duration: 0.6 } },
};

const textVariants = {
  enter: { opacity: 0, y: 30 },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2,
    },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};


  return (
    <motion.section
  ref={sectionRef}
  variants={sectionVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.9 }} // thoda kam amount = late trigger
  className="relative bg-white w-full py-12 px-4 md:py-20 md:px-20 overflow-hidden"
>

      {/* Watermark Heading */}
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute top-4 left-4 md:top-8 md:left-20 text-[2.3rem] md:text-[7rem] font-bold text-transparent leading-none select-none z-0"
        style={{ WebkitTextStroke: "1.5px rgba(0,0,0,0.40)" }}
      >
        Testimonials
      </motion.h1>

      {/* CONTENT */}
      <div className="mt-12 md:mt-20 flex flex-col md:flex-row md:gap-12 md:items-center md:justify-center">
        {/* IMAGE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={img}
            variants={imgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative mb-4">
              <div className="absolute top-0 left-0 w-[4px] md:w-[8px] h-full bg-lime-400" />
              <img
                src={img}
                alt={name}
                className="w-[83vw] h-[280px] md:w-[280px] md:h-[340px] object-cover rounded shadow"
              />
            </div>

            {/* Name/Role for desktop */}
            <div className="hidden md:block text-left">
              <h3 className="text-xl md:text-2xl font-bold">{name}</h3>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* TEXT */}
        <AnimatePresence mode="wait">
          <motion.p
            key={text}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="text-gray-800 leading-relaxed text-base md:text-lg max-w-full md:max-w-[470px] px-2 md:px-4 text-left relative z-10"
          >
            {text}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Name & Role for mobile */}
      <div className="md:hidden text-center mt-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
      </div>

      {/* Thumbnails & Button */}
      <div className="flex flex-row justify-end items-center gap-4 mt-8">
        <div className="flex justify-center md:justify-end gap-3">
          {thumbsToShow.map((t) => {
            const idx = testimonials.findIndex((x) => x.img === t.img);
            return (
              <button
                key={t.img}
                onClick={() => handleThumbClick(idx)}
                className={`overflow-hidden rounded focus:outline-none ${
                  idx === current ? "ring-4 ring-lime-400" : ""
                }`}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-[45px] h-[60px] md:w-[70px] md:h-[70px] object-cover"
                />
              </button>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          className="bg-lime-300 hover:bg-lime-400 text-black font-medium px-6 py-2 rounded-full transition"
        >
          Next →
        </button>
      </div>
    </motion.section>
  );
};

export default Testimonials;
