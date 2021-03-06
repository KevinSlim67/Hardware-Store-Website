import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { url } from "../../url";
import ProductsSlider from "../sliders/products_slider";

function ProductList(props) {
  const [products, setProducts] = useState([]);

  const prodURL = `${url}/products/`;
  //useEffect prevents the GET request from happening infinitely
  useEffect(() => {
    axios
      .get(`${prodURL}/category-and-limit`, {
        params: {
          category: props.category,
          page: "product",
        },
      })
      .then((response) => {
        setProducts(response.data);
      });
  }, [props.category]);

  return (
    <div className="w-full flex justify-center mt-10 mb-10">
      <div className="w-[90%]">
        <h3 className="capitalize text-[1.3rem] text-primary-700 font-semibold mb-7">
          {props.category}
        </h3>

        <div className="w-full flex justify-center">
          <div className="w-[90%] flex justify-center">
            {products.length !== 0 && (
              <ProductsSlider
                list={products}
                slidesToShow={3}
                slidesToScroll={1}
                speed={200}
                className="product-list"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
