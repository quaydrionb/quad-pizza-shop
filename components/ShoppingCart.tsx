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
import Link from "next/link";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isPageRefreshed = localStorage.getItem("isPageRefreshed");
    if (!isPageRefreshed) {
      localStorage.setItem("isPageRefreshed", "true");
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }

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

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const taxRate = 0.07;
  const taxAmount = totalAmount * taxRate;

  return (
    <div className="container mt-5">
      <h2
        className="text-center text-white py-3 rounded"
        style={{ backgroundColor: "#2B523D" }}
      >
        Your Cart
      </h2>
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : cartItems.length === 0 ? (
        <div className="row justify-content-center my-5">
          <div className="col-md-8 col-lg-6">
            <div className="card p-4">
              <div className="card-body text-center">
                <h2 className="mb-3">Your Cart is Empty</h2>
                <p>
                  It seems your cart is empty. Explore our menu and add some
                  items to your cart.
                </p>
                <Link href="/items">
                  <button className="btn btn-dark rounded-pill mt-3">
                    Return to Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            {cartItems.map((item: any, index: number) => (
              <div className="card mb-4 border-0 shadow-sm" key={index}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <Image
                        src={item.itemSrc}
                        alt={item.title}
                        width={300}
                        height={300}
                        className="img-fluid rounded-start order-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body d-flex flex-column h-100">
                      <h5 className="card-title mb-3">{item.title}</h5>
                      <div className="item-details">
                        <div className="item-detail">
                          <span className="detail-label">Price:</span>
                          <span className="detail-value">${item.price}</span>
                        </div>
                        <div className="item-detail">
                          <span className="detail-label">Size:</span>
                          <span className="detail-value">{item.size}</span>
                        </div>
                      </div>
                      <div className="actions mt-auto">
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Quantity"
                        >
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDecrement(index)}
                          >
                            -
                          </button>
                          <div className="btn btn-sm btn-light">
                            {item.quantity}
                          </div>
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() => handleIncrement(index)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="btn btn-sm btn-danger ms-auto"
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

          <div className="col-lg-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Shopping Cart</h5>
                <p className="card-text">Total Items: {cartItems.length}</p>
                <p className="card-text">Subtotal: ${totalAmount.toFixed(2)}</p>
                <p className="card-text">Tax (7%): ${taxAmount.toFixed(2)}</p>
                <hr />
                <p className="card-text fw-bold">
                  Total: ${(totalAmount + taxAmount).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <Link href="/items">
                <button
                  className="btn  rounded-pill text-white"
                  style={{ backgroundColor: "#2B523D" }}
                >
                  Continue Shopping
                </button>
              </Link>
              <button
                className="btn btn-danger rounded-pill"
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

export default ShoppingCart;
