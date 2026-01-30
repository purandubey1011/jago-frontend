import React, { useEffect, useState } from "react";

const messages = [
  "New WHO Report: More than 1 billion people worldwide live with a mental disorder.",
  "New WHO Report: $1 trillion in annual productivity losses due to depression and anxiety.",
  "New WHO Report: Only 9% of people with depression receive adequate treatment.",
];

const BannerTop = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-10 bg-green-950 text-white text-[2.4vw] md:text-sm md:font-medium z-[60]">
      <div className="relative h-full flex items-center justify-center overflow-hidden">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-700 ease-in-out ${
              i === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
          >
            <a href="#" className="hover:underline">
              {msg}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerTop;