import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const coachingData = [
  {
    id: 1,
    title: "The JaGoCoach Signature: 12-Week Program",
    subtitle: "A 12-week journey of clarity, vitality, and sustainable transformation.",
    details: [
      "Weekly 1:1 60-min sessions (virtual or in-person)",
      "Covers Awareness → Beliefs & Big Goals → Change",
      "Bonus: Breathwork, Meditation, Persona Mapping, Voice-note check-ins",
    ],
    price: "$3,600 (discounted from $5,000)",
    note: "Payment Plan: 3 × $1,200",
    popular: true,
  },
  {
    id: 2,
    title: "JaGoCoach Launchpad: Obstacle Breaker",
    subtitle: "Bust resistance, reset energy, and ignite clarity in 3 sessions.",
    details: [
      "3 × 60-min 1:1 sessions",
      "Framework: Awareness → Audit → Reset",
      "Bonus: Follow-up check-in",
    ],
    price: "$595 (was $695)",
    note: "Includes: 3 sessions + bonus check-in",
    popular: false,
  },
  {
    id: 3,
    title: "JaGoCoach Lifeline: Emergency Call",
    subtitle: "Quick recalibration for urgent clarity or overwhelm.",
    details: [
      "45-min focused virtual call",
      "For tough decisions, overwhelm, or urgent mindset reset",
    ],
    price: "$295",
    note: "Quick access, fast turnaround",
    popular: false,
  },
];


const Coaching = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!window.Razorpay) {
      toast.error("Razorpay SDK not loaded!");
      return;
    }

    const options = {
      key: "rzp_test_RIZb5le1ykNbRN", // Razorpay test key
      amount: selectedPackage.inrPrice * 100, // paisa
      currency: "INR",
      name: "JaGoCoach",
      description: `Booking: ${selectedPackage.title}`,
      handler: async function (response) {
        try {
          await fetch("https://jago-backend.onrender.com/api/v1/form/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              package: selectedPackage.title,
              paymentId: response.razorpay_payment_id,
            }),
          });

          toast.success("✅ Booking confirmed!", {
            position: "top-right",
            autoClose: 3000,
          });

          setIsModalOpen(false);
          setFormData({ name: "", email: "" });
        } catch (error) {
          toast.error("Booking save failed!");
          console.error(error);
        }
      },
      prefill: { name: formData.name, email: formData.email },
      theme: { color: "#10b981" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const modalBackdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const modalContent = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <motion.section className="bg-white py-20 px-4 md:px-12">
      <ToastContainer />

      <motion.h2 className="text-5xl font-bold text-green-900 mb-12 font-serif">
        Coaching Packages
      </motion.h2>

     <motion.div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-[#0F2E15]">
  {coachingData.map((item) => (
    <motion.div
      key={item.id}
      className="relative bg-lime-50 rounded-xl shadow-sm border border-gray-100 px-6 py-8 flex flex-col justify-between min-h-[40vh]" // 👈 static min height
    >
      {/* Top Section */}
      <div>
        {item.popular && (
          <span className="absolute top-2 right-4 bg-yellow-300 text-green-900 text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        )}

        <h3 className="text-xl font-semibold text-green-900 sm:mb-2 md:mb-2">{item.title}</h3>
        <p className="text-sm text-gray-700 mt-1 mb-4 md:mb-5">{item.subtitle}</p>

       
      </div>

      {/* Bottom Section */}
      <div className="mt-auto">

        {/* Details box with min-h */}
        <div className="border rounded-md p-3 bg-white min-h-[15vh] sm:min-h-[18vh] md:min-h-[20vh]">
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {item.details.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
        
        <div className="mt-5">
          <p className="text-lg font-bold text-red-600">{item.price}</p>
          <p className="text-sm text-gray-600 pb-2 h-12">{item.note}</p>
          {/* <p className="text-xs text-gray-500 mt-1">{item.conversion}</p> */}
        </div>

        <motion.button
          className="w-full bg-lime-300 text-green-900 font-medium py-2 rounded-md hover:bg-lime-400 transition"
          onClick={() => {
            setSelectedPackage(item);
            setIsModalOpen(true);
          }}
        >
          Know more
        </motion.button>
      </div>
    </motion.div>
  ))}
</motion.div>


      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPackage && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative"
              variants={modalContent}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              >
                ✕
              </button>

              <h3 className="text-xl font-semibold mb-4">
                {selectedPackage.title}
              </h3>

              <form className="space-y-4" onSubmit={handlePayment}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                  required
                />
                <p className="text-sm text-gray-600">
                  You are enrolling for:{" "}
                  <span className="font-medium">{selectedPackage.title}</span>
                </p>

                <motion.button
                  type="submit"
                  className="w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Pay Now
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Coaching;
