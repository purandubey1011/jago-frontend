import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi"; // Cross icon

const PopupModal = () => {
  const [open, setOpen] = useState(false);

  // Show popup after 15s on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 15000);

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
            className="bg-white rounded-2xl shadow-lg w-[90%] max-w-3xl overflow-hidden flex flex-col sm:flex-row relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Close Icon Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-100 transition flex items-center justify-center z-40"
            >
              <FiX className="text-gray-700" size={15} />
            </button>

            {/* Left content */}
            <div className="p-6 sm:p-8 flex-1">
              <h4 className="text-sm text-gray-500 mb-2">
                Feeling Stuck or Unmotivated?
              </h4>
              <h2 className="text-2xl font-bold text-[#0c2b16] mb-4">
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
                  className="px-4 py-2 bg-[#0c2b16] text-white rounded-md shadow hover:bg-[#0c2b16]/90"
                  onClick={() => setOpen(false)}
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

            {/* Right image with overlay */}
            <div className="sm:w-1/2 hidden sm:block relative">
              <div className="absolute top-0 left-0 w-full h-full bg-lime-600/30"></div>
              <img
                src="https://images.unsplash.com/photo-1752650732799-6e81d5f4c398?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Callback"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;
