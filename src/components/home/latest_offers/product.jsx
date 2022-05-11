import React from "react";
import { useDispatch } from "react-redux";
import { displayFlex } from "../../../features/notImplemented";
import Button from "../../buttons/button";
import ProductName from "./product_name";

function Product() {

  const dispatch = useDispatch();

  return (
    <div className="product-box relative flex flex-col items-center w-80 bg-primary-100 mb-5 mr-5 ml-5 mt-2 p-5 rounded-[40px]">
      <div className="w-[95%] flex justify-start">
        <span className="bg-info text-secondary rounded-3xl pr-2 pl-2">
          New
        </span>
      </div>
      <div className="home-product-image flex justify-content h-[17rem] w-full">
        <img
          src="assets\images\products\hero_image.png"
          alt="Product Name"
          className="object-contain"
        ></img>
      </div>
      <ProductName name="Product Name" />
      <Button
          className="product-buy-btn absolute pr-4 pl-4 pt-1 pb-1 bottom-5 text-primary-100"
          text="Buy"
          function={() => dispatch(displayFlex())}
        />
        
    </div>
  );
}

export default Product;
