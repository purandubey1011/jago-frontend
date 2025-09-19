import React, { useEffect, useRef } from "react";
import { FaHeart, FaHeadphones } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SolutionOffer = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const itemsRef = useRef([]); 

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%", 
          toggleActions: "play none none reverse",
        },
      });
      tl.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          itemsRef.current, 
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.2,
          },
          "-=0.3" 
        );
    }, sectionRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#f9fbea] py-14 sm:py-16"
    >
      <div className="w-[90vw] max-w-[1200px] mx-auto flex flex-col gap-10 sm:gap-12">
        {/* Heading */}
        <div ref={headingRef}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            Solutions We Offer
          </h2>
          <p className="text-gray-600 mt-2 max-w-lg text-sm sm:text-base">
            From personal wellbeing to career crossroads, we help you navigate
            with ease. Simple practices that create meaningful change.
          </p>
        </div>

        {/* Solutions */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-8 justify-between">
          {/* 1:1 Coaching */}
          <div ref={(el) => (itemsRef.current[0] = el)} className="flex flex-col">
            <h3 className="text-lg sm:text-3xl font-bold text-gray-900">
              1:1
            </h3>
            <p className="font-semibold text-gray-900 mt-1 sm:mt-2">
              1:1 Coaching
            </p>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              Clarity, purpose, identity, career crossroads.
            </p>
          </div>

          {/* Wellbeing Resources */}
          <div ref={(el) => (itemsRef.current[1] = el)} className="flex flex-col">
            <FaHeart className="text-xl sm:text-4xl text-gray-800 mb-1 sm:mb-2" />
            <p className="font-semibold text-gray-900">Wellbeing Resources</p>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              Guided journals, reflections, daily practices.
            </p>
          </div>

          {/* Audio Tools */}
          <div ref={(el) => (itemsRef.current[2] = el)} className="flex flex-col">
            <FaHeadphones className="text-xl sm:text-4xl text-gray-800 mb-1 sm:mb-2" />
            <p className="font-semibold text-gray-900">Audio Tools</p>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              Simple guided practices for stress and focus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionOffer;