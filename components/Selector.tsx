"use client";

import React from "react";

interface SelectorProps {
  onChange: (size: string) => void;
  prices: {
    small?: number;
    medium?: number;
    large?: number;
  };
}

const Selector: React.FC<SelectorProps> = ({ onChange, prices }) => {
  const availableSizes = Object.keys(prices).filter(
    (size) => prices[size as keyof typeof prices] !== undefined,
  );

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select
      onChange={handleSizeChange}
      className="form-select-sm border-dark text-uppercase mx-3"
      style={{ cursor: "pointer" }}
    >
      {availableSizes.map((size) => (
        <option key={size} value={size}>
          {size}
        </option>
      ))}
    </select>
  );
};

export default Selector;
