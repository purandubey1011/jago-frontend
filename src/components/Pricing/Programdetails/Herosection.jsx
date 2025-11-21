import { useParams } from "react-router-dom";
import { programsData } from "./programData";
import { motion } from "framer-motion";

// Fade + Slide Up
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Slight Zoom for Image
const zoomIn = {
  hidden: { opacity: 0, scale: 1.04 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const Herosection = () => {
  let params = useParams();

  return (
    <motion.section
      className="relative flex items-start pt-30 md:pt-0 md:items-center justify-start min-h-[90vh] bg-[#DDFE47] overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left Content */}
      <motion.div
        variants={fadeUp}
        className="relative z-[2] w-[80vw] md:w-[45vw] ml-[8vw] text-center md:text-left space-y-[3vmin]"
      >
        <motion.h2
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="font-serif font-extrabold text-[#0F2E15] leading-[1.2] text-[3.5vmax]"
        >
          {programsData[params.id - 1]?.heroSection?.title}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          transition={{ delay: 0.25 }}
          className="text-[#0F2E15]/80 font-medium text-center md:text-left text-[4vmin] sm:text-[3.5vmin] md:text-[1.2vmax] leading-[1.4] md:max-w-[40vmax]"
        >
          {programsData[params.id - 1]?.heroSection?.subtitle}
        </motion.p>

        <motion.button
          variants={fadeUp}
          transition={{ delay: 0.5 }}
          className="inline-block mt-[2vmin] bg-white text-[#0F2E15] font-semibold py-[1.3vh] md:py-[2vh] px-[27vw] md:px-[3vw] rounded-[5vmax] hover:bg-[#f5f5f5] duration-300 border border-[#0F2E15]/10"
        >
          {programsData[params.id - 1]?.heroSection?.buttonText}
        </motion.button>
      </motion.div>

      {/* Star Icon */}
      <motion.img
        variants={fadeUp}
        transition={{ delay: 0.55, duration: 0.8 }}
        src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/start.png?updatedAt=1757792039803"
        alt="Star"
        className="absolute top-[53vh] md:top-[8vh] right-[22vw] md:right-[40vw] w-[6vmax] md:w-[4vmax] h-auto z-[3] object-contain"
      />

      {/* Right Image (man) */}
      <motion.div
        variants={zoomIn}
        transition={{ delay: 0.3 }}
        className="absolute bottom-[0vh] right-[12vw] md:right-[10vw] w-[53vmax] md:w-[55vmax] h-auto z-[1]"
      >
        <img
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/manimg.png?updatedAt=1759573907161"
          alt="Coach"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* Background Circle */}
      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.75 }}
        className="absolute -top-[10vh] right-[-35vw] opacity-30 z-[0] hidden md:block"
      >
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
      </motion.div>
    </motion.section>
  );
};

export default Herosection;
