import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-btn", { autoAlpha: 0, y: 20 });
      gsap.set(".hero-title", { opacity: 0, y: 40 });
      gsap.set(".hero-subtitle", { opacity: 0, y: 30 });
      gsap.set(videoRef.current, { scale: 1.38 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(videoRef.current, { duration: 1.3, delay: 0.2 }, 0)
        .to(".bg-overlay", { opacity: 0.8, duration: 1.5 }, 0)
        .to(".hero-title", { opacity: 1, y: 0, duration: 1.2 }, "<0.3")
        .to(".hero-subtitle", { opacity: 1, y: 0, duration: 1 }, "<0.3")
        .to(".hero-btn", { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1 }, "<0.3");
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
        <h1
          className="hero-title text-3xl md:text-[4.3vw] font-bold text-white leading-snug"
          dangerouslySetInnerHTML={{ __html: t("heroTitle") }}
        />

        <p className="hero-subtitle mt-4 text-base sm:text-lg md:text-[1.45vw] text-gray-200 max-w-2xl leading-relaxed">
          {t("heroSubtitle")}
        </p>

        <Link
          to="/contact#booking-calendar"
          className="hero-btn mt-6 inline-block px-6 py-3 bg-white hover:bg-gray-300 text-black font-semibold rounded-full shadow-md"
        >
          {t("heroButton")}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
