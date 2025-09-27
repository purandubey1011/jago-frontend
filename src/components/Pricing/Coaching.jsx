import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const coachingData = [
  {
    id: 1,
    title: "Clarity Catalyst",
    subtitle: "For seekers ready to shift gears and gain direction.",
    details: [
      "Includes: 3 x 60-minute sessions (virtual)",
      "Bonus: Personalized clarity workbook + 1 follow-up check-in",
      "Positioning: Entry-level, high impact. Ideal for new clients or giftable coaching.",
    ],
    price: "$495",
    note: "for three sessions",
    conversion:
      "Approximate conversions: EUR (€), AUD (A$), INR (₹), SGD (S$), GBP (£). All prices quoted in USD.",
    inrPrice: 41000, // example INR test value
    popular: true,
  },
  {
    id: 2,
    title: "Awakening Intensive",
    subtitle: "For those craving a breakthrough moment.",
    details: [
      "Includes: Half-day immersive (3.5 hours) + pre-session discovery + post-session integration call",
      "Bonus: JaGo Coach Awakening Journal + curated resource kit",
      "Positioning: Premium single-session experience. Great for high-achievers or corporate clients.",
    ],
    price: "$895",
    note: "Single immersive session",
    conversion:
      "Approximate conversions: EUR (€), AUD (A$), INR (₹), SGD (S$), GBP (£). All prices quoted in USD.",
    inrPrice: 74000,
    popular: false,
  },
  {
    id: 3,
    title: "Legacy Builder: 3-Month Coaching Journey",
    subtitle:
      "For those ready to rewrite their story and build a legacy with clarity, courage, and conviction.",
    details: [
      "12 weeks (approx. 90 days) • Weekly 60-minute sessions",
      "Optional bi-weekly voice note check-ins",
      "Onboarding: 45-min goal & legacy mapping + custom Legacy Map",
      "Core: 12 x 60-min sessions with narrative psychology & strategic visioning",
      "Integration: Final wrap-up + 30-day follow-up call",
      "Bonuses: Client portal, curated resources, JaGo Legacy Journal",
    ],
    price: "$3,600",
    note: "Payment plans: 3 x $1,200 or 6 x $600 • Corporate sponsorship options",
    conversion:
      "Approximate conversions: EUR (€), AUD (A$), INR (₹), SGD (S$), GBP (£). All prices quoted in USD.",
    inrPrice: 295000,
    popular: false,
  },
  {
    id: 4,
    title: "Clarity Pulse: 30-Minute Emergency Call",
    subtitle: "For those moments when clarity can’t wait.",
    details: [
      "30-minute virtual coaching session",
      "Rapid intake form to focus the session",
      "One actionable insight or reframing tool",
      "Optional follow-up resource (quote card, worksheet, journaling prompt)",
    ],
    price: "$195",
    note: "Instant booking • Delivered within 24–48 hours (subject to availability)",
    conversion:
      "Approximate conversions: EUR (€), AUD (A$), INR (₹), SGD (S$), GBP (£). All prices quoted in USD.",
    inrPrice: 16000,
    popular: false,
  },
  {
    id: 5,
    title: "JaGo Executive Clarity Program",
    subtitle: "Quarterly coaching for managers who lead with impact.",
    details: [
      "4 x 75-minute coaching sessions per manager per year",
      "Delivered virtually • Scheduled quarterly or flexibly",
      "Includes pre-session intake & tailored session notes",
      "Optional HR/L&D sponsor onboarding • Quarterly anonymized summaries",
      "Access to leadership resource kit • Priority JaGo Whisper support",
    ],
    price: "$1,200",
    note: "per manager per year • Volume discounts for teams of 10+",
    conversion:
      "Approximate conversions: EUR (€), AUD (A$), INR (₹), SGD (S$), GBP (£). All prices quoted in USD.",
    inrPrice: 98000,
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
      className="relative bg-lime-50 rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between"
    >
      <div>
        {item.popular && (
          <span className="absolute top-4 right-4 bg-yellow-300 text-green-900 text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        )}

        <h3 className="text-xl font-semibold text-green-900">{item.title}</h3>
        <p className="text-sm text-gray-700 mt-1 mb-5">{item.subtitle}</p>

        <div className="mt-4 border rounded-md p-3 bg-white">
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {item.details.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <p className="text-lg font-bold text-red-600">{item.price}</p>
          <p className="text-sm text-gray-600 pb-2">{item.note}</p>
          {/* <p className="text-xs text-gray-500 mt-1">{item.conversion}</p> */}
        </div>
      </div>

      <motion.button
        className="mt-auto w-full bg-lime-300 text-green-900 font-medium py-2 rounded-md hover:bg-lime-400 transition"
        onClick={() => {
          setSelectedPackage(item);
          setIsModalOpen(true);
        }}
      >
        Enroll Now
      </motion.button>
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
