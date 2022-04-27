import React from "react";
import Product from "./product";

function ProductsList(props) {
  return (
    <div className="mt-10 flex flex-wrap justify-center w-full">
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default ProductsList;
