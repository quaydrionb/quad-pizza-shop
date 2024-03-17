"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import Section from "../Section";

const displayImages = [
  { imageUrl: "/assets/images/buffalo-wings.jpeg", alt: "buffalo wings" },
  { imageUrl: "/assets/images/quad-pizza.jpeg", alt: "quad pizza" },
  { imageUrl: "/assets/images/lemonade.jpeg", alt: "lemonade" },
  { imageUrl: "/assets/images/cookies.jpeg", alt: "cookies" },
];

const HeroSection = () => {
  return (
    <Section>
      <div className="row flex-lg-row-reverse align-items-center g-2 py-5 container-fluid mx-2 mt-4">
        <div className="col-lg-6">
          <h2 className="container fw-bolder text-green fs-lg-3">
            Discover the Quad Experience: Square Pizzas for Square Lovers!
          </h2>
          <div className="container mx-auto">
            <p className="fs-5 opacity-10">
              Excitement awaits you at Quad Pizzeria! Picture this: delicious
              square pizzas, mouthwatering wings, and an atmosphere buzzing with
              good vibes and arcade games. It's the perfect place to unwind and
              savor the flavor!
            </p>
            <div className="flex justify-content-center align-items-center">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <Image
                    src="/assets/images/star.svg"
                    key={index}
                    alt="star"
                    width={30}
                    height={30}
                  />
                ))}
              <span className="mt-3 mx-2 fw-bold text-green fs-5">
                500 Excellent Reviews
              </span>
            </div>
          </div>
          <div className="d-grid gap-2 d-sm-flex justify-content-center">
            <Link href="/items">
              <div className="text-center">
                <button
                  type="button"
                  className="mt-4 main-button btn btn-lg px-4"
                >
                  Order Now
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={4000}
            showArrows={false}
            showStatus={false}
          >
            {displayImages.map((image) => (
              <div className="text-center" key={image.alt}>
                <Image
                  src={image.imageUrl}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="object-fit-none  object-fit-sm-contain "
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
