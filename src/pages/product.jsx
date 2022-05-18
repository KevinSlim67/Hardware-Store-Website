import React from "react";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import NotImplemented from "../components/popups/not_implemented"
import Header from "../components/product/header";


function ProductPage() {
  return (
    <div>
      <NavBar selected="Product" />
        <Header />
      <Footer />
      <NotImplemented />
    </div>
  );
}

export default ProductPage;
