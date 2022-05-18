import React from "react";

function FooterSocialMedia() {
  return (
    <div className="footer-section flex flex-col items-center w-1/3 mt-10">
      <h4 className="text-primary-900 text-[1.3rem] mb-8 font-semibold ">
        Follow Us
      </h4>
      <div className="text-primary-900 w-full flex justify-center">
        <a href="" className="mb-4 mr-5 ml-5">
          <img src="/assets\images\icons\facebook.png" alt="Facebook icon" className="hover:bg-primary-200 rounded-[50%]" />
        </a>
        <a href="" className="mb-4 mr-5 ml-5">
          <img src="/assets\images\icons\twitter.png" alt="Twitter icon" className="hover:bg-primary-200 rounded-[50%]" />
        </a>
        <a href="" className="mb-4 mr-5 ml-5">
          <img src="/assets\images\icons\instagram.png" alt="Instagram icon" className="hover:bg-primary-200 rounded-[50%]" />
        </a>
      </div>
    </div>
  );
}

export default FooterSocialMedia;
