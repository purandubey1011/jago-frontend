import React from "react";
import { useParams } from "react-router-dom";
import * as FaIcons from "react-icons/fa"; // Dynamic React Icons
import { programsData } from "./programData";


const Awareness = () => {
  const { id } = useParams();
  const program = programsData[id - 1]; // selected program
  const awarenessSection = program.sections.find(
    (section) => section.id === "awareness"
  );

  return (
    <div className="bg-[#f8f9f0] w-full pt-16 ">
      {/* Heading */}
      <div className="max-w-[90vw] mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#23321c]">
          {awarenessSection.title}
        </h2>
        <p className="mt-2 text-[#2d3a1f] text-base md:text-lg">
          {awarenessSection.subtitle}
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 flex flex-col md:flex-row justify-between gap-8 max-w-[90vw] mx-auto">
        {awarenessSection?.cards?.map((card, idx) => {
          // Optional: mapping icons if you have icon strings in card data
          const IconComponent = card.icon
            ? FaIcons[card.icon]
            : null; // in case you add icons in sections later

          return (
            <div
              key={idx}
              className="flex-1 flex flex-col items-center text-center md:text-left md:items-start"
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
            </div>
          );
        })}
      </div>

      {/* Bottom Highlight */}
      <div className="mt-12 bg-[#f6ff33] py-5 w-full text-center px-4">
        <p className="italic font-medium text-base sm:text-lg md:text-xl text-[#23321c] leading-relaxed">
          {awarenessSection?.reflection}
        </p>
      </div>
    </div>
  );
};

export default Awareness;
