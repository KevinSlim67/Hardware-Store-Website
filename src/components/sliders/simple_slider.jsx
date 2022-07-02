import React, { Component } from "react";
import Slider from "react-slick";

class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true
    }; //

    return (
      <div className={`w-full ${this.props.className}`}>
        <Slider {...settings}>
          {this.props.list.map((elem) => (
            <div className="object-cover w-full h-full">
              <img src={elem} className="w-full" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}


export default SimpleSlider;