import React from "react";
import { useSelector } from "react-redux";
import { City } from "country-state-city";

function CityField(props) {
  //gets the current selected country; if no country is selected, country will === null
  const regionCode = useSelector((state) => state.selectedLocation.region);
  const countryCode = useSelector((state) => state.selectedLocation.country);

  let cities = City.getCitiesOfState(countryCode, regionCode);
  let key;

  if (cities.length === 0) {
  
    //gets rid of duplicate cities
    const seen = new Set();
    cities = City.getCitiesOfCountry(countryCode).filter(
      (c) => seen.size < seen.add(`${c.name}-${c.countryCode}`).size
    );

    key = `${countryCode}`;
  } else {
    key = `${countryCode}-${regionCode}`;
  } 

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
        <select id="city" name="city" required={true}>
          {cities.map((c) => (
            <option
              key={`${key}-${c.name}`}
              value={c.name}
            >
              {c.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CityField;
