import React from "react";

function Product(props) {
  let border = "border-[1px] border-primary-400 border-opacity-20";
  if (props.selected)
    border = "border-[1px] border-accent-200 border-opacity-100 scale-[1.02]";

  return (
    <div
      id={`category-${props.category}`}
      className={`support-product flex flex-col justify-center items-center bg-primary-100 m-5 w-[15rem] rounded-[30px]
     hover:cursor-pointer hover:bg-primary-200 overflow-hidden h-[15rem] ${border}`}
     onClick={(event) =>
      (window.location.href = `/support/${props.product._id}`)
    }
    >
      <img
        src={props.product.image}
        className="object-contain p-3 h-full"
        alt={props.product._id}
      />

      <div
        className="support-product-caption flex items-center justify-center w-full bg-primary-400 text-primary-800
       rounded-bl-[30px] rounded-br-[30px] p-2 whitespace-nowrap h-[2.5rem]"
      >
        {props.product.description}
      </div>
    </div>
  );
}

export default Product;
