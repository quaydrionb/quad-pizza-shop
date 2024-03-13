"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const VideoComponent = () => {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    // for mobile and desktop computer
    const smallVideo = "/small-video.mp4";
    const largeVideo = "/big-video.mp4";

    // Check screen size and set video source accordingly
    const setSourceBasedOnSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setVideoSrc(smallVideo);
      } else {
        setVideoSrc(largeVideo);
      }
    };

    // Initially set the source based on screen size
    setSourceBasedOnSize();

    // Update video source on window resize
    window.addEventListener("resize", setSourceBasedOnSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", setSourceBasedOnSize);
    };
  }, []);

  return (
    <div>
      <video src={videoSrc} autoPlay muted loop playsInline controls={false} />
      <Link href="/items">
        <button type="button" className="btn order-button">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default VideoComponent;
