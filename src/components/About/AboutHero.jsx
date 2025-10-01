import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Navbar from "../Navbar";

const AboutHero = () => {
  const heroRef = useRef(null);
  const topRowRef = useRef(null);
  const headingRef = useRef(null);
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(topRowRef.current.children, {
        opacity: 0,
        y: -30,
        duration: 0.6,
        stagger: 0.15,
      });
      tl.from(
        headingRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
        },
        "-=0.4"
      );
      tl.from(
        [circle1Ref.current, circle2Ref.current],
        {
          opacity: 0,
          scale: 0.6,
          duration: 1.2,
          ease: "elastic.out(1, 0.7)",
          stagger: 0.4,
        },
        "<"
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen bg-[#0f2b14] flex flex-col"
    >
      <Navbar />

      {/* Hero content */}
      <div className="relative flex flex-1 flex-col justify-center px-5 sm:px-8 md:px-20 z-10">
        {/* Decorative circles */}
        <div
          ref={circle1Ref}
          className="decorative-circle absolute top-28 -left-28 w-[240px] h-[240px] md:w-[400px] md:h-[400px] border-[12px] md:border-[20px] border-[#183b22] rounded-full -z-20 opacity-40"
        ></div>
        <div
          ref={circle2Ref}
          className="decorative-circle absolute bottom-16 right-0 w-[180px] h-[180px] md:w-[300px] md:h-[300px] border-[12px] md:border-[20px] border-[#183b22] rounded-full -z-20 opacity-40"
        ></div>

        {/* Top row */}
        <div
          ref={topRowRef}
          className="flex items-center justify-between w-full mb-5 md:mb-8"
        >
          <div className="flex items-center gap-2">
            <span className="text-white/80 text-sm sm:text-xl font-medium mb-5">
              about JaGoCoach
            </span>
          </div>
        </div>

        {/* Main heading */}
        <div className="flex justify-center md:justify-end">
          <h1
            ref={headingRef}
            className="text-4xl  md:text-6xl font-bold leading-tight text-white max-w-lg md:max-w-[75vw] text-left"
          >
          
         JaGo means to awaken.{" "}
            <span className="text-gray-400 font-semibold">
              To rise above confusion, to step into purpose, to live with
              balance.
            </span>{" "}
            It’s not about quick fixes. It’s about lasting clarity.

          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
