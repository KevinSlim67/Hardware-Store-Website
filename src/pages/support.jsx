import React from "react";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import ChooseProduct from "../components/support/choose_product";
import Header from "../components/support/header";

function SupportPage() {
  return (
    <div>
      <NavBar selected="Support" />
        <Header />
        <div className="p-20">
          <ChooseProduct />
        </div>
      <Footer />
    </div>
  );
}

export default SupportPage;
