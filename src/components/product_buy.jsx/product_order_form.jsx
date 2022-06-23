import React from "react";
import CityField from "../form/city_field";
import CountryField from "../form/country_field";
import EmailField from "../form/email_field";
import PhoneField from "../form/phone_field";
import PostalZipCodeField from "../form/postal_zipcode";
import StateProvinceField from "../form/state_province";

function ProductOrderForm(props) {
  const label = "text-primary-700 text-[1.4rem] font-semibold";

  const data = props.data;
  return (
    <div className={`${props.className} mr-4 ml-4`}>
      <form className="w-full h-full pr-4 pl-4">
        <fieldset className="w-full">
          <legend className="text-accent-600 font-medium text-3xl w-full mb-10 text-center">
            {data.description}
          </legend>

          <EmailField label={label} />
          <PhoneField label={label}/>

          <div className="flex w-full">
            <CountryField label={label} className="w-1/2 mr-2" />
            <CityField label={label} className="w-1/2 ml-2" />
          </div>

          <div className="flex w-full">
            <StateProvinceField label={label} className="w-1/2 mr-2" />
            <PostalZipCodeField label={label} className="w-1/2 ml-2" />
          </div>


        </fieldset>
      </form>
    </div>
  );
}

export default ProductOrderForm;
