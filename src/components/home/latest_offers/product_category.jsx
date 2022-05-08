import React from "react";

function ProductCategory(props) {
  let selected = "";
  if (props.selected) selected = "underline";

  return (
    <button
      href={props.function}
      className={`product-category text-primary-700 font-semibold hover:text-accent-400 mr-7 ml-7 mt-5 mb-7 ${selected}`}
      onClick={() => {
        props.onSelection(props.name);
      }}
    >
      {props.name}
    </button>
  );
}

export default ProductCategory;
