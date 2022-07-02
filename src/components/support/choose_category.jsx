import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../features/selectedCategory";
import Category from "./category";


function ChooseCategory() {
  const imgPath = 'assets/images/support';
  const [products, setProducts] = useState([
    { category: "Laptop", selected: true, image: `${imgPath}/laptop.png` },
    { category: "Smartphone", selected: false, image: `${imgPath}/smartphone.png` },
    { category: "Tablet", selected: false, image: `${imgPath}/tablet.png` },
    { category: "Smartwatch", selected: false, image: `${imgPath}/smartwatch.png` },
  ]);

  const dispatch = useDispatch();
  //will set selected in products as true for the inputted parameter, and the rest as false
  const handleSelection = (productCat) => {
    console.log(`Selected ${productCat} Category`);
    const newProducts = products.map((product) => {
      if (product.category === productCat) {
        dispatch(changeCategory({ category: product.category }));
        return { category: product.category, selected: true, image: product.image };
      }
      return { category: product.category, selected: false, image: product.image };
    });

    setProducts(newProducts);
  };

  return (
    <div className="mb-20">
      <h2 className="text-center text-4xl text-accent-600 font-bold mb-12">
        Choose your Category
      </h2>
      <div className="product-selection flex justify-center flex-wrap mr-5 ml-5">
        {
          //will create all product categories divs
          products.map((product) => (
            <Category
              key={`category-${product.category}`}
              category={product.category}
              selected={product.selected}
              onSelection={handleSelection}
              image={product.image}
            />
          ))
        }
      </div>
    </div>
  );
}

export default ChooseCategory;
