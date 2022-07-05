import React from "react";
import { Country } from "country-state-city";

function PhoneField(props) {

  //gets all countries and returns their name, code, flag and phonecode
  const countries = [
    ...Country.getAllCountries().map((c) => {
      return {
        name: c.name,
        isoCode: c.isoCode,
        flag: c.flag,
        phonecode: c.phonecode,
      };
    }),
  ];

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
        <div className="form-select product-area-field mr-3">
          <select id="area-code" name="area-code" required={true}>
            {countries.map((c) => (
              <option
              key={`${c.name}-${c.phonecode}`}
              value={c.phonecode}
            >
              {c.flag} {c.phonecode}
              </option>
            ))}
          </select>
        </div>

        <input
          name="phone"
          id="phone"
          type="tel"
          className="form-input product-tel-field"
          required={true}
        />
      </div>
    </div>
  );
}

export default PhoneField;
