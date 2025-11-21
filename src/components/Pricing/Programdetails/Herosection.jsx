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
  className="relative flex flex-col items-center justify-center min-h-[90vh] bg-[#DDFE47] overflow-hidden text-center px-6"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
>
  {/* Center Content */}
  <motion.div variants={fadeUp} className="relative z-[2] w-full max-w-[900px] space-y-[3vmin]">
    
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
      className="text-[#0F2E15]/80 font-medium text-[4vmin] sm:text-[3.5vmin] md:text-[1.2vmax] leading-[1.4]"
    >
      {programsData[params.id - 1]?.heroSection?.subtitle}
    </motion.p>

    <motion.button
      variants={fadeUp}
      transition={{ delay: 0.5 }}
      className="inline-block bg-white text-[#0F2E15] font-semibold py-[1.3vh] md:py-[2vh] px-[22vw] sm:px-[10vw] md:px-[4vw] rounded-[5vmax] hover:bg-[#f5f5f5] duration-300 border border-[#0F2E15]/10"
    >
      {programsData[params.id - 1]?.heroSection?.buttonText}
    </motion.button>

  </motion.div>

  {/* Star Icon (optional) */}
  <motion.img
    variants={fadeUp}
    transition={{ delay: 0.55, duration: 0.8 }}
    src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/start.png?updatedAt=1757792039803"
    alt="Star"
    className="absolute bottom-[5vh] right-[10vw] w-[6vmax] md:w-[4vmax] h-auto z-[3]"
  />

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
