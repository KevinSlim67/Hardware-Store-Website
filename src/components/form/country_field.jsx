import React from "react";
import { useDispatch } from "react-redux";
import { changeCountry } from "../../features/selectedLocation.js";
import { Country } from "country-state-city";

function getCountryByCode(country) {
  const countryCodes = Country.getAllCountries().filter(
    (c) => c.name === country
  );
  return countryCodes[0].isoCode;
}

const flagEmojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt()).map(char => String.fromCharCode(char-127397).toLowerCase()).join('')
  return "<img src='https://flagcdn.com/24x18/" + countryCode + ".png'>"
}

function CountryField(props) {
  //create an array of all countrie's name, code and flag
  const countries = [
    ...Country.getAllCountries().map((c) => {
      return { name: c.name, isoCode: c.isoCode, flag: c.flag };
    }),
  ];

  const dispatch = useDispatch();
  //changes the global state of country to the value in the parameter
  const handleSelection = (e) => {
    const code = getCountryByCode(e.target.value);
    dispatch(changeCountry({ country: code }));
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
          onChange={handleSelection}
        >
          {countries.map((c) => (
            <option key={c.isoCode} value={c.name} className="w-full">
              {c.flag} {c.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CountryField;
