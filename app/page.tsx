"use client";
import React, { useState } from "react";
import Image from "next/image";
import About from "@/components/home/About";
import HeroSection from "@/components/home/HeroSection";
import Menu from "@/components/home/Menu";
import VideoPlayer from "@/components/home/VideoPlayer";
import Arcade from "@/components/home/Arcade";
import { Suspense } from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to handle scroll event and toggle visibility of the button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Attach scroll event listener when component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<p>Loading video...</p>}>
          <VideoPlayer />
        </Suspense>
        <div className="pb-5 mb-5 mb-sm-5 pb-sm-5"></div>
        <div className="pb-5 mb-5 mb-sm-5"></div>
        <HeroSection />

        <div className="pt-5 mt-5 pb-4 mb-4"></div>
        <div className="pb-4 mb-4 "></div>
        <Menu />
        <div className="mt-5 pt-5 pb-5 mb-5"></div>
        <div className="mt-5 pt-5 pb-5 mb-5"></div>
        <About />
        <div className="mt-5 pt-5 pb-4 mb-4"></div>
        <div className="mt-5 pt-5 pb-4 mb-4"></div>
        <Arcade />
      </Provider>

      {/* Back to top button */}
      {showButton && (
        <button className="back-to-top btn" onClick={scrollToTop}>
          <Image
            src="/assets/icons/arrow-up.svg"
            alt="arrow up"
            width={30}
            height={30}
          />
        </button>
      )}
    </>
  );
}
