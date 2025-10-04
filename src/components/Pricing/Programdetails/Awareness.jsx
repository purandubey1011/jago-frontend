import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiFile } from "react-icons/bi";
import { TbTarget } from "react-icons/tb";

const Awareness = () => {
  return (
    <div className="bg-[#f8f9f0] w-full pt-16 ">
      {/* Heading */}
      <div className="max-w-[90vw] mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#23321c]">
          AWARENESS
        </h2>
        <p className="mt-2 text-[#2d3a1f] text-base md:text-lg">
          Build mindfulness, self-insight, and absolute emotional clarity.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 flex flex-col md:flex-row justify-between gap-8 max-w-[90vw] mx-auto">
        {/* Awareness Card */}
        <div className="flex-1 flex flex-col items-center text-center md:text-left md:items-start">
          <div className="text-[#23321c] text-4xl md:text-3xl mb-4">
            <TbTarget />
          </div>
          <h3 className="font-semibold text-lg sm:text-xl text-[#23321c] mb-2">
            Awareness
          </h3>
          <p className="text-[#2d3a1f] text-sm sm:text-base md:max-w-[22vw] leading-relaxed">
            Begin with mindfulness. Cultivate self-insight through foundational
            health rituals — sleep, hydration, nourishment — to support clarity
            and acceptance.
          </p>
        </div>

        {/* Audit Card */}
        <div className="flex-1 flex flex-col items-center text-center md:text-left md:items-start">
          <div className="text-[#23321c] text-4xl md:text-3xl mb-4">
            <BiFile />
          </div>
          <h3 className="font-semibold text-lg sm:text-xl text-[#23321c] mb-2">
            Audit
          </h3>
          <p className="text-[#2d3a1f] text-sm sm:text-base md:max-w-[22vw] leading-relaxed">
            Explore your values, priorities, and emotional patterns. Health,
            movement, and sleep become tools for deeper self-understanding.
          </p>
        </div>

        {/* Accountability Card */}
        <div className="flex-1 flex flex-col items-center text-center md:text-left md:items-start">
          <div className="text-[#23321c] text-4xl md:text-3xl mb-4">
            <AiOutlineUser />
          </div>
          <h3 className="font-semibold text-lg sm:text-xl text-[#23321c] mb-2">
            Accountability
          </h3>
          <p className="text-[#2d3a1f] text-sm sm:text-base md:max-w-[22vw] leading-relaxed">
            Empowerment begins with responsibility. We’ll design rituals and
            routines that support your energy, mood, and commitment to change.
          </p>
        </div>
      </div>

      {/* Bottom Highlight */}
      <div className="mt-12 bg-[#f6ff33] py-5 w-full text-center px-4">
        <p className="italic font-medium text-base sm:text-lg md:text-xl text-[#23321c] leading-relaxed">
          Where does your energy leak — and what does your body need to feel
          safe, strong, and supported?
        </p>
      </div>
    </div>
  );
};

export default Awareness;
