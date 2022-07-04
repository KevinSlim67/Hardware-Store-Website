import React, { useState, useEffect } from "react";
import Product from "./product";
import axios from "axios";
import { url } from "../../../url";

function ProductsList(props) {
  //will return 3 products

  const [products, setProducts] = useState([]);

  const prodURL =  `${url}/products/`
  //useEffect prevents the GET request from happening infinitely
  useEffect(() => {
    axios
      .get(`${prodURL}/category-and-limit`, {
        params: { category: props.category, page: 'home/latest'},
      })
      .then((response) => {
        setProducts(response.data);
      });
  }, [props.category, props.limit]);

  return (
    <div className="mt-10 flex flex-wrap justify-center w-full">

      {/*Displays a message if we couldn't fetch any data from the server*/}
      {products.length === 0 && (
        <span className="text-red-600 text-center leading-[3.5rem] text-3xl">
          Sorry, we could not fetch any data ! <br />
          The server might be down
        </span>
      )}
      
      {products.map((product) => (
        <Product product={product} key={product.description} />
      ))}
    </div>
  );
}

export default ProductsList;
