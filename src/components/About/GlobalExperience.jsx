import { motion } from "framer-motion";
import { PiSparkleFill } from "react-icons/pi";

const GlobalExperienceSection = () => {
  const mapVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const popupVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-16 bg-white">
      <div className="relative w-full max-w-6xl px-4 md:px-0  mx-auto">
     <div className="relative w-full overflow-hidden h-[50vh] sm:h-[60vh] md:h-[80vh] flex justify-center items-center">
  <motion.img
    src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/map.png?updatedAt=1757482092107"
    alt="World map"
    className="ge-map object-contain w-[90vw] h-full"
    variants={mapVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.4 }}
  />
</div>

        {/* Popup 1 */}
       <motion.div
  className="ge-popup absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
             bg-[#f9fbea]/50 md:bg-[#f9fbea]/80 rounded-lg shadow-lg p-4 sm:p-6 w-72 sm:w-[32rem] text-left"
  variants={popupVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ delay: 0.2 }}
>
  <div className="flex flex-col items-start space-x-2">
    <PiSparkleFill className="text-green-900 mt-1 text-lg" />
    <div>
      <h3 className="font-semibold text-green-900 text-base sm:text-lg mb-2">
        What sets JaGoCoach apart?
      </h3>
      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
         JaGoCoach takes a bespoke approach, blending timeless insights — from MentalPhysics, Certified Coaching, Breathwork, Reiki, and proven Psychological Frameworks — into modern clarity for you. <br /> <br />
JaGoCoach’s tools bespoke and simple, and impact is lasting. Just real, confidentiality assured conversations, practical shifts, and emotional precision. This is coaching for humans who want to rise — not rush. Reflect — not retreat. And design a life that feels true. Real talk. Simple practices. Big shifts. This isn’t therapy. It’s ignition — with a spark of soul and a dash of strategy.
      </p>
    </div>
  </div>
</motion.div>


        {/* Popup 2 */}
        {/* <motion.div
          className="ge-popup absolute top-[32%] md:top-[20%] right-[5%] md:right-[5%] bg-[#EAFE45] text-left rounded-lg shadow-lg p-3 sm:p-4 w-56 sm:w-80"
          variants={popupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col items-start space-x-2">
            <PiSparkleFill className="text-green-900 mt-1" />
            <div>
              <h3 className="font-semibold text-green-900 text-xs sm:text-base">
                A Journey Across Borders
              </h3>
              <p className="text-gray-700 text-[2.3vw] sm:text-sm mt-1">
                From the UK to Europe to India — decades of people management
                and leadership excellence.
              </p>
            </div>
          </div>
        </motion.div> */}

        {/* Popup 3 */}
        {/* <motion.div
          className="ge-popup absolute -bottom-[5%] left-[20%] md:bottom-[15%] md:left-[35%] bg-[#EAFE45] text-left rounded-lg shadow-lg p-3 sm:p-4 w-60 sm:w-80"
          variants={popupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col items-start space-x-2">
            <PiSparkleFill className="text-green-900 mt-1" />
            <div>
              <h3 className="font-semibold text-green-900 text-xs sm:text-base">
                Recognized Leadership, Global Impact
              </h3>
              <p className="text-gray-700 text-[2.3vw] sm:text-sm mt-1">
                Award-winning expertise rooted in life sciences, mental
                physics, and human development.
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default GlobalExperienceSection;