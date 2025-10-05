import React from "react";
import { useParams } from "react-router-dom";
import * as FiIcons from "react-icons/fi";
import { programsData } from "./programData";

const PATH_STROKE_COLOR = "#c8d1c7";

const BackgroundPath = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
    viewBox="0 0 1400 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <path
      d="M 100 250 C 300 100, 600 400, 900 200 C 1100 100, 1300 350, 1350 450"
      stroke={PATH_STROKE_COLOR}
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="5 15"
    />
    <path
      d="M 400 500 C 550 450, 750 600, 950 450"
      stroke={PATH_STROKE_COLOR}
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="5 15"
    />
  </svg>
);

const Goals = () => {
  const { id } = useParams();
  const program = programsData[id - 1]; // current program
  const beliefSection = program.sections.find(
    (section) => section.id === "beliefs" || section.id === "audit" || section.id === "reset"
  );

  // Optional: map icon names if you later add them in JSON
  const icons = [FiIcons.FiTarget, FiIcons.FiCheckSquare, FiIcons.FiZap];

  return (
    <div>
      <div className="min-h-[50vh] py-16 px-4 md:px-8 bg-[#f4f6f3] font-['Inter',_sans-serif] relative overflow-hidden">
        <BackgroundPath />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <header className="mb-12 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-[3vw] font-serif font-bold text-black mb-3">
              {beliefSection.title}
            </h1>
            <p className="text-base sm:text-lg md:text-[1.1vw] text-gray-700 font-medium">
              {beliefSection.subtitle}
            </p>
          </header>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8 lg:gap-16">
            {beliefSection.cards.map((card, index) => {
              const IconComponent = icons[index] || FiIcons.FiTarget; // default fallback
              return (
                <div
                  key={index}
                  className="flex flex-col items-center md:items-start text-center md:text-left space-y-3"
                >
                  {/* Icon */}
                  <div className="text-black mb-2">
                    <IconComponent className="w-10 h-10 md:w-12 md:h-12" />
                  </div>

                  {/* Title */}
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                    {card.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed max-w-full md:max-w-[20vw]">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Highlight */}
      <div className="bg-[#0F2E15] py-6 px-4 text-center">
        <p className="italic font-medium text-base sm:text-lg md:text-xl text-[#EAFE45] leading-relaxed">
          {beliefSection.reflection}
        </p>
      </div>
    </div>
  );
};

export default Goals;
