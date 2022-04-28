import React from "react";
import CopyRights from "./copyrights.jsx";
import FooterContact from "./footer_contact.jsx";
import FooterNewsLetter from "./footer_newsletter.jsx";
import FooterSocialMedia from "./footer_social_media.jsx";

function Footer() {
  return (
    <div>
      <div className="footer-layout flex pb-5 bg-primary-100">
        <FooterContact />
        <FooterSocialMedia />
        <FooterNewsLetter />
      </div>
      <CopyRights />
    </div>
  );
}

export default Footer;
