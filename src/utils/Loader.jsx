import React, { useState, useEffect } from "react";

const Loader = ({ greetings }) => {
  const [greetIndex, setGreetIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [progress, setProgress] = useState(0);

  // Greeting change every 400ms
  useEffect(() => {
    const greetInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setGreetIndex((prev) => (prev + 1) % greetings.length);
        setFade(true);
      }, 150);
    }, 400);
    return () => clearInterval(greetInterval);
  }, [greetings.length]);

  // Progress count from 1 to 100 (~2.8s total)
  useEffect(() => {
    let count = 0;
    const intervalTime = 28; // 28ms x 100 ≈ 2.8s
    const progressInterval = setInterval(() => {
      count++;
      setProgress(count);
      if (count >= 100) clearInterval(progressInterval);
    }, intervalTime);
    return () => clearInterval(progressInterval);
  }, []);

  // Circular stroke calculation
  const radius = 80; // bigger circle
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const greetingClass = `transition-opacity duration-300 transform ${
    fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
  }`;

  const isMobile = window.innerWidth <= 768;

  return (
    
<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100vh",
    width: "100vw",
    background: "#0c2b16",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
    paddingBottom: isMobile ? "55%" : "15%", // responsive
    overflow: "hidden",
  }}
>
      {/* Circular progress */}
      <svg width="180" height="180" style={{ marginBottom: 30, marginTop: "0%" }}>
        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#ffffff50"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#fff"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.28s linear" }}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#fff"
          fontSize="28px"
          fontWeight="bold"
        >
          {progress}%
        </text>
      </svg>

      {/* Greeting text */}
      <div
        className={greetingClass}
        style={{
          fontSize: "2.8rem",
          fontWeight: "bold",
          background: "linear-gradient(90deg, #fff 30%, #ffd700 60%, #fff 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
          letterSpacing: "2px",
        }}
      >
        {greetings[greetIndex]}
      </div>
    </div>
  );
};

export default Loader;
