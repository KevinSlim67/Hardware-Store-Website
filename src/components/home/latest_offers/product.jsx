import React from "react";
import RoutingButton from "../../buttons/routing_button";
import ProductName from "./product_name";

function Product(props) {

  //if the product has an image in the database, get the image, otherwise, use a default image
  let image = "assets/images/products/hero_image.png";
  if (props.product.image !== undefined) {
    image = props.product.image;
  }


  return (
    <div className="product-box relative flex flex-col items-center w-80 bg-primary-100 mb-5 mr-5 ml-5 mt-2 p-5 rounded-[40px]">
      <div className="w-[95%] flex justify-start">
        <span className="bg-info text-secondary rounded-3xl pr-2 pl-2">
          New
        </span>
      </div>
      <div className="home-product-image flex justify-center h-[17rem] w-full">
        <img src={image} alt={props.product.description} className="object-contain"></img>
      </div>

      <ProductName name={props.product.description.trim()} />

      <span className="home-product-name text-accent-800 text-[1.1rem] mt-2">{`$${props.product.price}`}</span>

      <RoutingButton
        className="product-buy-btn absolute pr-4 pl-4 pt-1 pb-1 bottom-8 text-primary-100"
        text="Buy"
        dest={`/product/${props.product._id}`}
      />
      {props.product.id}
    </div>
  );
}

export default Product;
