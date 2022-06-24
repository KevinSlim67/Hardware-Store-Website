import React from "react";

function EmailField(props) {
  return (
    <div className="field">
      <label htmlFor="email" id="email-label" className={`required ${props.label}`}>
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="form-input w-full"
        required={true}
      />
    </div>
  );
}

export default EmailField;
