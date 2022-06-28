import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Arrow from "../buttons/arrow";
import Product from "./product";

function ProductList(props) {
  const [products, setProducts] = useState([]);
  const [tracker, setTracker] = useState(0);

  const productsPerPage = 3;

  const handleLeftArrow = () => {
    if (tracker > 0) {
      setTracker(tracker - productsPerPage);
    }
  };

  const handleRightArrow = () => {
    if (tracker + productsPerPage < products.length) {
      setTracker(tracker + productsPerPage);
    }
  };

  const url = "http://localhost:5000/products";

  //useEffect prevents the GET request from happening infinitely
  useEffect(() => {
    axios
      .get(`${url}/category-and-limit`, {
        params: {
          category: props.category,
          page: 'product'
        },
      })
      .then((response) => {
        setProducts(response.data);
      });
  }, [props.category]);

  let shownProducts = products.slice(tracker, tracker + productsPerPage);

  return (
    <div className="w-full flex justify-center mt-10 mb-10">
      <div className="w-[90%]">
        <h3 className="capitalize text-[1.3rem] text-primary-700 font-semibold mb-7">
          {props.category}
        </h3>

        {products.length !== 0 && (
          <div className="relative flex justify-center w-full">
            <Arrow
              direction="left"
              className="absolute flex self-center left-[4.5rem]"
              onClick={handleLeftArrow}
            />
            {shownProducts.map((p) => (
              <Product product={p} key={p._id} />
            ))}
            <Arrow
              direction="right"
              className="absolute flex self-center right-[4.5rem]"
              onClick={handleRightArrow}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
