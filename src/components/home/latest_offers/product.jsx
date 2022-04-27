import React from "react";

function Product() {
  return (
    <div className="flex flex-col items-center justify-center w-80 bg-primary-100 mr-5 ml-5 mt-2 mb-2 p-5 rounded-[40px]">
      <div className="w-[95%] flex justify-start">
        <span className="bg-info text-secondary rounded-3xl pr-2 pl-2">
          New
        </span>
      </div>
      <div className="flex justify-content h-[17rem] w-full">
        <img
          src="assets\images\products\hero_image.png"
          alt="Product Name"
          className="object-contain"
        ></img>
      </div>
      <h4 className="text-lg text-primary-600 font-semibold mt-5">Product Name</h4>
    </div>
  );
}

export default Product;
