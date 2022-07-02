import React from "react";
import SubmitButton from "../buttons/submit_button";
import DescribeProblemField from "../form/describe_problem_field";
import EmailField from "../form/email_field";
import SelectProblemField from "../form/select_field";


function SupportTicketForm(props) {
  const label = "text-primary-700 text-[1.3rem] font-semibold";
  const data = props.data;

  return (
    <div className={`${props.className} mr-4 ml-4`}>
      <form className="w-full h-full pr-4 pl-4">
        <fieldset className="w-full">
          <legend className="text-accent-600 font-medium text-3xl w-full mb-10 text-center">
            {data.description}
          </legend>

          <EmailField label={label} />
          <SelectProblemField label={label} />
          <DescribeProblemField label={label} />

          <SubmitButton text="Send Ticket" className="pr-6 pl-6 pt-3 pb-3" />
        </fieldset>
      </form>
    </div>
  );
}

export default SupportTicketForm;
