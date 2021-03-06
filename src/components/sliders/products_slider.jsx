import React, { Component } from "react";
import Slider from "react-slick";
import Product from "../product/product";

class ProductsSlider extends Component {
  render() {
    const { slidesToShow, slidesToScroll, speed, list, className } = this.props;
    const settings = {
      infinity: true,
      speed: speed,
      slidesToShow: slidesToShow,
      slidesToScroll: slidesToScroll,
      responsive: [
        {
          breakpoint: 1210,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 810,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <div className={`w-full flex justify-center ${className}`}>
        <Slider {...settings} className="w-full relative">
          {list.map((elem) => (
            <div key={elem._id}>
              <Product product={elem} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default ProductsSlider;
