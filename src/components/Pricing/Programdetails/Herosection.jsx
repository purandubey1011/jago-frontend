import React from 'react'

const Herosection = () => {
  return (
    <div>
      {/* hero section */}
     <section className="relative flex items-start pt-30 md:pt-0 md:items-center justify-start min-h-[90vh] bg-[#DDFE47] overflow-hidden">
      {/* Left Content */}
      <div className="relative z-[2] w-[80vw] md:w-[45vw] ml-[8vw] text-center md:text-left space-y-[3vmin]">
        <h2 className="font-serif font-extrabold text-[#0F2E15] leading-[1.2] text-[3.5vmax]">
          The JaGoCoach <br className="hidden sm:block" /> Signature: 12-Week{" "}
          <br className="hidden sm:block" /> Coaching Program
        </h2>

      <p className="text-[#0F2E15]/80 font-medium text-center md:text-left text-[4vmin] sm:text-[3.5vmin] md:text-[1.2vmax] leading-[1.4] md:max-w-[40vmax]">
  A journey of clarity, vitality, and mental recalibration.
</p>


        <button className="inline-block mt-[2vmin] bg-white text-[#0F2E15] font-semibold py-[1.5vh] md:py-[2vh] px-[10vw] md:px-[3vw] rounded-[5vmax] hover:bg-[#f5f5f5] transition-all duration-300 border border-[#0F2E15]/10">
          Enroll Now
        </button>
      </div>

    {/* star */}
     <img
  src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/start.png?updatedAt=1757792039803"
  alt="Star"
  className="absolute top-[50vh] md:top-[8vh] right-[25vw] md:right-[40vw] w-[6vmax] md:w-[4vmax] h-auto z-[3] object-contain"
/>

      {/* Right Image (absolute position, bottom-right corner) */}
      <div className="absolute bottom-[0vh] right-[10vw] w-[55vmax] h-auto z-[1]">
        <img
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/manimg.png?updatedAt=1759573907161"
          alt="Coach"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Background Circle */}
      <div className="absolute -top-[10vh] right-[-35vw] opacity-30 z-[0] hidden md:block">
        <svg
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[50vw] h-auto"
        >
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="#fff"
            strokeWidth="5vmin"
          />
        </svg>
      </div>
    </section>
    </div>
  )
}

export default Herosection
