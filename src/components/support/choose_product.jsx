import React, { useReducer } from "react";
import Product from "./product";

function ChooseProduct() {

  const defaultBorderClasses =
  "border-[1px] border-primary-400 border-opacity-20";

  const products = [
    { category: "Laptop", borderClasses: defaultBorderClasses  },
    { category: "Smartphone", borderClasses: defaultBorderClasses },
    { category: "Tablet", borderClasses: defaultBorderClasses },
    { category: "Smartwatch", borderClasses: defaultBorderClasses },
  ];

  return (
    <div className="mb-20">
      <h2 className="text-center text-4xl text-accent-600 font-bold mb-12">
        Choose your Product
      </h2>
      <div className="product-selection flex justify-center flex-wrap mr-5 ml-5">
        {
          //will create all product categories divs
          products.map((product) => (
            <Product
              key={`category-${product.category}`}
              category={product.category}
            />
          ))
        }
      </div>
    </div>
  );
}

export default ChooseProduct;
