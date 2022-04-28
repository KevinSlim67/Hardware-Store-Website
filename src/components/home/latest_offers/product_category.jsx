import React from "react";

function ProductCategory(props) {
  return (
    <a
      href={props.function}
      className="product-category text-primary-700 font-semibold hover:text-accent-400  m-7"
    >
      {props.name}
    </a>
  );
}

export default ProductCategory;
