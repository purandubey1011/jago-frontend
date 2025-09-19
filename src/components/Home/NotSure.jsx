import React, { useEffect, useRef } from "react";
import { BsStars } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const NotSure = () => {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const starRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(boxRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.55,
        ease: "power2.out",
      })
        .from(headingRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        })
        .from(textRef.current, {
          y: 15,
          opacity: 0,
          duration: 0.35,
          ease: "power2.out",
        })
        .fromTo(
          btnRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.45, ease: "back.out(1.8)" },
          "-=0.25"
        )
        .from(
          starRefs.current,
          {
            opacity: 0,
            scale: 0.85,
            duration: 0.35,
            stagger: 0.08,
            ease: "back.out(1.7)",
          },
          "-=0.25"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-white w-full flex justify-center py-10 sm:py-12 px-4">
      {/* Green Box */}
      <div
        ref={boxRef}
        className="relative bg-[#E6FF33] rounded-2xl py-8 sm:py-10 px-5 sm:px-8 md:px-24 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl overflow-hidden"
      >
        {/* Left Content */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 ref={headingRef} className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3 leading-snug font-serif">
            Not sure if coaching is <br className="hidden sm:block" /> for you?
          </h2>
          <p ref={textRef} className="text-gray-800 text-sm sm:text-base">
            Take our free online self-assessment and discover where you stand today
          </p>
        </div>

        {/* Right Content */}
        <div className="mt-5 md:mt-0 flex flex-col items-center md:items-end">
          <Link to="/contact">
            <button
              ref={btnRef}
              className="bg-[#0F2E15] hover:bg-green-800 transition text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold"
            >
              Start Free Assessment
            </button>
          </Link>
        </div>

        {/* Decorative Stars (Top Right) */}
        <div className="absolute top-0 md:top-4 right-6 flex gap-2 text-green-900">
          <img
            ref={(el) => (starRefs.current[0] = el)}
            src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/start.png?updatedAt=1757792039803"
            className="w-8 md:w-18"
            alt=""
          />
        </div>

        {/* Decorative Stars (Bottom Right) */}
        <div className="absolute bottom-2 md:right-1/3 left-0 flex gap-2 text-green-900">
          <img
            ref={(el) => (starRefs.current[1] = el)}
            src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/start.png?updatedAt=1757792039803"
            className="w-12 md:w-18"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NotSure;