
import React from "react";
import Popup from "./Popup";

const TermsPopup = ({ onClose }) => {
  return (
    <Popup
      title="Terms and Conditions"
      content={
        <>
          <p>
            We offer a suite of IT services including web development, app
            development, AI solutions, blockchain technology, marketing
            solutions, and legal drafting services targeted at businesses and
            startups. These Terms and Conditions govern your use of our services
            and our website at{" "}
            <a
              className="text-blue-500 cursor-pointer hover:underline"
              href="http://www.corazortechnology.com"
            >
              Corazor
            </a>
            . By accessing the Website or using any Services, you agree to
            comply with and be bound by these terms.
          </p>
          <br />
          <h3 style={{ color: "#f1faee" }}>Services Offered</h3>
          <br />
          <p>
            We provide comprehensive IT solutions detailed on our Website. These
            services are designed to assist businesses and startups in
            leveraging technology for growth and efficiency.
          </p>
          <br />
          <h3 style={{ color: "#f1faee" }}>User Accounts</h3>
          <br />
          <p>
            To access certain services, you may need to create an account. You
            are responsible for maintaining the confidentiality of your account
            credentials and for all activities under your account. Providing
            false contact information of any kind may result in the termination
            of your account.
          </p>
          <br />
          <h3 style={{ color: "#f1faee" }}>Intellectual Property</h3>
          <br />
          <p>
            All materials within the Services and on the Website, including
            software, text, images, and logos, are the property of Corazor
            Technology Private Limited or are used with permission. You may not
            copy, modify, or use these materials without our express written
            consent.
          </p>
          <br />
          <h3 style={{ color: "#f1faee" }}>Payment</h3>
          <br />
          <p>
            Fees for Services are detailed in service agreements. All payments
            are due as specified in the invoice or agreement. Late payments may
            incur additional charges.
          </p>
          <br />
          <h3 style={{ color: "#f1faee" }}>Termination, Limitation of Liability, Governing Law</h3>
          <br />
          <p>
            Terms covering termination, liability, and legal jurisdiction
            provide important information about your rights and obligations when
            using our services.
          </p>
        </>
      }
      onClose={onClose}
    />
  );
};

export default TermsPopup;
