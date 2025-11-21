import React from "react";
import { useParams } from "react-router-dom";
import * as FaIcons from "react-icons/fa"; 
import { programsData } from "./programData";
import { motion } from "framer-motion";

const Awareness = () => {
  const { id } = useParams();
  const program = programsData[id - 1];
  const awarenessSection = program.sections.find(
    (section) => section.id === "awareness"
  );

  // Smooth fade-up
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "linear" }
    }
  };

  // Smooth staggered cards
  const cardUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "linear",
        delay: i * 0.15
      }
    })
  };

  return (
    <div className="bg-[#f8f9f0] w-full pt-16">

      {/* Heading */}
      <motion.div
        className="max-w-[90vw] mx-auto text-center md:text-left"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#23321c]">
          {awarenessSection.title}
        </h2>
        <p className="mt-2 text-[#2d3a1f] text-base md:text-lg">
          {awarenessSection.subtitle}
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-12 flex flex-col md:flex-row justify-between gap-8 max-w-[90vw] mx-auto">
        {awarenessSection?.cards?.map((card, idx) => {
          const IconComponent = card.icon ? FaIcons[card.icon] : null;

          return (
            <motion.div
              key={idx}
              className="flex-1 flex flex-col items-center text-center md:text-left md:items-start"
              variants={cardUp}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {IconComponent && (
                <div className="text-[#23321c] text-4xl md:text-3xl mb-4">
                  <IconComponent />
                </div>
              )}

              <h3 className="font-semibold text-lg sm:text-xl text-[#23321c] mb-2">
                {card?.title}
              </h3>

              <p className="text-[#2d3a1f] text-sm sm:text-base md:max-w-[22vw] leading-relaxed">
                {card?.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Highlight */}
      <motion.div
        className="mt-12 bg-[#f6ff33] py-5 w-full text-center px-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="italic font-medium text-base sm:text-lg md:text-xl text-[#23321c] leading-relaxed">
          {awarenessSection?.reflection}
        </p>
      </motion.div>
    </div>
  );
};

export default Awareness;
