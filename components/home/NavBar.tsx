import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/type";
import { getCart } from "@/redux/cartSlice";

const cart = "/assets/icons/cart.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch cart data
      await dispatch(getCart());
      setIsLoading(false);
    };

    fetchData();

    // Check if the page is being refreshed
    const isPageRefreshed = localStorage.getItem("isPageRefreshed");
    if (!isPageRefreshed) {
      localStorage.setItem("isPageRefreshed", "true");
    }
  }, [dispatch, setIsLoading]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="nav-bar">
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
            className={`collapse navbar-collapse justify-content-end ${
              isMenuOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav fw-bold">
              <li className="nav-item">
                <Link href="/" className="nav-link" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#menu" className="nav-link" onClick={toggleMenu}>
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#about" className="nav-link" onClick={toggleMenu}>
                  About
                </Link>
              </li>
            </ul>
            <div className="icon-cart">
              <Link href="/cart" onClick={toggleMenu}>
                <button type="button" className="btn btn-sm">
                  {isLoading ? (
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={cart}
                        alt="cart"
                        width={40}
                        height={40}
                        className="icon-cart"
                      />
                      <span id="cartAmount" className="badge bg-dark">
                        {cartItems.length}
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
