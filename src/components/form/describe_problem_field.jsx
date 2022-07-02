import React from "react";

function DescribeProblemField(props) {
  const style = {resize: 'none'};

  return (
    <div className="field">
      <label
        htmlFor="describe-problem"
        id="describe-problem-label"
        className={`required ${props.label}`}
      >
        Describe Problem
      </label>
      <textarea
        type="describe-problem"
        name="describe-problem"
        id="describe-problem"
        className="form-input w-full !h-[18rem] !pt-[0.4rem] !pb-[0.4rem]"
        required={true}
        style={style}
      />
    </div>
  );
}

export default DescribeProblemField;
