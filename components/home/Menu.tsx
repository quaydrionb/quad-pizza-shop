import MenuCard from "../MenuCard";

import {
  dessertItem,
  drinkItem,
  pizzaItem,
  wingItem,
} from "../../lib/data/menuData";
import Grid from "@mui/material/Grid";

const Menu = () => {
  return (
    <>
      <div id="menu" className="container mb-3 rounded-3 pt-5 mt-5 pb-5">
        <div className="menu-title text-center mt-5 py-5 container">
          <h2 className="top-header">&mdash; Our Menu &mdash;</h2>
        </div>

        <main className="container menu-heading-background">
          <div className="menu pt-3">
            <h2 className="menu-group-heading">Pizzas</h2>
            <div className="menu-group">
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 5 }}
                sx={{ width: "100%" }}
              >
                {pizzaItem.map((pizza, index) => (
                  <Grid key={index} item xs={12} sm={12} md={10} lg={6} xl={6}>
                    <MenuCard
                      id={pizza.itemId}
                      itemSrc={pizza.src}
                      title={pizza.title}
                      alt={pizza.alt}
                      desc={pizza.desc}
                      prices={pizza.prices?.medium}
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
          <div className="menu">
            <h2 className="menu-group-heading mt-3 mt-xl-0">Wings</h2>
            <div className="menu-group">
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 2, xl: 5 }}
                sx={{ width: "100%" }}
              >
                {wingItem.map((wing, index) => (
                  <Grid key={index} item xs={12} sm={12} md={10} lg={6} xl={6}>
                    <MenuCard
                      id={wing.itemId}
                      itemSrc={wing.src}
                      title={wing.title}
                      alt={wing.alt}
                      desc={wing.desc}
                      prices={wing.prices.medium}
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
          <div className="menu">
            <h2 className="menu-group-heading mt-3">Drinks</h2>
            <div className="menu-group">
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 2, xl: 5 }}
                sx={{ width: "100%" }}
              >
                {drinkItem.map((drink, index) => (
                  <Grid key={index} item xs={12} sm={12} md={10} lg={6}>
                    <MenuCard
                      id={drink.itemId}
                      itemSrc={drink.src}
                      title={drink.title}
                      alt={drink.alt}
                      desc={drink.desc}
                      prices={drink.prices.medium}
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
          <div className="menu">
            <h2 className="menu-group-heading mt-3">Desserts</h2>
            <div className="menu-group">
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 2, xl: 5 }}
                sx={{ width: "100%" }}
              >
                {dessertItem.map((dessert, index) => (
                  <Grid key={index} item xs={12} sm={12} md={10} lg={6}>
                    <MenuCard
                      id={dessert.itemId}
                      itemSrc={dessert.src}
                      title={dessert.title}
                      alt={dessert.alt}
                      desc={dessert.desc}
                      prices={dessert.prices?.small}
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Menu;
