import React from "react";
import Product from "./product";

function ChooseDevice() {

  const defaultBorderClasses =
  "border-[1px] border-primary-400 border-opacity-20";

  const products = [
    { device: "Device 1", borderClasses: defaultBorderClasses  },
    { device: "Device 2", borderClasses: defaultBorderClasses },
    { device: "Device 3", borderClasses: defaultBorderClasses },
    { device: "Device 4", borderClasses: defaultBorderClasses },
    { device: "Device 5", borderClasses: defaultBorderClasses  },
    { device: "Device 6", borderClasses: defaultBorderClasses },
    { device: "Device 7", borderClasses: defaultBorderClasses },
    { device: "Device 8", borderClasses: defaultBorderClasses },
  ];

  return (
    <div>
      <h2 className="text-center text-4xl text-accent-600 font-bold mb-12">
        Choose your Device
      </h2>
      <div className="product-selection flex justify-center flex-wrap mr-5 ml-5">
        {
          //will create all product categories divs
          products.map((product) => (
            <Product
              key={`category-${product.device}`}
              category={product.device}
            />
          ))
        }
      </div>
    </div>
  );
}

export default ChooseDevice;
