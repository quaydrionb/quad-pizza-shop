"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PizzaItems from "./items/PizzaItems";
import WingItems from "./items/WingItems";
import DrinkItems from "./items/DrinkItems";
import DessertItems from "./items/DessertItems";
import Link from "next/link";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `horizontal-tab-${index}`,
    "aria-controls": `horizontal-tabpanel-${index}`,
  };
}

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Pizza" {...a11yProps(0)} />
        <Tab label="Wings" {...a11yProps(1)} />
        <Tab label="Drinks" {...a11yProps(2)} />
        <Tab label="Desserts" {...a11yProps(3)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <PizzaItems />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WingItems />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DrinkItems />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DessertItems />
      </TabPanel>
      <div className="d-flex justify-content-end mb-3 mx-3">
        <Link href="/" className="btn btn-dark  btn-sm rounded-3">
          <i className="bi bi-house-door"></i> Back to Home
        </Link>
      </div>
    </Box>
  );
}
