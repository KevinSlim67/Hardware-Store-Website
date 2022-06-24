import React from "react";

function AddressExtraField(props) {
  return (
    <div className="field">
      <label htmlFor="address-extra" id="address-extra-label" className={`required ${props.label}`}>
      Apt, Unit, Floor, Suite, Building
      </label>
      <input
        type="text"
        name="address-extra"
        id="address-extra"
        className="form-input w-full"
        required={true}
      />
    </div>
  );
}

export default AddressExtraField;
