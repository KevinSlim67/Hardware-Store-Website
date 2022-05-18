import React from "react";
import { useDispatch } from "react-redux";
import { changeCountry } from "../../features/selectedCountry.js";
const countries = require("./area_code.js");

function CountryField(props) {
  const dispatch = useDispatch();

  const handleSelection = (value) => {
    dispatch(changeCountry({ country: value }));
  };

  return (
    <div className={`field ${props.className}`}>
      <label
        htmlFor="country"
        id="country-label"
        className={`required ${props.label}`}
      >
        Country
      </label>

      <div className="form-select w-full">
        <select
          id="country"
          name="country"
          required={true}
        >
          {countries.map((country) => (
            <option
              key={country.name}
              value={country.name}
              className="w-full"
              onClick={() => {
                handleSelection(country.name);
              }}
            >
              {country.flag} {country.name}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
}

export default CountryField;
