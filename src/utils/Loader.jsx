import React, { useEffect, useRef, useState } from "react";

const Loader = ({ onFinish }) => {
  const videoRef = useRef(null);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Jaise hi video end ho loader hide ho
      video.onended = () => {
        setShowLoader(false);
        if (onFinish) onFinish(); // parent ko inform krdo ki loader end ho gaya
      };
    }
  }, [onFinish]);

  if (!showLoader) return null;

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <video
        ref={videoRef}
        src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/3,2,1%20Oldtime%20Countdown.mp4?updatedAt=1762419333290"
        autoPlay
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Loader;
