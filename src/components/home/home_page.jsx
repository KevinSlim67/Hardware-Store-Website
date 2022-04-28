import React from "react";
import AboutUs from "./about_us";
import NavBar from "../navbar/navbar";
import Header from "./header";
import LatestOffers from "./latest_offers/latest_offers";
import Footer from "../footer/footer";

function HomePage() {
  return (
    <div className="page">
      <NavBar />
      <Header />
      <div className="main-layout flex flex-col items-stretch">
        <AboutUs />
        <LatestOffers />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
