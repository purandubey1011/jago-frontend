import React from "react";
import { useParams } from "react-router-dom";
import { programsData } from "./programData";

// --- Custom Inline SVG Icons ---
const SVGClipboardList = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M9 12h6" />
    <path d="M9 16h6" />
  </svg>
);

const SVGCheckSquare = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const SVGLink = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const SVGMaximize = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M8 3H5a2 2 0 0 0-2 2v3" />
    <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
    <path d="M3 16v3a2 2 0 0 0 2 2h3" />
    <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
  </svg>
);

// --- Colors ---
const PRIMARY_COLOR = "text-[#385348]";
const PATH_STROKE_COLOR = "#c8d1c7";
const ACCENT_YELLOW_COLOR = "bg-[#eeff41]";

// Background Path SVG
const BackgroundPath = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
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

const Change = () => {
  const { id } = useParams();
  const program = programsData[id - 1];
  const changeSection = program.sections.find(
    (section) => section.id === "change" || section.id === "respond"
  );

  // Match icons to cards dynamically
  const icons = [SVGClipboardList, SVGCheckSquare, SVGLink, SVGMaximize];

  return (
    <div className="py-20 bg-white font-['Inter',_sans-serif] relative overflow-hidden">
      <BackgroundPath />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <header className="mb-12 text-center sm:text-left">
          <h1
            className={`text-3xl sm:text-5xl lg:text-[2.5vw] font-serif font-extrabold ${PRIMARY_COLOR} mb-3`}
            style={{ letterSpacing: "-0.02em" }}
          >
            {changeSection.title}
          </h1>
          <p
            className={`text-base sm:text-lg ${PRIMARY_COLOR} font-normal opacity-80 max-w-full sm:max-w-[70%] lg:max-w-[40%] mx-auto sm:mx-0`}
          >
            {changeSection.subtitle}
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {changeSection.cards.map((card, index) => {
            const IconComponent = icons[index] || SVGClipboardList;
            return (
              <div
                key={index}
                className="flex flex-col space-y-3 text-center sm:text-left"
              >
                <div
                  className={`p-1 w-fit mx-auto sm:mx-0 rounded-full ${PRIMARY_COLOR} mb-3`}
                >
                  <IconComponent className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-black opacity-80">
                  {card.title}
                </h2>
                <p
                  className={`text-sm sm:text-base ${PRIMARY_COLOR} opacity-90 leading-relaxed`}
                >
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reflection Footer */}
      <div
        className={`mt-16 sm:mt-20 w-full ${ACCENT_YELLOW_COLOR} py-6 px-4 sm:px-8 lg:px-16`}
      >
        <p className="max-w-4xl mx-auto text-base sm:text-xl md:text-2xl font-medium text-black text-center italic">
          {changeSection.reflection}
        </p>
      </div>
    </div>
  );
};

export default Change;
