import React from "react";
import ProductsList from "./products_list";
import ProductCategory from "./product_category";

function LatestOffers() {
  return (
    <section className="bg-primary-200 flex flex-col items-center ">
      <h3 className="text-primary-600 text-3xl font-bold mb-10">
        Discover our latest offers
      </h3>
      <div>
        <ul className="products-selection flex justify-center">
          <li><ProductCategory name="Laptops" function="" /></li>
          <li><ProductCategory name="Smartphones" function="" /></li>
          <li><ProductCategory name="Tablets" function=""/></li>
          <li><ProductCategory name="Smartwatches" function="" /></li>
        </ul>
      </div>
      <div>
        <ProductsList />
      </div>
    </section>
  );
}

export default LatestOffers;
