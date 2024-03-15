"use client";

import ShoppingCart from "@/components/ShoppingCart";
import store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

const page = () => {
  return (
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  );
};

export default page;
