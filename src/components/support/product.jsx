import React from "react";

function Product(props) {
  let border = "border-[1px] border-primary-400 border-opacity-20";
  if (props.selected)
    border =
      "border-[1px] border-accent-200 border-opacity-100 selected-shadow scale-[1.02]";

  return (
    <div
      id={`category-${props.category}`}
      className={`support-product flex flex-col justify-center items-center bg-primary-100 m-5 w-[15rem] rounded-[30px]
     hover:cursor-pointer hover:bg-primary-200 ${border}`}
      onClick={() => props.onSelection(props.category)}
    >
      <img
        src="assets\images\products\hero_image.png"
        className="object-contain p-4"
        alt="hero"
      />
      <div
        className="support-product-caption w-full text-center bg-primary-400 text-primary-800
       rounded-bl-[30px] rounded-br-[30px] p-2"
      >
        {props.category}
      </div>
    </div>
  );
}

export default Product;
