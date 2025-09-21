import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const sectionRef = useRef(null);

  // Testimonials data
  const testimonials = [
    {
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      name: "Carolyn Willms",
      role: "Global Accountability Officer",
      text:
        "Lorem ipsum dolor sit amet consectetur. Massa sed dapibus adipiscing felis at. Integer at dictum ullamcorper magna nam eget. Elementum semper ultrices quam elementum dignissim etiam velit molestie diam. Netus arcu varius lectus dignissim mollis lorem pulvinar tortor arcu.",
    },
    {
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      name: "John Smith",
      role: "Chief Marketing Officer",
      text:
        "Praesent euismod, ipsum eget blandit dignissim, est leo faucibus ipsum, vitae suscipit libero nisl vel leo. Proin commodo bibendum metus, in eleifend nisi gravida ac.",
    },
    {
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      name: "Emily Johnson",
      role: "Product Designer",
      text:
        "Suspendisse potenti. Donec venenatis diam sed neque malesuada, vel facilisis eros vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada.",
    },
    {
      img: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
      name: "David Miller",
      role: "Lead Developer",
      text:
        "Aliquam erat volutpat. Integer nec dui vitae est bibendum venenatis. Cras ut odio eget elit volutpat tincidunt.",
    },
    {
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      name: "Sophia Lee",
      role: "UX Researcher",
      text:
        "Mauris congue, sapien eget volutpat feugiat, enim lorem luctus est, nec tempus nisl risus vitae ligula.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handleThumbClick = (index) => setCurrent(index);

  const { img, name, role, text } = testimonials[current];

  // Always return 3 thumbnails wrapping around
  const thumbsToShow = Array.from({ length: 3 }, (_, i) =>
    testimonials[(current + i) % testimonials.length]
  );

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const headingVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const contentVariants = {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.8, ease: "easeIn" } },
  };

  const imageVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.8, ease: "easeIn" } },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative w-full bg-white py-16 px-4 md:py-20 md:px-20 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.9, once: true }}
    >
      {/* Watermark Heading */}
      <motion.h1
        className="absolute top-4 left-4 md:top-8 md:left-20 text-[2.5rem] md:text-[7rem] font-bold text-transparent leading-none select-none z-0"
        style={{ WebkitTextStroke: "1px rgba(0,0,0,0.15)" }}
        variants={headingVariants}
      >
        Testimonials
      </motion.h1>

      {/* Main content */}
      <div className="relative mt-16 md:mt-20 flex flex-col md:flex-row md:items-center md:justify-center md:gap-12">
        {/* Left Column: Image + Name */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={img}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative mb-4 md:mb-0">
              <div className="absolute top-0 left-0 w-[4px] md:w-[6px] h-full bg-lime-400" />
              <img
                src={img}
                alt={name}
                className="w-[220px] h-[280px] md:w-[280px] md:h-[340px] object-cover"
              />
            </div>
            <div className="text-center md:text-left mt-2 md:mt-4">
              <h3 className="text-xl md:text-2xl font-bold text-black">{name}</h3>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right Column: Text */}
        <div className="relative max-w-full md:max-w-[470px]">
          <span className="absolute -top-4 left-2 md:-top-6 md:left-0 text-[4rem] md:text-[6rem] text-lime-300/30 select-none">
            “
          </span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={text}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-gray-800 leading-relaxed text-base md:text-lg relative z-10 px-2 md:px-4 text-center md:text-left"
            >
              {text}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom thumbnails + button */}
      <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-4 mt-10">
        {/* Thumbnails */}
        <div className="flex justify-center md:justify-end gap-2">
          {thumbsToShow.map((t) => {
            const realIndex = testimonials.findIndex((x) => x.img === t.img);
            return (
              <button
                key={t.img}
                onClick={() => handleThumbClick(realIndex)}
                className={`relative flex-shrink-0 focus:outline-none rounded overflow-hidden ${
                  realIndex === current ? "ring-4 ring-lime-400" : ""
                }`}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] object-cover"
                />
              </button>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          className="bg-lime-300 hover:bg-lime-400 transition text-black font-medium px-5 md:px-6 py-2 rounded-full"
        >
          Next →
        </button>
      </div>
    </motion.div>
  );
};

export default Testimonials;
