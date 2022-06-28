import React from "react";
import NavBar from "../components/navbar/navbar";
import Header from "../components/product/header";
import ProductList from "../components/product/product_list";


function ProductPage() {
  return (
    <div>
      <NavBar selected="Product" />
        <Header />
        <ProductList category="laptop"/>
        <ProductList category="smartphone"/>
        <ProductList category="tablet"/>
        <ProductList category="smartwatch"/>
    </div>
  );
}

export default ProductPage;
