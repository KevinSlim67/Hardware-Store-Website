import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Product from "./product";
import axios from "axios";

function ProductsList(props) {
  //will return 3 products

  const [products, setProducts] = useState([]);

  
  const url = "http://localhost:5000/products";
  //useEffect prevents the GET request from happening infinitely
  useEffect(() => {
    axios
      .get(`${url}/category-and-limit`, { params: { category: props.category, limit: props.limit } }) 
      .then((response) => {
        setProducts(response.data);
      });
  }, [props.category, props.limit]);

  return (
    <div className="mt-10 flex flex-wrap justify-center w-full">
      {products.map((product) => (
        <Product product={product} key={product.description} />
      ))}
    </div>
  );
}

export default ProductsList;
