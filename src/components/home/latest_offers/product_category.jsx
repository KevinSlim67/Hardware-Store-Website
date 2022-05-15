import React from "react";

function ProductCategory(props) {

  //if the category is selected, put an underline under it
  let selected = "";
  if (props.selected) selected = "underline";

  //capitalizes category name
  const capitalize = {
    textTransform: 'capitalize'
  };

  return (
    <button
      href={props.function}
      style={capitalize}
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
