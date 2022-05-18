import React from "react";
import { useSelector } from "react-redux";

function CityField(props) {
  //gets the current selected country; if no country is selected, country will === null
  const country = useSelector((state) => state.selectedCountry.country);

  //gets an array of cities who's key is equal to country
  //Set() gets rid of duplicate values
  const cities = [...new Set(require("./countries.json")[country])];
  console.log(cities);

  return (
    <div className={`field ${props.className}`}>
      <label
        htmlFor="city"
        id="city-label"
        className={`required ${props.label}`}
      >
        City
      </label>

      <div className="form-select w-full">

        <select
          id="city"
          name="city"
          required={true}
        >
          {cities.map((city) => (
            <option key={`${country}-${city}`} value={city}>
              {city}
            </option>
          ))}
        </select>

      </div>

    </div>
  );
}

export default CityField;
