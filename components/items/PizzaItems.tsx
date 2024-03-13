"use client";
import * as React from "react";
import ProductCard from "../ProductCard";
import Grid from "@mui/material/Grid";
import { pizzaItem } from "../../lib/data/menuData";

const PizzaItems = () => {
  return (
    <div>
      <h2 className="fw-bold mb-5">Pizza</h2>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ width: "100%" }}
      >
        {pizzaItem.map((pizza, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <ProductCard
              itemId={pizza.itemId}
              itemSrc={pizza.src}
              title={pizza.title}
              alt={pizza.alt}
              desc={pizza.desc}
              price={pizza.prices}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PizzaItems;
