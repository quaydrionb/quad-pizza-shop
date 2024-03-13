"use client";

import Image from "next/image";

const ArrowDown = () => {
  return (
    <div className="arrow-down">
      <button
        className="btn"
        onClick={() => {
          window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      >
        <Image
          src="/assets/icons/arrow-down.svg"
          alt="arrow down"
          width={60}
          height={60}
        />
      </button>
    </div>
  );
};

export default ArrowDown;
