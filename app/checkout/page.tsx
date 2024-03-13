"use client";
import Checkout from "@/components/Checkout";
import store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

const page = () => {
  return (
    <Provider store={store}>
      <Checkout />
    </Provider>
  );
};

export default page;
