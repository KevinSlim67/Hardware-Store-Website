import React from "react";
import { useDispatch } from "react-redux";
import { changeCountry } from "../../features/selectedLocation.js";
import { Country } from "country-state-city";

function CountryField(props) {
  
  //create an array of all countrie's name, code and flag
  const countries = [
    ...Country.getAllCountries().map((c) => {
      return { name: c.name, isoCode: c.isoCode, flag: c.flag};
    }),
  ];

  
  const dispatch = useDispatch();
  //changes the global state of country to the value in the parameter
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
        <select id="country" name="country" required={true}>
          {countries.map((c) => (
            <option
              key={c.isoCode}
              value={c.name}
              className="w-full"
              onClick={() => handleSelection(c.isoCode)}
            >
              {c.flag} {c.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CountryField;
