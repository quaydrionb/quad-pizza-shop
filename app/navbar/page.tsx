"use client";
import NavBar from "@/components/home/NavBar";
import React from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";

const Nav = () => {
  return (
    <Provider store={store}>
      <NavBar />
    </Provider>
  );
};

export default Nav;
