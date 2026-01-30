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
    "10:30 - 11:30 AM",
    "11:30 AM - 12:30 PM",
    "1:30 - 2:30 PM",
    "2:30 - 3:30 PM",
  ];

const timezones = [
  { offset: -720, code: "AoE", label: "Baker Is., Howland Is. (US)" },
  { offset: -660, code: "SST", label: "American Samoa, Niue" },
  { offset: -600, code: "HST", label: "USA (Hawaii), Cook Is., French Polynesia" },
  { offset: -570, code: "MART", label: "Marquesas Islands" },
  { offset: -540, code: "AKST", label: "USA (Alaska), Gambier Islands" },
  { offset: -480, code: "PST", label: "USA (Pacific), Canada (BC), Mexico (Baja)" },
  { offset: -420, code: "MST", label: "USA (Mountain), Canada (AB), Mexico (Sonora)" },
  { offset: -360, code: "CST", label: "USA (Central), Mexico, Central America" },
  { offset: -300, code: "EST", label: "USA (Eastern), Canada, Colombia, Peru" },
  { offset: -240, code: "AST", label: "Canada (Atlantic), Caribbean" },
  { offset: -210, code: "NST", label: "Canada (Newfoundland)" },
  { offset: -180, code: "ART", label: "Argentina, Uruguay, Brazil (East)" },
  { offset: -120, code: "GST", label: "South Georgia Islands" },
  { offset: -60, code: "CVT", label: "Cape Verde, Azores" },
  { offset: 0, code: "GMT", label: "UK, Ireland, Portugal, Ghana" },
  { offset: 60, code: "CET", label: "France, Germany, Italy, Nigeria" },
  { offset: 120, code: "EET", label: "South Africa, Egypt, Greece" },
  { offset: 180, code: "MSK", label: "Russia, Turkey, Saudi Arabia" },
  { offset: 210, code: "IRST", label: "Iran" },
  { offset: 240, code: "GST", label: "UAE, Oman" },
  { offset: 270, code: "AFT", label: "Afghanistan" },
  { offset: 300, code: "PKT", label: "Pakistan, Maldives" },
  { offset: 330, code: "IST", label: "India, Sri Lanka" },
  { offset: 345, code: "NPT", label: "Nepal" },
  { offset: 360, code: "BST", label: "Bangladesh, Bhutan" },
  { offset: 390, code: "MMT", label: "Myanmar" },
  { offset: 420, code: "ICT", label: "Thailand, Vietnam, Indonesia (West)" },
  { offset: 480, code: "CST/SGT", label: "China, Singapore, Malaysia" },
  { offset: 525, code: "ACWST", label: "Australia (Eucla)" },
  { offset: 540, code: "JST/KST", label: "Japan, South Korea" },
  { offset: 570, code: "ACST", label: "Australia (NT)" },
  { offset: 600, code: "AEST", label: "Australia (East), PNG" },
  { offset: 630, code: "LHST", label: "Australia (Lord Howe)" },
  { offset: 660, code: "SBT", label: "Solomon Islands" },
  { offset: 720, code: "NZST", label: "New Zealand, Fiji" },
  { offset: 765, code: "CHAST", label: "New Zealand (Chatham)" },
  { offset: 780, code: "PHOT", label: "Samoa, Tonga" },
  { offset: 840, code: "LINT", label: "Kiribati (Line Islands)" },
];


 const [selectedTZ, setSelectedTZ] = useState(timezones.find(t => t.code === "GMT"));


const getOffsetTime = (offsetMinutes) => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const local = new Date(utc + offsetMinutes * 60000);

  return local.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
};



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
          await fetch(
            "https://jago-backend.onrender.com/api/v1/form/bookings",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                date: date.toDateString(),
                slot: formData.slot,
                paymentId: response.razorpay_payment_id,
              }),
            }
          );

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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
    },
  };

  const leftPanelVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightPanelVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const modalBackdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const modalContentVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <motion.section
      className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8"
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
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
          {/* Left Info */}
          <motion.div className="flex-1" variants={leftPanelVariants}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-18 w-18 rounded-md bg-green-600 flex items-center justify-center text-white font-bold text-lg">
                <img
                  src="https://ik.imagekit.io/b9tt0xvd7/Falverra/jogo/home/jago%20logo%20white.png?updatedAt=1764674312979"
                  alt=""
                  className="p-1"
                />
              </div>
              <h3 className="text-lg font-semibold">JaGoCoach</h3>
            </div>

            <h4 className="text-2xl font-bold mb-5">
              Book a Free 15-Minute
            </h4>

            <div className="flex items-center gap-2 mb-2 text-gray-700">
              <FiClock className="text-gray-600" /> <span>15 min</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FiPhone className="text-gray-600" /> <span>Phone Call</span>
            </div>

            {/* ✅ Updated Real Text */}
            <p className="mt-5 text-gray-600 text-sm md:text-[1.1vw]  max-w-xs">
              In this free clarity session, you'll connect with a certified
              JaGoCoach to explore your goals, challenges, and the next steps to
              awaken your potential. No charges, just genuine guidance to help
              you start your transformation journey.
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
                className="w-full border-none text-sm text-green-900"
              />
            </div>

            {/* ✅ UK Time Zone Section */}
           <div className="mt-5 pt-4 border-t border-gray-200 text-xs text-gray-500 space-y-1 relative z-20">
  <div className="flex items-center justify-between gap-3">
    <span>Time zone:</span>

    <select
      value={selectedTZ.code}
      onChange={(e) =>
        setSelectedTZ(timezones.find(t => t.code === e.target.value))
      }
      className="border rounded px-2 py-1 text-xs text-gray-700 bg-white cursor-pointer focus:outline-none focus:ring-1 focus:ring-green-500"
    >
      {timezones.map((tz) => (
        <option key={tz.code} value={tz.code}>
          UTC{tz.offset >= 0 ? "+" : ""}
          {Math.floor(tz.offset / 60)}
          {tz.offset % 60 !== 0 ? ":" + Math.abs(tz.offset % 60) : ""} — {tz.code}
        </option>
      ))}
    </select>
  </div>

  <div>
    <span className="font-medium text-gray-700">
      {selectedTZ.code} — {selectedTZ.label}
    </span>{" "}
    (
    {getOffsetTime(selectedTZ.offset)} local time)
  </div>
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

              <h3 className="text-xl font-semibold mb-4">
                Complete Your Booking
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
                    <option
                      key={s}
                      value={s}
                      disabled={bookedSlots.includes(s)}
                    >
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
