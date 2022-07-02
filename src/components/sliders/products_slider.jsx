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
      <div className={`w-[90%] flex justify-center ${className}`}>
        <Slider {...settings} className="w-[95%] relative">
          {list.map((elem) => (
            <div>
              <Product product={elem} key={elem._id} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default ProductsSlider;
