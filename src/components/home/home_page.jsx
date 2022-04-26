import React from "react";
import AboutUs from "./about_us";
import Header from "./header";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="main-layout flex justify-center">
        <AboutUs />
      </div>
    </div>
  );
}

export default HomePage;
