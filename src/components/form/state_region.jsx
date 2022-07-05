import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeRegion } from "../../features/selectedLocation.js";
import { State } from "country-state-city";

function StateRegionField(props) {
  //gets the current selected country; if no country is selected, country will === null
  const countryCode = useSelector((state) => state.selectedLocation.country);

  const dispatch = useDispatch();
  //changes the global state of region to the value in the parameter
  const handleSelection = (value) => {
    dispatch(changeRegion({ region: value }));
  };

  const regions = State.getStatesOfCountry(countryCode);

  return (
    <div className={`field ${props.className}`}>
      <label
        htmlFor="state-province"
        id="state-province-label"
        className={`required ${props.label}`}
      >
        State / Region
      </label>

      <div className="form-select w-full">
        <select
          type="text"
          name="state-province"
          id="state-province"
          required={true}
        >
          {regions.map((r) => (
            <option
              key={`${countryCode}-${r.isoCode}`}
              value={r.name}
              onClick={() => handleSelection(r.isoCode)}
            >
              {r.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default StateRegionField;
