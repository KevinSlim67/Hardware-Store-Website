import React from "react";
import NavBar from "../components/navbar/navbar";
import ChooseProduct from "../components/support/choose_product";
import ChooseCategory from "../components/support/choose_category";
import Header from "../components/support/header";

function SupportPage() {
  return (
    <div>
      <NavBar selected="Support" />
        <Header />
        <div className="support-choosing p-20">
          <ChooseCategory />
          <ChooseProduct />
        </div>
    </div>
  );
}

export default SupportPage;
