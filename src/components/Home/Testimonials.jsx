import React, { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const testimonials = [
    {
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      name: "Carolyn Willms",
      role: "Global Accountability Officer",
      text: "Lorem ipsum dolor sit amet consectetur. Massa sed dapibus adipiscing felis at. Integer at dictum ullamcorper magna nam eget. Elementum semper ultrices quam elementum dignissim etiam velit molestie diam. Netus arcu varius lectus dignissim mollis lorem pulvinar tortor arcu.",
    },
    {
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      name: "John Smith",
      role: "Chief Marketing Officer",
      text: "Praesent euismod, ipsum eget blandit dignissim, est leo faucibus ipsum, vitae suscipit libero nisl vel leo. Proin commodo bibendum metus, in eleifend nisi gravida ac.",
    },
    {
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      name: "Emily Johnson",
      role: "Product Designer",
      text: "Suspendisse potenti. Donec venenatis diam sed neque malesuada, vel facilisis eros vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada.",
    },
    {
      img: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
      name: "David Miller",
      role: "Lead Developer",
      text: "Aliquam erat volutpat. Integer nec dui vitae est bibendum venenatis. Cras ut odio eget elit volutpat tincidunt.",
    },
    {
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      name: "Sophia Lee",
      role: "UX Researcher",
      text: "Mauris congue, sapien eget volutpat feugiat, enim lorem luctus est, nec tempus nisl risus vitae ligula.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const { img, name, role, text } = testimonials[current];

  const thumbsToShow = Array.from({ length: 3 }, (_, i) =>
    testimonials[(current + i) % testimonials.length]
  );

  const sectionRef = useRef(null);
  const contentRef = useRef(null); // image + desktop name/role
  const textRef = useRef(null);

  // Scroll-triggered staggered entrance
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elems = gsap.utils.toArray(
        ".testimonial-heading, .testimonial-image, .testimonial-text, .testimonial-mobile, .testimonial-thumbs"
      );

      gsap.from(elems, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play reverse play reverse",
        },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 1.2,
        ease: "power2.out",
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Smooth Next/Thumbnail animation
  const animateChange = (newIndex) => {
    if (newIndex === current) return;

    const tl = gsap.timeline({ defaults: { duration: .2, ease: "power2.inOut" } });

    // Animate out old content
    tl.to(contentRef.current, { opacity: 0, y: -30 });
    tl.to(textRef.current, { opacity: 0, y: -30 }, "<"); // sync with previous

    // Update state after fade out
    tl.add(() => setCurrent(newIndex));

    // Animate in new content
    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 1.1 }
    );
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 1.1 },
      "<"
    );
  };

  const handleNext = () => animateChange((current + 1) % testimonials.length);
  const handleThumbClick = (i) => {
    if (i === current) return;
    animateChange(i);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white w-full py-12 px-4 md:py-20 md:px-20 overflow-hidden"
    >
      {/* Watermark Heading */}
      <h1
        className="testimonial-heading absolute top-4 left-4 md:top-8 md:left-20 text-[2.3rem] md:text-[7rem] font-bold text-transparent leading-none select-none z-0"
        style={{ WebkitTextStroke: "1.5px rgba(0,0,0,0.40)" }}
      >
        Testimonials
      </h1>

      {/* Main content */}
      <div className="mt-12 md:mt-20 flex flex-col md:flex-row md:gap-12 md:items-center md:justify-center">
        {/* Image + Desktop Name/Role */}
        <div ref={contentRef} className=" flex flex-col items-center md:items-start mb-6 md:mb-0">
          <div className="testimonial-image relative mb-4">
            <div className="absolute top-0 left-0 w-[4px] md:w-[8px] h-full bg-lime-400" />
            <img
              src={img}
              alt={name}
              className="w-[83vw] h-[280px] md:w-[280px] md:h-[340px] object-cover rounded shadow"
            />
          </div>

          {/* Desktop Name/Role */}
          <div className="testimonial-image hidden md:block text-left">
            <h3 className="text-xl md:text-2xl font-bold">{name}</h3>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>

        {/* Text */}
        <div
          ref={textRef}
          className="testimonial-text text-gray-800 leading-relaxed text-base md:text-lg max-w-full md:max-w-[470px] px-2 md:px-4 text-left relative z-10"
        >
          {text}
        </div>
      </div>

      {/* Mobile Name/Role */}
      <div className="testimonial-mobile md:hidden text-center mt-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
      </div>

      {/* Thumbnails & Next Button */}
      <div className="testimonial-thumbs flex flex-row justify-end md:items-center gap-4 mt-8">
        <div className="flex justify-center md:justify-end gap-3">
          {thumbsToShow.map((t) => {
            const idx = testimonials.findIndex((x) => x.img === t.img);
            return (
              <button
                key={t.img}
                onClick={() => handleThumbClick(idx)}
                className={`overflow-hidden rounded focus:outline-none ${
                  idx === current ? "ring-4 ring-lime-400" : ""
                }`}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-[45px] h-[60px] md:w-[70px] md:h-[70px] object-cover"
                />
              </button>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          className="bg-lime-300 hover:bg-lime-400 text-black font-medium px-6 py-2 rounded-full"
        >
          Next →
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
