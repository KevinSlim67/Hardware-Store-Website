import React, { useState } from "react";
import ProductsList from "./products_list";
import ProductCategory from "./product_category";
import {useDispatch, useSelector} from "react-redux";
import { setCategory } from "../../../features/latestProductCategory";


function LatestOffers() {

  const productCategory =  useSelector((state) => state.latestProductCategory.category)
  const dispatch = useDispatch();


  const [categories, setCategories] = useState([
    { name: "laptop", selected: true, function: "" },
    { name: "smartphone", selected: false, function: "" },
    { name: "tablet", selected: false, function: "" },
    { name: "smartwatch", selected: false, function: "" },
  ]);

  //will set selected in categories as true for the inputted parameter, and the rest as false
  const handleSelection = (categoryName) => {
    console.log(`Selected ${categoryName} Category`);
    const newCategories = categories.map((category) => {
      if (category.name === categoryName) {
        //changes global category variale in order to update displayed products
        dispatch(setCategory({category : category.name}));
        return { name: category.name, selected: true };
      }
      return { name: category.name, selected: false };
    });

    setCategories(newCategories);
  };

  return (
    <section className="bg-primary-200 flex flex-col items-center ">
      <h3 className="text-primary-600 text-3xl font-bold mb-10">
        Discover our latest offers
      </h3>
      <div>
        <ul className="products-selection flex justify-center">
          {
            //this will create all the category buttons needed
            categories.map((category) => {
              return (
                <li key={`${category.name}_navbar_page`}>
                  <ProductCategory
                    name={category.name}
                    function={category.function}
                    selected={category.selected}
                    onSelection={handleSelection}
                  />
                </li>
              );
            })
          }
        </ul>
      </div>
      <div>
        <ProductsList category={productCategory} limit={3} />
      </div>
    </section>
  );
}

export default LatestOffers;
