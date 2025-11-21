import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import LanguageDropdown from "../utils/LanguageDropdown";
import CountryDropdown from "../utils/CountryDropdown";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && open) {
        if (!event.target.closest('button[aria-label="Toggle menu"]')) {
          setOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Disable scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [open]);

  // Scroll listener for background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLightBg =
    location.pathname === "/solutions" ||
    location.pathname === "/resources" ||
    location.pathname.startsWith("/program/");

  const textColor = isLightBg ? "text-black" : "text-white";
  const hoverColor = isLightBg ? "hover:text-lime-600" : "hover:text-lime-300";
  const borderColor = isLightBg ? "border-black" : "border-white";
  const contactHover = isLightBg
    ? "hover:bg-black hover:text-white"
    : "hover:bg-white hover:text-black";

  const navLinksData = [
    { to: "/", label: "Home" },
    { to: "/pricing", label: "Coaching Programs" },
    { to: "/about", label: "Why JaGoCoach™" },
    { to: "/solutions", label: "Success Stories" },
    { to: "/resources", label: "Free Resources" },
    { to: "/faq", label: "FAQ" },
  ];

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  const mobileMenuItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.2 } },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-4 lg:px-5 xl:px-10 py-4 flex items-center justify-between transition-all duration-500 
      ${
        scrolled
          ? "backdrop-blur-md bg-white/50 shadow-md" // 👈 white transparent blur on scroll
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <motion.div variants={itemVariants} initial="hidden" animate="visible">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="block w-[140px] sm:w-[140px] md:w-[160px]"
        >
          <img
            src={
              isLightBg || scrolled
                ? "https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/jago%20logo%20green.png?updatedAt=1759678906834"
                : "https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/jago%20logo%20white.png?updatedAt=1759678906840"
            }
            alt="JaGoCoach Logo"
            className="w-3/4 h-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </motion.div>

      {/* Desktop Links */}
      <motion.ul
        className={`hidden lg:flex items-center space-x-3 lg:space-x-4 xl:space-x-8 font-medium ${
          scrolled ? "text-black" : textColor
        }`}
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {navLinksData.map((link) => (
          <motion.li
            key={link.to}
            variants={itemVariants}
            className="text-xs lg:text-sm xl:text-base"
          >
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-lime-500 border-b-2 border-lime-500 pb-1"
                  : `${hoverColor}`
              }
            >
              {link.label}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>

      {/* Right buttons (Desktop) */}
      <motion.div
        className="hidden lg:flex items-center space-x-3 lg:space-x-1 xl:space-x-3"
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Link
            to="/contact"
            className={`px-3 lg:px-4 xl:px-5 py-1.5 lg:py-2 rounded-full border ${
              scrolled ? "border-black text-black hover:bg-black hover:text-white" : `${borderColor} ${textColor} ${contactHover}`
            } transition text-xs sm:text-sm lg:text-base xl:text-base`}
          >
            Contact
          </Link>
        </motion.div>

        <motion.div
          variants={mobileMenuItemVariants}
          className="w-full text-center px-2 relative"
        >
          <CountryDropdown textColor={scrolled ? "text-black" : "text-white"} />
        </motion.div>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className={`lg:hidden text-2xl ${
          scrolled ? "text-black" : textColor
        } transition-colors duration-300`}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        aria-label="Toggle menu"
      >
        {open ? <FaTimes className="z-50" /> : <FaBars />}
      </motion.button>

      {/* Mobile Menu Overlay & Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 z-40 xl:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
  key="menu"
  ref={menuRef}
  variants={mobileMenuVariants}
  initial="hidden"
  animate="visible"
  exit="hidden"
  className="fixed top-[0px] right-0 h-[calc(100vh-72px)] w-3/4 max-w-sm bg-black text-white flex flex-col items-center justify-start pb-8 space-y-6 text-lg shadow-lg z-50 xl:hidden overflow-y-auto"
>

              <motion.div
                variants={staggerContainerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center space-y-4 w-full pt-[100px]"
              >
                {navLinksData.map((link) => (
                  <motion.div
                    key={link.to}
                    variants={mobileMenuItemVariants}
                    className="w-full text-center"
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block py-3 px-4 ${
                          isActive
                            ? "text-lime-400 font-semibold border-l-4 border-lime-400"
                            : "hover:bg-gray-800 hover:text-lime-300"
                        } transition-colors duration-200`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}

                <motion.div
                  variants={mobileMenuItemVariants}
                  className="sm:w-[21vw] md:w-[15vw] lg:w-[13vw] text-center relative"
                >
                  <CountryDropdown />
                </motion.div>

                <motion.div
                  variants={mobileMenuItemVariants}
                  className="w-full text-center mt-2"
                >
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="inline-block px-8 py-3 rounded-full bg-lime-400 text-black font-semibold shadow-md hover:bg-lime-500 transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
