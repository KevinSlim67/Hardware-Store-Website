import React from "react";

function PostalZipCodeField(props) {

  return (
    <div className={`field ${props.className}`}>
      <label
        htmlFor="postal-zipcode"
        id="postal-zipcode-label"
        className={`required ${props.label}`}
      >
        Postal / Zip Code
      </label>

      <input
        type="text"
        name="postal-zipcode"
        id="postal-zipcode"
        className="form-input w-full"
        required={true}
      />
    </div>
  );
}

export default PostalZipCodeField;