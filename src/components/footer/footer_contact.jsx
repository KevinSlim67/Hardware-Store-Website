import React from "react";

function FooterContact() {
  return (
    <div className="footer-section flex flex-col items-center w-1/3 mt-10">
      <h4 className="text-primary-900 text-[1.3rem] mb-5 font-semibold ">Contact</h4>
      <div className="text-primary-900  flex-col justify-center leading-8">
        <div className="flex">
          <img src="/assets/images/icons/message.png" className="object-contain mr-2" />
          <p>loremipsum@gmail.com</p>
        </div>
        <div className="flex">
          <img src="/assets/images/icons/phone.png" className="object-contain mr-2" />
          <p>+(961) 55 555 555</p>
        </div>
        <div className="flex">
          <img src="/assets/images/icons/phone.png" className="object-contain mr-2" />
          <p>+(961) 55 555 555</p>
        </div>
      </div>
    </div>
  );
}

export default FooterContact;
