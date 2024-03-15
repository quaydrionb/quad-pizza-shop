"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { RootState } from "@/lib/type";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  getCart,
} from "@/redux/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const cartItems = useSelector((state: RootState) => state.cart.cart);

  const handleRemoveFromCart = (index: number) => {
    dispatch(removeFromCart(index));
  };

  const handleIncrement = (index: number) => {
    dispatch(incrementQuantity(index));
  };

  const handleDecrement = (index: number) => {
    dispatch(decrementQuantity(index));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        dispatch(getCart(JSON.parse(cartData)));
        setIsLoading(false);
      }
    }
  }, [dispatch]);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const taxRate = 0.07;
  const taxAmount = totalAmount * taxRate;

  return (
    <div className="container mt-5">
      <h2
        className="text-center text-white border rounded p-3"
        style={{ backgroundColor: "#2B523D" }}
      >
        Your Cart
      </h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : cartItems.length === 0 ? (
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 col-lg-6">
            <div className="card mt-5">
              <div className="card-body text-center">
                <h2>Oops! Looks Like Your Cart is Craving Something.</h2>
                <p>
                  It seems your cart is in need of a flavor boost! Explore our
                  menu and add some tasty items to satisfy those cravings.
                </p>
                <button
                  className="btn btn-small btn-outline-dark rounded"
                  onClick={() => window.history.back()}
                  style={{ color: "white", backgroundColor: "#6F1B19" }}
                >
                  Return to Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-12 col-lg-8">
            {cartItems.map((item: any, index: number) => (
              <div className="card mb-3" key={index}>
                <div className="row g-0">
                  <div className="col-4 col-md-4">
                    <div className="d-flex justify-content-center">
                      <Image
                        src={item.itemSrc}
                        alt={item.title}
                        width={200}
                        height={400}
                        className="img-fluid rounded-start order-img"
                        style={{ maxHeight: "200px" }}
                      />
                    </div>
                  </div>
                  <div className="col-8 col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">Price: ${item.price}</p>
                      <p className="card-text">Size: {item.size}</p>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-sm btn-outline-danger me-2"
                          onClick={() => handleDecrement(index)}
                        >
                          -
                        </button>
                        <div className="me-2">{item.quantity}</div>
                        <button
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={() => handleIncrement(index)}
                        >
                          +
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleRemoveFromCart(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Shopping Cart</h5>
                <p className="card-text">Total Items: {cartItems.length}</p>
                <p className="card-text">Subtotal: ${totalAmount.toFixed(2)}</p>
                <p className="card-text">Tax (7%): ${taxAmount.toFixed(2)}</p>
                <hr />
                <p className="card-text">
                  Total: ${(totalAmount + taxAmount).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <button
                className="btn btn-small btn-outline-dark rounded"
                onClick={() => window.history.back()}
                style={{ color: "white", backgroundColor: "#6F1B19" }}
              >
                Return to Shopping
              </button>
              <button
                className="btn btn-small btn-outline-danger rounded"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
