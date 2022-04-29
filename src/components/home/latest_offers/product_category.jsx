import React from "react";
import {useState} from "react";

function ProductCategory(props) {

  const [select, setSelect] = useState(props.selected);

  let selected;
  if (select) selected = "underline";
  else selected = "";

  return (
    <button
      href={props.function}
      onClick= {() => {
        setSelect(true);
      }}
      className={`product-category text-primary-700 font-semibold hover:text-accent-400 mr-7 ml-7 mt-5 mb-7 ${selected}`}
    >
      {props.name}
    </button>
  );
}

export default ProductCategory;
