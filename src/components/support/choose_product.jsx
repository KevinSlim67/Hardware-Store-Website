import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Product from "./product";


function ChooseProduct() {
  //gets the current selected category
  const category = useSelector((state) => state.selectedCategory.category);
  const categorySelected = category.toLowerCase();
  const [products, setProducts] = useState(null);

  const url = "http://localhost:5000/products";
  //useEffect prevents the GET request from happening infinitely
  useEffect(() => {
    axios
      .get(`${url}/category-and-limit`, {
        params: { category: categorySelected, page: 'support' },
      })
      .then((response) => {
        setProducts(response.data);
      });
  }, [categorySelected]);

  return (
    <div>
      <h2 className="text-center text-4xl text-accent-600 font-bold mb-12">
        Choose your Device
      </h2>
      <div className="product-selection flex justify-center flex-wrap mr-5 ml-5">
        {
          //will create all product categories divs
          products !== null &&
          products.map((product) => (
            <Product
              key={product._id}
              product={product}
            />
          ))
        
        }
      </div>
    </div>
  );
}

export default ChooseProduct;
