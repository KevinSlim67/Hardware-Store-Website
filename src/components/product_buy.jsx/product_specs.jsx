import React from "react";

//iterates over every object in data, and capitalizes their value if it's a string
function capitalizeData(data) {
  const newData = data;
  for (const prop in data) {
    if (typeof data[prop] === "string" && prop !== "image") {
      newData[prop] = newData[prop][0].toUpperCase() + newData[prop].slice(1);
    }
  }
  return newData;
}

//formats data so it looks more presentable to the user
let type = null,
  storage = null;
function formatData(data) {
  if (data.disk.storage !== undefined)
    storage = data.disk.storage.toUpperCase();
  if (data.disk.category !== undefined) type = data.disk.category.toUpperCase();
  data.ram = data.ram.toUpperCase();
}

function ProductSpecs(props) {
  const product = capitalizeData(props.data);
  formatData(product);

  return (
    <div className={`${props.className} w-[30%] mr-4 ml-4`}>
      <div className="flex justify-center w-full h-full bg-primary-400 rounded-[40px] bg-opacity-70 pb-5">
        <div className="w-[90%]">
          <div className="flex justify-center w-full h-[350px] mt-10">
            <img
              src={product.image}
              className="object-contain max-w-[95%] max-h-[95%]"
              alt={product.description}
            />
          </div>

          <div className="w-full flex justify-center mb-5">
            <span className="text-accent-600 text-2xl font-semibold">{`$${product.price}`}</span>
          </div>

          <hr className="border-primary-700 border-opacity-70 mb-6 " />

          <ul className="w-full flex flex-col items-start leading-[2rem] text-primary-600 font-semibold">
            <li>Brand : {product.brand}</li>
            <li>Color : {product.color}</li>
            <li>Operating System : {product.OS}</li>
            <li>CPU : {product.cpu}</li>
            <li>RAM : {product.ram}</li>
            <li>
              Storage : {type !== null && type} {storage !== null && storage}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductSpecs;
