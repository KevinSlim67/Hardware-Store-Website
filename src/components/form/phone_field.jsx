import React from "react";
const countries = require("./area_code.js");

function PhoneField(props) {
  let count = 0;

  return (
    <div className="field">
      <label
        htmlFor="phone"
        id="phone-label"
        className={`required ${props.label}`}
      >
        Phone Number
      </label>

      <div className="flex w-full ">

        <div className="form-select w-[20%] mr-3">
          <select
            id="area-code"
            name="area-code"
            required={true}
          >
            {countries.map((country) => (
              <option key={`code-${count++}`} value={country.dial_code}>
                {country.flag} {country.dial_code}{" "}
              </option>
            ))}
          </select>
          
        </div>

        <input
          name="phone"
          id="phone"
          type="tel"
          className="form-input w-[80%]"
          required={true}
        />
      </div>
    </div>
  );
}

export default PhoneField;
