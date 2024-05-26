import React from "react";
import Popup from "./Popup";

const PrivacyPolicyPopup = ({ onClose }) => {
  return (
    <Popup
      title="Privacy Policy"
      content={
        <>
          <p>
            At Corazor Technology Private Limited, we are committed to
            protecting your privacy. This policy outlines our practices
            concerning the collection, use, and disclosure of your information.
          </p>
          <br />
          <h3 style={{ color: "#f1faee" }}>Information Collection and Use</h3>
          <br />
          <p>
            We collect personal information such as your name, contact details,
            and any other information you choose to provide. This information is
            used to deliver our Services, improve our offerings, and communicate
            with you.
          </p>
          <br />
          <h3 style={{ color: "#f1faee" }}>Sharing and Disclosure</h3>
          <br />
          <p>
            We do not share your personal information with third parties, except
            as required by law, to provide you with Services, or to protect our
            rights.
          </p>
          <br />
          <h3 style={{ color: "#f1faee" }}>Data Security</h3>
          <br />
          <p>
            We take reasonable precautions to protect your personal information
            but cannot guarantee its absolute security against cyber threats.
          </p>
          <br />
          <h3 style={{ color: "#f1faee" }}>Your Rights</h3>
          <br />
          <p>
            You have the right to access, correct, or delete your personal
            information held by us. For any requests, please contact us
            directly.
          </p>
          <br />
          <h3 style={{ color: "#f1faee" }}>Changes to This Privacy Policy</h3>
          <br />
          <p>
            We may update our Privacy Policy to reflect changes to our
            practices. If we make material changes, we will notify you through
            our Website or by other means.
          </p>
        </>
      }
      onClose={onClose}
    />
  );
};

export default PrivacyPolicyPopup;
