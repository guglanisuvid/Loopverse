import React from "react";
import Uploop from "./Uploop";
import FilteredSpotify from "./FilteredSpotify";

const Products = () => {
  return (
    <section
      id="products"
      className="h-screen px-48 pt-24 pb-8 grid grid-cols-2 gap-24 justify-between"
    >
      <Uploop />
      <FilteredSpotify />
    </section>
  );
};

export default Products;
