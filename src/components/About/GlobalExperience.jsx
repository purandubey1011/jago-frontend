import { motion } from "framer-motion";
import { PiSparkleFill } from "react-icons/pi";

const GlobalExperienceSection = () => {
  const mapVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const popupVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 bg-white">
      <div className="relative w-full max-w-6xl px-4 md:px-0 md:ml-24 mx-auto">
        <motion.img
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/map.png?updatedAt=1757482092107"
          alt="World map"
          className="ge-map w-full h-64 sm:h-80 md:h-[80vh] object-contain mx-auto"
          variants={mapVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.4 }}
        />

        {/* Popup 1 */}
        <motion.div
          className="ge-popup absolute top-[-6%] left-[8%] md:top-[5%] md:left-[10%] bg-[#EAFE45] text-left rounded-lg shadow-lg p-3 sm:p-4 w-56 sm:w-80"
          variants={popupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col items-start space-x-2">
            <PiSparkleFill className="text-green-900 mt-1" />
            <div>
              <h3 className="font-semibold text-green-900 text-xs sm:text-base">
                Global Experience That Inspires
              </h3>
              <p className="text-gray-700 text-[2.3vw] sm:text-sm mt-1">
                Over 25 years in people management and development across UK,
                Europe, India.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Popup 2 */}
        <motion.div
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
        </motion.div>

        {/* Popup 3 */}
        <motion.div
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
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalExperienceSection;