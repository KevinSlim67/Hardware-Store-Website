import React, { useState, useEffect } from "react";
import Product from "./product";
import axios from "axios";

function ProductsList() {
  //will return 3 products

  const url = "http://localhost:5000/products";
  const [products, setProducts] = useState([]);

  //useEffect prevents the GET request from happening infinitely
  useEffect(() => {
    axios
      .get(`${url}/category-and-limit`, { params: { category: "laptop", limit: 2 } }) 
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  console.log(products);

  return (
    <div className="mt-10 flex flex-wrap justify-center w-full">
      {products.map((product) => (
        <Product product={product} key={product.description} />
      ))}
    </div>
  );
}

export default ProductsList;
