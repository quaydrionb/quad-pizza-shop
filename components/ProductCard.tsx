"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
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
  const [openAlert, setOpenAlert] = useState(false); // State to control alert visibility
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
      setOpenAlert(true); // Show the alert
    } else {
      alert("Price not available for the selected size");
    }
  };

  const handleCloseAlert = () => {
    setOpenAlert(false); // Hide the alert
  };

  return (
    <div className="position-relative" style={{ width: "18rem" }}>
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Item added to cart.
        </MuiAlert>
      </Snackbar>

      <div className="card rounded-3 shadow">
        <img
          src={itemSrc}
          alt={alt}
          style={{ width: "300px", height: "300px", objectFit: "cover" }}
          className="img-thumbnail"
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
            <button className="btn btn-md btn-green" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
