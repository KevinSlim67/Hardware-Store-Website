import React from "react";

function AboutUs() {

  let paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie sem lacus, eu feugiat mi pretium et. Sed accumsan sem velit, ut venenatis dolor ultrices et. Integer ac viverra massa, et blandit est. Sed finibus libero eu nisi finibus, sit amet facilisis ante commodo. Sed aliquam ultricies fermentum. Integer volutpat fringilla elementum. Nunc sem ligula, tincidunt a odio vitae, pretium aliquam magna. Quisque sit amet efficitur tellus. Donec vitae felis lectus. Sed lacinia porttitor mi, et blandit mi pharetra eu. Proin luctus, ante nec volutpat pharetra, elit ex cursus ex, laoreet vulputate magna ligula sit amet arcu. Nunc mattis nisi in velit commodo ultrices. Donec pharetra ut dolor sit amet lobortis.";
  return (
    <section className="about-us flex justify-center mb-4">
      <div className="about-us-image flex justify-center max-w-[444px] items-center mr-7">
        <img
          src="assets\images\brand\logo_large.png"
          className="about-us-image m-10 rounded-full border-[1px] border-accent-200"
          alt="We Make IT Happen"
        />
      </div>

      <div className="about-us-text w-[50%] ml-2 mr-2 text-primary-900 text-justify">
        <h3 className="text-primary-600 text-2xl mb-5">About Us</h3>
        <p>{paragraph}</p>

      </div>
    </section>
  );
}

export default AboutUs;
