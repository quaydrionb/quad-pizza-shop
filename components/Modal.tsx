"use client";

import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
interface Props {
  src: string;
  alt: string;
  title: string;
  desc: string;
  price?: number;
  productId?: string;
}

import {
  dessertItem,
  drinkItem,
  pizzaItem,
  wingItem,
} from "../lib/data/menuData";

export default function Modal({ title, src, alt, desc, productId }: Props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const browniePrice = 2.49;
  const cookiePrice = 1.29;
  const brownieCalorie = 210;
  const cookieCalorie = 125;
  // Pushing the arrays into the items array
  const items = [...drinkItem, ...dessertItem, ...pizzaItem, ...wingItem];
  return (
    <React.Fragment>
      <button
        onClick={handleClickOpen}
        className="btn  view-button text-decoration-none "
      >
        View Details
      </button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Product Details"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="card shadow mb-4 p-2" style={{ maxWidth: "20rem" }}>
              <Image
                src={src}
                className="card-img-top"
                alt={alt}
                height={300}
                width={300}
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
              </div>
              <ul className="list-group list-group-flush">
                {/* Render item details */}
                {items.map((item) => {
                  const { itemId, calories, prices } = item;

                  // Check if the item's ID matches the product ID
                  if (itemId === productId) {
                    return (
                      <div key={itemId} className="row item-details">
                        <div className="col-md-12">
                          <div className="card bg-light mb-3 p-2">
                            <div className="card-header bg-primary text-white">
                              Calories
                            </div>
                            <div
                              className="card-body"
                              style={{ fontSize: "0.8rem" }}
                            >
                              {/* Render calories based on size availability */}
                              {calories?.small && (
                                <p className="card-text">
                                  {calories.small === brownieCalorie ||
                                  calories.small === cookieCalorie
                                    ? `Per serving size: ${calories.small}`
                                    : `Small ${calories?.small}`}
                                </p>
                              )}
                              {calories?.medium && (
                                <p className="card-text">
                                  Medium: {calories.medium}
                                </p>
                              )}
                              {calories?.large && (
                                <p className="card-text">
                                  Large: {calories.large}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="card bg-light mb-3 p-2">
                            <div className="card-header bg-success text-white">
                              Prices
                            </div>
                            <div
                              className="card-body"
                              style={{ fontSize: "0.8rem" }}
                            >
                              {/* Render prices based on size availability */}
                              {prices?.small && (
                                <p className="card-text">
                                  {prices.small === browniePrice ||
                                  prices.small === cookiePrice
                                    ? `Per serving size: $${prices.small}`
                                    : `Small $${prices?.small}`}
                                </p>
                              )}
                              {prices?.medium && (
                                <p className="card-text">
                                  Medium: ${prices.medium}
                                </p>
                              )}
                              {prices?.large && (
                                <p className="card-text">
                                  Large: ${prices.large}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null; // Return null if the itemId doesn't match the productId
                })}
              </ul>

              <div className="card-body d-flex justify-content-between">
                <a onClick={handleClose} className="btn btn-primary mr-2">
                  Back Home
                </a>
                <a href="/items" className="btn btn-success">
                  Order Now
                </a>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
