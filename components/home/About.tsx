import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="about-me-section border border-secondary rounded py-4 px-4 mb-3 bg-light container"
    >
      <h2 className="section-title mt-4 mb-5 pb-3 text-center position-relative">
        About Quad Pizzeria
        <div className="snake"></div>
      </h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col-md-6">
          <div className="about-item">
            <h3 className="item-title">Our Story</h3>
            <p className="item-description text-xl">
              {" "}
              Quad Pizzeria was born from a passion for creating exceptional
              pizzas with a twist. Founded in 2022, we set out on a mission to
              redefine the pizza experience by offering delicious square pizzas
              crafted with the finest ingredients and utmost care.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-item">
            <h3 className="item-title">Our Pizza</h3>
            <p className="item-description text-xl">
              {" "}
              At Quad Pizzeria, we believe in the power of innovation and
              tradition. Our square pizzas are a testament to this philosophy,
              combining classic flavors with modern flair. Each pizza is made
              from scratch, starting with our signature dough, hand-stretched to
              perfection. Topped with premium ingredients and baked to golden
              perfection, our pizzas are a feast for the senses.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-item">
            <h3 className="item-title">Our Commitment</h3>
            <p className="item-description text-xl">
              {" "}
              Quality is at the heart of everything we do at Quad Pizzeria. From
              sourcing the freshest produce to providing exceptional customer
              service, we are committed to excellence in every aspect of our
              business. We take pride in serving our community with delicious
              food and creating memorable dining experiences for our guests.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-item">
            <h3 className="item-title">Visit Us</h3>
            <p className="item-description text-xl">
              {" "}
              Located at <strong>123 Pizza Square Cityville, FL 12345</strong>.
              Our pizzeria is your neighborhood destination for gourmet square
              pizzas and warm hospitality. Whether you're dining in with friends
              and family or grabbing a quick bite on the go, we invite you to
              experience the Quad Pizzeria difference.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
