"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import Selector from "./Selector";

interface Props {
  itemId: string;
  itemSrc: string;
  alt: string;
  title: string;
  desc: string;
  price: {
    small: number;
    medium?: number;
    large?: number;
  };
}

const ProductCard = ({ itemId, itemSrc, alt, title, desc, price }: Props) => {
  const [selectedSize, setSelectedSize] = useState("small");
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility
  const dispatch = useDispatch();

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    const selectedPrice = price[selectedSize as keyof typeof price];
    if (selectedPrice) {
      dispatch(
        addToCart({
          itemId,
          itemSrc,
          title,
          price: selectedPrice,
          size: selectedSize,
          quantity: 1,
        }),
      );
      setShowAlert(true); // Show the alert
      setTimeout(() => {
        setShowAlert(false); // Hide the alert after 3 seconds
      }, 3000);
    } else {
      alert("Price not available for the selected size");
    }
  };

  return (
    <div className="position-relative" style={{ width: "18rem" }}>
      {/* Alert */}
      {showAlert && (
        <div
          className="alert alert-light alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x"
          role="alert"
          style={{ zIndex: 999 }}
        >
          <strong>Success!</strong> Item added to cart.
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowAlert(false)}
          ></button>
        </div>
      )}

      <div className="card rounded-3 shadow" style={{ width: "100%" }}>
        <Image
          src={itemSrc}
          alt={alt}
          width={400}
          height={400}
          className="card-img-top order-img"
        />
        <div className="card-body">
          <div>
            <h5 className="card-title">
              {title}{" "}
              <span className="mx-2 text-green">
                $
                {selectedSize && price[selectedSize as keyof typeof price]
                  ? price[selectedSize as keyof typeof price]
                  : "Price not available"}
              </span>
            </h5>
            <p className="card-text">{desc}</p>
          </div>
        </div>
        <div
          className="container mb-3"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Selector onChange={handleSizeChange} prices={price} />
            <Button
              size="small"
              className="add-to-cart"
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
