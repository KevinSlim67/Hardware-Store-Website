import React from "react";
import ProductsList from "./products_list";
import ProductCategory from "./product_category";

const categories = [
  {
    name: "Laptops",
    function: "",
    selected: true,
  },
  {
    name: "Smartphones",
    function: "",
    selected: false,
  },
  {
    name: "Tablets",
    function: "",
    selected: false,
  },
  {
    name: "Smartwatches",
    function: "",
    selected: false,
  },
];

function LatestOffers() {
  return (
    <section className="bg-primary-200 flex flex-col items-center ">
      <h3 className="text-primary-600 text-3xl font-bold mb-10">
        Discover our latest offers
      </h3>
      <div>
        <ul className="products-selection flex justify-center">
          {
            //this will create all the category buttons needed
            categories.map((category) => (
              <li>
                <ProductCategory
                  name={category.name}
                  function={category.function}
                  selected={category.selected}
                />
              </li>
            ))
          }
        </ul>
      </div>
      <div>
        <ProductsList />
      </div>
    </section>
  );
}

export default LatestOffers;
