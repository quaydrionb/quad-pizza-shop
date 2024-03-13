"use client";
import Order from "@/components/Order";
import React from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";

const page = () => {
  return (
    <>
      <Provider store={store}>
        <Order />
      </Provider>
    </>
  );
};

export default page;
