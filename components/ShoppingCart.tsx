import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      {cartItems.length > 0 && (
        <h2 className="text-center text-white py-3 rounded mb-2 bg-green">
          Your Cart
        </h2>
      )}
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
                  <button className="btn btn-green rounded-pill">
                    Return to Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-7">
            {cartItems.map((item: any, index: number) => (
              <div className="card mb-4 shadow  border-1" key={index}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <img
                        src={item.itemSrc}
                        alt={item.alt}
                        style={{
                          width: "220px",
                          height: "220px",
                          objectFit: "cover",
                        }}
                        className="img-thumbnail"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body d-flex flex-column justify-content-between h-100">
                      <div>
                        <h5 className="card-title mb-3 fs-4 text-green fw-bold">
                          {item.title}
                        </h5>
                        <div className="item-details">
                          <div className="item-detail">
                            <span className="detail-label">Price:</span>
                            <span className="detail-value">${item.price}</span>
                          </div>
                          <div className="item-detail">
                            <span className="detail-label ">Size:</span>
                            <span className="detail-value">
                              {item.size.charAt(0).toUpperCase() +
                                item.size.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="actions">
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
                            className="btn btn-sm bg-green"
                            onClick={() => handleIncrement(index)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="btn btn-sm btn-danger ms-2"
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

          <div className="col-lg-5">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Shopping Cart Summary</h5>
                <hr />
                <div className="d-flex justify-content-between mb-2">
                  <p>Total Items:</p>
                  <p>{cartItems.length}</p>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <p>Subtotal:</p>
                  <p>${totalAmount.toFixed(2)}</p>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <p>Tax (7%):</p>
                  <p>${taxAmount.toFixed(2)}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="fw-bold">Total:</p>
                  <p>${(totalAmount + taxAmount).toFixed(2)}</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <Link href="/items">
                <button className="btn btn-green rounded-pill">
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
