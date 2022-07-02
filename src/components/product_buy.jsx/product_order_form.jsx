import React from "react";
import SubmitButton from "../buttons/submit_button";
import AddressExtraField from "../form/address_field";
import CityField from "../form/city_field";
import CountryField from "../form/country_field";
import EmailField from "../form/email_field";
import PhoneField from "../form/phone_field";
import PostalZipCodeField from "../form/postal_zipcode";
import StateProvinceField from "../form/state_province";

function ProductOrderForm(props) {
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
          <PhoneField label={label} />

          <div className="two-fields">
            <CountryField label={label} className="small-field mr-2" />
            <CityField label={label} className="small-field ml-2" />
          </div>

          <div className="two-fields">
            <StateProvinceField label={label} className="small-field mr-2" />
            <PostalZipCodeField label={label} className="small-field ml-2" />
          </div>

          <AddressExtraField label={label} />

          <div className="submit-btn-field">
            <SubmitButton
              text="Order"
              className="submit-btn pr-6 pl-6 pt-3 pb-3"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default ProductOrderForm;
