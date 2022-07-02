import React from "react";

function SelectProblemField(props) {

  const problems = ['Technical Problem', 'Cracked Screen', 'Find Replacement Parts', 'Request A Refund', 'Register Your Product'];

  return (
    <div className={`field ${props.className}`}>
      <label
        htmlFor="select-problem"
        id="select-problem-label"
        className={`required ${props.label}`}
      >
        Select your Problem
      </label>

      <div className="form-select w-full">
        <select
          id="select-problem"
          name="select-problem"
          required={true}
        >
          {problems.map((p) => (
            <option
              key={p}
              value={p}
              className="w-full"
            >
              {p}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
}

export default SelectProblemField;
