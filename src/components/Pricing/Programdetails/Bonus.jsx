import React from 'react';

// --- Custom Inline SVG for Checkmark (Used in 'Bonus' tag) ---
const SVGCheck = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const Bonus = () => {
  const features = [
    'Breathwork integration',
    'Meditative Techniques',
    'Persona mapping',
    'Companion check-ins via voice note or Slack',
  ];

  return (
    <div className="w-full bg-[#133216] py-10 px-4 sm:px-6 md:px-16 font-['Inter',_sans-serif]">
      <div className="max-w-6xl mx-auto bg-[#EAFE45] rounded-2xl py-10 md:py-20 px-3 md:px-16 relative overflow-hidden flex flex-col md:flex-row items-center md:justify-around">
        {/* Inner Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 md:gap-x-12 w-full">
          {/* Left Column */}
          <div className="md:col-span-7 flex flex-col space-y-1 md:space-y-0">
            {/* Bonus Tag */}
            <div className="flex items-center space-x-2 w-fit px-3 py-1 rounded-full bg-black/10 mb-2 border-2 border-black/50">
              <SVGCheck className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-semibold text-gray-700">Bonus</span>
            </div>

            {/* Main Header */}
            <h2
              className="text-3xl sm:text-4xl font-serif font-extrabold text-black leading-tight pt-2"
              style={{ letterSpacing: '-0.02em' }}
            >
              Who This Course Is For
            </h2>

            {/* Subheader */}
            <p className="text-sm sm:text-md text-gray-700 font-medium opacity-90 mb-4">
              Who Should Attend the PMP Course Online
            </p>

          <div className='flex md:flex-col md:gap-1 gap-4'>
            {/* CTA Button Section */}
            <div className="pt-1">
             <div
  className="px-4 sm:px-6 py-2 w-fit rounded-full bg-white flex flex-col sm:flex-row items-baseline sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 transition duration-300 hover:scale-[1.01] cursor-pointer"
  style={{
    boxShadow: '-10px 10px 15px rgba(128,128,128,0.4)',
  }}
>
  <span className="text-sm sm:text-lg font-semibold text-gray-800">
    Enroll Now at $3,600
  </span>
  <div className="flex gap-2 text-xs leading-none">
    <span className="text-gray-700 opacity-70">25% off</span>
    <span className="line-through text-gray-500 opacity-50">$5,000</span>
  </div>
</div>

            </div>

            {/* Plan Text */}
            <div className="pt-4">
              <p className="text-xs sm:text-sm text-gray-600 opacity-80 font-medium leading-2.5">Plan</p>
              <p className="text-xs sm:text-sm text-gray-800 font-medium">*3*1200</p>
            </div>

            

            </div>
          </div>

          {/* Right Column: List */}
          <div className="md:col-span-5 flex flex-col justify-center mt-2 md:mt-0">
            <ul className="space-y-3 md:space-y-4 text-sm sm:text-base pl-0 list-none">
              {features.map((item, index) => (
                <li key={index} className="flex gap-2 md:gap-3 items-center text-black">
                  <span className="text-lg md:text-xl leading-none mr-2">•</span>
                  <span className="font-bold text-[3.5vw] sm:text-[1vw] md:text-[1vw] ">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Bonus;
