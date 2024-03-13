import Grid from "@mui/material/Grid";
import React from "react";
import { dessertItem } from "@/lib/data/menuData";
import ProductCard from "../ProductCard";

const DessertItems = () => {
  return (
    <>
      {" "}
      <div>
        <h2 className="fw-bold mb-5">Desserts</h2>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ width: "100%" }}
        >
          {dessertItem.map((dessert, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <ProductCard
                itemId={dessert.itemId}
                itemSrc={dessert.src}
                title={dessert.title}
                alt={dessert.alt}
                desc={dessert.desc}
                price={dessert.prices}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default DessertItems;
