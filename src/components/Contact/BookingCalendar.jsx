import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FiClock, FiPhone } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion"; 

const BookingCalendar = ({ id }) => {
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    slot: "",
  });
  const [bookedSlots, setBookedSlots] = useState([]);

  const slots = [
    "4:00 - 5:00 PM",
    "5:00 - 6:00 PM",
    "7:00 - 8:00 PM",
    "8:00 - 9:00 PM",
  ];

  // Fetch already booked slots for the selected date
  useEffect(() => {
    const fetchBooked = async () => {
      try {
        const res = await fetch(
          `https://jago-backend.onrender.com/api/v1/form/bookings?date=${date.toDateString()}`
        );
        const data = await res.json();
        setBookedSlots(data.bookedSlots || []);
      } catch (err) {
        console.error("Error fetching booked slots:", err);
      }
    };
    fetchBooked();
  }, [date]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!window.Razorpay) {
      toast.error("Razorpay SDK not loaded. Check index.html script!");
      return;
    }

    const options = {
      key: "rzp_test_RIZb5le1ykNbRN", // <-- apna test key yahan daalein
      amount: 99900, // in paisa (999 INR)
      currency: "INR",
      name: "Appointment Booking",
      description: `Booking on ${date.toDateString()} | Slot: ${formData.slot}`,
      handler: async function (response) {
        try {
          // save booking to backend
          await fetch("https://jago-backend.onrender.com/api/v1/form/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              date: date.toDateString(),
              slot: formData.slot,
              paymentId: response.razorpay_payment_id,
            }),
          });

          // ✅ Update bookedSlots locally
          setBookedSlots((prev) => [...prev, formData.slot]);

          toast.success("✅ Appointment booked successfully!", {
            position: "top-right",
            autoClose: 3000,
          });

          setFormData({ name: "", email: "", slot: "" });
          handleCloseModal();
        } catch (error) {
          toast.error("Booking saved nahi ho payi!");
          console.error(error);
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
      },
      theme: { color: "#10b981" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // Framer Motion Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut", delay: 0.3 } },
  };

  const leftPanelVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const rightPanelVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
  };

  const modalBackdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const modalContentVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <motion.section
      className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8"
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.2 }}
    >
      <ToastContainer />

      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-center text-3xl sm:text-4xl font-semibold text-green-900 mb-12"
          variants={headingVariants}
        >
          Booking <span className="font-serif italic">Calendar</span>
        </motion.h2>

        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-10 flex flex-col md:flex-row gap-10"
          variants={cardVariants}
        >
          {/* Left Info */}
          <motion.div className="flex-1" variants={leftPanelVariants}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-md bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <h3 className="text-lg font-semibold">ACME Inc.</h3>
            </div>

            <h4 className="text-2xl font-bold mb-5">Product Demo</h4>

            <div className="flex items-center gap-2 mb-2 text-gray-700">
              <FiClock className="text-gray-600" /> <span>15 min</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FiPhone className="text-gray-600" /> <span>Phone call</span>
            </div>

            <p className="mt-5 text-gray-600 text-sm leading-relaxed max-w-xs">
              This is an example of a meeting you would have with a potential
              customer to demonstrate your product.
            </p>
          </motion.div>

          {/* Right Calendar */}
          <motion.div className="flex-1" variants={rightPanelVariants}>
            <h5 className="text-sm font-semibold mb-3">
              Select a Date &amp; Time
            </h5>

            <div className="rounded-xl border border-gray-200 shadow-sm p-4">
              <Calendar
                onChange={setDate}
                value={date}
                className="w-full border-none"
              />
            </div>

            <div className="mt-5 pt-4 border-t border-gray-200 text-xs text-gray-500">
              Time zone:{" "}
              <span className="font-medium text-gray-700">
                Central European Time
              </span>{" "}
              (8:11 pm)
            </div>

            <motion.button
              onClick={handleOpenModal}
              className="mt-4 px-4 py-2 text-sm font-medium bg-green-600 text-white rounded hover:bg-green-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative"
              variants={modalContentVariants}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              >
                ✕
              </button>

              <h3 className="text-xl font-semibold mb-4">Complete Your Booking</h3>

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

                <input
                  type="text"
                  value={date.toDateString()}
                  readOnly
                  className="w-full p-2 border rounded bg-gray-100"
                />

                <select
                  name="slot"
                  value={formData.slot}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select slot</option>
                  {slots.map((s) => (
                    <option key={s} value={s} disabled={bookedSlots.includes(s)}>
                      {s} {bookedSlots.includes(s) ? "(Booked)" : ""}
                    </option>
                  ))}
                </select>

                <motion.button
                  type="submit"
                  className="w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition"
                  disabled={!formData.name || !formData.email || !formData.slot}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Pay ₹999
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default BookingCalendar;