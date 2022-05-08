import React, { useState } from "react";
import Product from "./product";

function ChooseProduct() {
  const [products, setProducts] = useState([
    { category: "Laptop", selected: true },
    { category: "Smartphone", selected: false },
    { category: "Tablet", selected: false },
    { category: "Smartwatch", selected: false },
  ]);

  //will set selected in products as true for the inputted parameter, and the rest as false
  const handleSelection = (productCat) => {
    console.log(`Selected ${productCat} Category`);
    const newProducts = products.map((product) => {
      if (product.category === productCat) {
        return { category: product.category, selected: true };
      }
      return { category: product.category, selected: false };
    });

    setProducts(newProducts);
  };

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
              selected={product.selected}
              onSelection={handleSelection}
            />
          ))
        }
      </div>
    </div>
  );
}

export default ChooseProduct;
