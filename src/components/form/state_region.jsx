import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeRegion } from "../../features/selectedLocation.js";
import { State } from "country-state-city";

function getRegionByCode(state) {
  const regionCodes = State.getAllStates().filter((s) => s.name === state);
  return regionCodes[0].isoCode;
}

function StateRegionField(props) {
  //gets the current selected country; if no country is selected, country will === null
  const countryCode = useSelector((state) => state.selectedLocation.country);

  const dispatch = useDispatch();
  //changes the global state of region to the value in the parameter
  const handleSelection = (e) => {
    const code = getRegionByCode(e.target.value);
    dispatch(changeRegion({ region: code }));
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
          onChange={handleSelection}
        >
          {regions.map((r) => (
            <option
              key={`${countryCode}-${r.isoCode}`}
              value={r.name}
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
