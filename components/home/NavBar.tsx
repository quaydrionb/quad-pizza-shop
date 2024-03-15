"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/type";
import { getCart, CartItem } from "@/redux/cartSlice";

const cart = "/assets/icons/cart.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // Define the type for cartItems

  const dispatch = useDispatch();
  const cartData = useSelector((state: RootState) => state.cart.cart);

  useEffect(() => {
    const loadCartData = () => {
      if (typeof window !== "undefined") {
        const storedCartData = localStorage.getItem("cart");
        if (storedCartData) {
          const parsedCartData = JSON.parse(storedCartData);
          dispatch(getCart(parsedCartData));
          setCartItems(parsedCartData.cart);
          setIsLoading(false);
        } else {
          setIsLoading(false); // Set isLoading to false if cart data is not available
        }
      }
    };

    loadCartData();

    const handlePageRefresh = () => {
      setIsLoading(true); // Set isLoading to true on page refresh
    };

    window.addEventListener("beforeunload", handlePageRefresh);

    return () => {
      window.removeEventListener("beforeunload", handlePageRefresh);
    };
  }, [dispatch]);

  useEffect(() => {
    if (cartData && cartData.length > 0) {
      setCartItems(cartData);
    }
  }, [cartData]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container-fluid nav-bar">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link href="/" className="navbar-brand">
            <Image
              src="/assets/images/pizza-logo.png"
              width={110}
              height={110}
              alt="logo"
              className="logo"
              priority={false}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul
              className="navbar-nav ms-auto fw-bold"
              onClick={(event) => {
                event.preventDefault();

                const target = event.target as HTMLLinkElement;
                const id = target.getAttribute("href")?.replace("/#", "");
                const element = document.getElementById(String(id));

                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <li className="nav-item">
                <Link href="/#menu" className="nav-link" onClick={toggleMenu}>
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#about" className="nav-link" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#arcade" className="nav-link" onClick={toggleMenu}>
                  Arcade
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/#contact"
                  className="nav-link"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="icon-cart">
              <Link href="/checkout" onClick={toggleMenu}>
                <button type="button" className="btn btn-sm">
                  {isLoading ? (
                    <>
                      <div
                        id="cartAmount"
                        className="spinner-border"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={cart}
                        alt="cart"
                        width={40}
                        height={40}
                        className="icon-cart"
                      />
                      <span id="cartAmount" className="badge bg-dark">
                        {(cartItems || []).length === 0
                          ? "0"
                          : (cartItems || []).length}
                      </span>
                    </>
                  )}
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
