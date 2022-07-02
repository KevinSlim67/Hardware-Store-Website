import React from "react";
import RoutingButton from "../buttons/routing_button";

function Product(props) {
  //if the product has an image in the database, get the image, otherwise, use a default image
  let image = "assets/images/products/hero_image.png";
  if (props.product.image !== undefined) {
    image = props.product.image;
  }

  return (
    <div
      className="product-box relative flex flex-col items-center w-[17rem] bg-primary-100 mt-0 mb-0 mr-auto ml-auto
     rounded-[10px] border-primary-400 border-[1px] border-opacity-10 overflow-hidden"
      onClick={(event) =>
        (window.location.href = `/product/${props.product._id}`)
      }
    >
      <div className="home-product-image flex justify-center h-[14rem] w-[90%] m-5">
        <img
          src={image}
          alt={props.product.description}
          className="object-contain"
        ></img>
      </div>

      <div className="relative bg-white w-full flex flex-col items-center pb-5">
        <h4 className="home-product-name text-1xl text-primary-600 font-semibold mt-5 whitespace-nowrap">
          {props.product.description}
        </h4>

        <span className="home-product-name text-accent-800 text-[1.1rem] mt-2">{`$${props.product.price}`}</span>

        <RoutingButton
          className="product-buy-btn pr-4 pl-4 pt-1 pb-1 text-primary-100"
          text="Buy"
          dest={`/product/${props.product._id}`}
        />
      </div>
    </div>
  );
}

export default Product;
