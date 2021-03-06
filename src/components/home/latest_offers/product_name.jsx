import * as React from 'react';

function ProductName(props) {
  return (
    <h4
      className="home-product-name text-lg text-primary-600 font-semibold whitespace-nowrap"
    >
      {props.name}
    </h4>
  );
}

export default ProductName;
