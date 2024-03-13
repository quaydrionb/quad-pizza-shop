import { Grid } from "@mui/material";
import React from "react";
import { wingItem } from "@/lib/data/menuData";
import ProductCard from "../ProductCard";

const WingItems = () => {
  return (
    <>
      {" "}
      <div>
        <h2 className="fw-bold mb-5">Wings</h2>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ width: "100%" }}
        >
          {wingItem.map((wing, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <ProductCard
                itemId={wing.itemId}
                itemSrc={wing.src}
                title={wing.title}
                alt={wing.alt}
                desc={wing.desc}
                price={wing.prices}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default WingItems;
