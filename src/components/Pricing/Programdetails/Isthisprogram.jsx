import React from "react";
import {
  FaLightbulb,
  FaUserTie,
  FaHome,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

const Isthisprogram = () => {
  const cards = [
    {
      icon: <FaLightbulb className="text-[#0F2E15] text-3xl sm:text-4xl" />,
      title: "Retired individuals seeking renewal",
    },
    {
      icon: <FaUserTie className="text-[#0F2E15] text-3xl sm:text-4xl" />,
      title: "Visionary CEOs & senior leaders",
    },
    {
      icon: <FaHome className="text-[#0F2E15] text-3xl sm:text-4xl" />,
      title: "Devoted home-makers & caregivers",
    },
    {
      icon: <FaBriefcase className="text-[#0F2E15] text-3xl sm:text-4xl" />,
      title: "Purpose-driven professionals & entrepreneurs",
    },
    {
      icon: <FaGraduationCap className="text-[#0F2E15] text-3xl sm:text-4xl" />,
      title: "Curious students & lifelong learners",
    },
  ];

  return (
    <section className="w-full bg-white flex flex-col items-center justify-center py-16 px-6 sm:px-10 lg:px-20">
      {/* Heading */}
      <div className="w-full max-w-6xl mb-12 text-center md:text-left">
        <h2 className="text-[#0F2E15] font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Is This Program For You?
        </h2>
        <p className="text-[#4A4A4A] text-base sm:text-lg mt-2">
          Designed for individuals from all walks of life.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white border border-[#E5EDE4] rounded-xl px-6 py-8 flex flex-col items-start justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div className="mb-4">{card.icon}</div>
            <p className="text-[#0F2E15] text-sm sm:text-base font-medium leading-snug">
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Isthisprogram;
