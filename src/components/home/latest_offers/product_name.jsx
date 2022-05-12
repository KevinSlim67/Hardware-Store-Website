import React from "react";

function ProductName(props) {
  return (
    <h4 className="home-product-name text-lg text-primary-600 font-semibold mt-5">
      {props.name}
    </h4>
  );
}

export default ProductName;