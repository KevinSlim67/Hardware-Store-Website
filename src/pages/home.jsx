import React from "react";
import AboutUs from "../components/home/about_us";
import NavBar from "../components/navbar/navbar";
import Header from "../components/home/header";
import LatestOffers from "../components/home/latest_offers/latest_offers";
import Footer from "../components/footer/footer";

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
