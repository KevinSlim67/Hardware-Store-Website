import React from "react";

function HeroBanner() {
  return (
    <div className="hero-header flex justify-end h-auto bg-primary-400">
      <h2 className="hero-text flex items-center a text-primary-600 text-[4vw]
       text-center font-bold w-[32%] min-w-[400px] mr-5 pr-10 pl-10 pt-3 pb-5 leading-[3rem]">
        Stay up to date with the latest technologies
      </h2>
      <div className="hero-image w-1/2 p-4 flex items-center">
        <img
          src="assets\images\products\hero_image.png"
          className="max-w-full max-h-[450px]"
          alt="Laptop"
        />
      </div>
    </div>
  );
}

export default HeroBanner;
