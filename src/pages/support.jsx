import React from "react";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import NotImplemented from "../components/popups/not_implemented"
import ChooseDevice from "../components/support/choose_device";
import ChooseProduct from "../components/support/choose_product";
import Header from "../components/support/header";

function SupportPage() {
  return (
    <div>
      <NavBar selected="Support" />
        <Header />
        <div className="support-choosing p-20">
          <ChooseProduct />
          <ChooseDevice />
        </div>
      <Footer />
      <NotImplemented />
    </div>
  );
}

export default SupportPage;
