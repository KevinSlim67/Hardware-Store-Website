import React from "react";

function StateProvinceField(props) {

  return (
    <div className={`field ${props.className}`}>
      <label
        htmlFor="state-province"
        id="state-province-label"
        className={`required ${props.label}`}
      >
        State / Province
      </label>

      <input
        type="text"
        name="state-province"
        id="state-province"
        className="form-input w-full"
        required={true}
      />
    </div>
  );
}

export default StateProvinceField;
