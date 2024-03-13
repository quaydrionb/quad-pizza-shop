import Grid from "@mui/material/Grid";
import React from "react";
import { drinkItem } from "@/lib/data/menuData";
import ProductCard from "../ProductCard";

const DrinkItems = () => {
  return (
    <>
      {" "}
      <div>
        <h2 className="fw-bold mb-5">Drinks</h2>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ width: "100%" }}
        >
          {drinkItem.map((drink, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <ProductCard
                itemId={drink.itemId}
                itemSrc={drink.src}
                title={drink.title}
                alt={drink.alt}
                desc={drink.desc}
                price={drink.prices}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default DrinkItems;
