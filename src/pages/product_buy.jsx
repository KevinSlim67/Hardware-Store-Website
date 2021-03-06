import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import NavBar from "../components/navbar/navbar";
import ProductSpecs from "../components/product_buy.jsx/product_specs";
import ProductOrderForm from "../components/product_buy.jsx/product_order_form";
import { url } from "../url";

function ProductBuyPage() {
  //gets id that is in the url
  const { id } = useParams();

  const [data, setData] = useState(null);

  const prodURL =  `${url}/products/`
  //useEffect prevents the GET request from happening infinitely
  //this GET request will return all fields of the given ID
  useEffect(() => {
    axios.get(`${prodURL}/${id}`).then((response) => {
      setData(response.data);
    });
  }, [id]);


  return (
    <div className="page">
      <NavBar selected="Product" />
      <div className="flex justify-center w-full">
        {data !== null /* prevents rendering while the data hasn't been fetched yet */ && (
          <div className="product-buy-page flex justify-center w-[78.125rem] mt-16 mb-16">
            <ProductSpecs data={data} className="w-1/2 product-spec" />
            <ProductOrderForm data={data} className="w-1/2 product-order-form" />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductBuyPage;
