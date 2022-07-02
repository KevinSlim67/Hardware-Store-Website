import React from "react";
import SimpleSlider from "../sliders/simple_slider";

function Header() {

  const list = [];
  for (let i = 1; i <= 5; i++) {
    list.push(`assets/images/carousels/product_page/image_${i}.jpg`);
  }
  

  return (
    <SimpleSlider list={list} className="hero product-hero-height"/>
  );
}

export default Header;
