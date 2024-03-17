"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "@mui/material";
import Section from "../Section";
import joyStick from "../../public/assets/icons/joystick.svg";
import credit from "../../public/assets/icons/cash-coin.svg";
import deal from "../../public/assets/icons/piggy-bank-fill.svg";
import arcade1 from "../../public/assets/images/arcade.jpeg";
import arcade2 from "../../public/assets/images/woman-arcade.jpeg";
import arcade3 from "../../public/assets/images/kids-arcade.jpeg";
const arcadeImages = [arcade1, arcade2, arcade3];

const Arcade = () => {
  return (
    <Container id="arcade">
      <h2 className="text-center text-green">Join the Fun in Our Arcade!</h2>
      <p className="red-text fs-4 text-center">
        At Quad Pizzeria, we're not just about fantastic square pizzas; we're
        also your go-to spot for arcade fun! Step into our arcade area and let
        the good times roll. Whether you're a gaming pro or just looking for
        some casual fun, there's something for everyone.
      </p>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={4000}
        showArrows={false}
        showStatus={false}
        className="mx-auto"
      >
        {arcadeImages.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Arcade Image ${index + 1}`}
              width={500}
              height={500}
              className=" object-fit-scale rounded carousel-bg"
            />
          </div>
        ))}
      </Carousel>
      <Section>
        <div className="container px-4 py-5 text-center" id="featured-3">
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <Feature
              icon={joyStick}
              title="Arcade Pass"
              description="Entry Fee: $5.00 per person"
            />
            <Feature
              icon={credit}
              title="Game Credits"
              description="Individual Game Credits: $0.50 each"
              extraDescription="Bundle (20 credits): $8.00"
            />
            <Feature
              icon={deal}
              title="Specials"
              description="Happy Hour: 20% off arcade passes"
            />
          </div>
        </div>
      </Section>
    </Container>
  );
};

const Feature = ({ icon, title, description, extraDescription }: any) => {
  return (
    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center icon-background rounded bg-gradient fs-2 mb-3">
        <Image src={icon} width={30} height={30} alt={title} className="m-2" />
      </div>
      <h4 className="fs-2 text-green">{title}</h4>
      <p>{description}</p>
      {extraDescription && <p>{extraDescription}</p>}
    </div>
  );
};

export default Arcade;
