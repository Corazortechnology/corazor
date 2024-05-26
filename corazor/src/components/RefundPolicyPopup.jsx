import React from "react";
import Popup from "./Popup";

const RefundPolicyPopup = ({ onClose }) => {
  return (
    <Popup
      title="Refund Policy"
      content={
        <>
          <p>
            Introduction We strive to ensure satisfaction with our Services.
            This Refund Policy outlines the circumstances under which refunds
            may be granted.
          </p>
          <br />
          <h3 style={{ color: "#f1faee" }}>Eligibility for Refund</h3>
          <br />
          <p>
            Refunds are considered on a case-by-case basis for services that
            have not been delivered as promised, subject to the terms of the
            service agreement.
          </p>
          <br />
          <h3 style={{ color: "#f1faee" }}>Request Process</h3>
          <br />
          <p>
            Requests for refunds should be submitted in writing to our customer
            service department, detailing the reason for the request.
          </p>
          <br />
          <h3 style={{ color: "#f1faee" }}>Processing Refunds</h3>
          <br />
          <p>
            Eligible refunds will be processed within a reasonable timeframe,
            typically 30 days.
          </p>
          <br />
          <h3 style={{ color: "#f1faee" }}>Limitations</h3>
          <br />
          <p>
            Refunds are not available for services already rendered or for minor
            issues that do not materially affect the overall provision of
            services.
          </p>
        </>
      }
      onClose={onClose}
    />
  );
};

export default RefundPolicyPopup;
