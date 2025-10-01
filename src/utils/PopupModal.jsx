import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const PopupModal = () => {
  const [open, setOpen] = useState(false);

  // Show popup after 15s on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    },3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-lg w-[90%] max-w-3xl overflow-hidden flex flex-col sm:flex-row"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Left content */}
            <div className="p-6 sm:p-8 flex-1">
              <h4 className="text-sm text-gray-500 mb-2">
                Feeling Stuck or Unmotivated?
              </h4>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">
                Book a Free 20-Minute Session
              </h2>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                Take the first step towards unlocking your full potential.
                Connect with our expert motivational coach in a personalized
                20-minute session and discover strategies to achieve your goals
                and overcome obstacles.
              </p>
              <p className="text-gray-800 font-medium mb-6">
                Start your journey to motivation and success today:
              </p>
              <div className="flex gap-3">
                <Link
                  to="/contact#booking-calendar"
                  className="px-4 py-2 bg-purple-800 text-white rounded-md shadow hover:bg-purple-700"
                  onClick={() => setOpen(false)} // Close popup on click
                >
                  Book a Session
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow hover:bg-gray-300"
                >
                  No, Thanks
                </button>
              </div>
            </div>

            {/* Right image */}
            <div className="sm:w-1/2 hidden sm:block relative">
              {/* Overlay */}
              {/* <div className="absolute top-0 left-0 w-full h-full bg-[#0F2E15CC]"></div> */}

              {/* Image */}
              <img
                src="https://cdn.pixabay.com/photo/2017/12/17/07/37/girl-3023800_1280.jpg"
                alt="Callback"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;
