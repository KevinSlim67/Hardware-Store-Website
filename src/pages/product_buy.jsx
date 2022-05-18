import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import ProductSpecs from "../components/product_buy.jsx/product_specs";
import ProductOrderForm from "../components/product_buy.jsx/product_order_form";

function ProductBuyPage() {
  //gets id that is in the url
  const { id } = useParams();

  const [data, setData] = useState(null);

  const url = "http://localhost:5000/products";
  //useEffect prevents the GET request from happening infinitely
  //this GET request will return all fields of the given ID
  useEffect(() => {
    axios.get(`${url}/${id}`).then((response) => {
      setData(response.data);
    });
  }, [id]);


  return (
    <div className="page">
      <NavBar selected="Product" />
      {data !== null && /* prevents rendering while the data hasn't been fetched yet */
        <div className="flex mt-16 mb-16">
          <ProductSpecs data={data} className="w-[40%]"/>
          <ProductOrderForm data={data} className="w-[60%]"/>
        </div>
      }
      <Footer />
    </div>
  );
}

export default ProductBuyPage;
