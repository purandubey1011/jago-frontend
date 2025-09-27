import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-btn", { autoAlpha: 0, y: 20 });
      gsap.set(".hero-title", { opacity: 0, y: 40 });
      gsap.set(".hero-subtitle", { opacity: 0, y: 30 });
      gsap.set(videoRef.current, { scale: 1.38 });
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });
      tl.to(
        videoRef.current,
        {
          // scale: 1.4,
          duration: 1.3,
          delay: 0.2,
          objectPosition: "50% 10%",
        },
        0
      )
        .to(
          ".bg-overlay",
          {
            opacity: 0.8,
            duration: 1.5,
          },
          0
        )
        .to(
          ".hero-title",
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
          },
          "<0.3"
        )
        .to(
          ".hero-subtitle",
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "<0.3"
        )
        .to(
          ".hero-btn",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "<0.3"
        );

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom center",
        scrub: true,
        animation: gsap.to(".hero-content-wrapper", {
          opacity: 0,
          y: -100,
          ease: "power1.in",
        }),
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://cdn.pixabay.com/video/2023/09/23/181995-867576106_large.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="bg-overlay absolute top-0 left-0 w-full h-full bg-[#0F2E15CC]/80"></div>
      <Navbar />

      <div className="hero-content-wrapper relative z-10 flex flex-col justify-center items-center text-center h-full px-4 sm:px-6">
        <h1 className="hero-title text-3xl md:text-[4.3vw] font-bold text-white leading-snug sm:leading-tight">
          Clarity. Purpose. <br />
          <span className="italic font-serif">Peace of Mind</span> <br />
          Your Journey Starts Here.
        </h1>

        <p className="hero-subtitle mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-xl sm:max-w-2xl leading-relaxed">
          Confidential life coaching and wellbeing solutions to help{" "}
          <span className="hidden md:inline">
            <br />
          </span>{" "}
          you find direction, balance, and growth
        </p>

        <Link
          to="/contact#booking-calendar"
          className="hero-btn mt-6 sm:mt-8 inline-block px-5 sm:px-6 py-2.5 sm:py-3
                     bg-[#EAFE45] hover:bg-yellow-400 text-black font-semibold
                     rounded-full shadow-md transition-colors duration-300
                     text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          Book a Free 20-Minute Call
        </Link>
      </div>
    </div>
  );
};

export default Hero;
