import React from "react";
import { layout } from "../style";

const RefundPolicy = () => {
  return (
    <div className="w-full bg-[#111315] flex justify-center items-center py-5">
      <div className="w-[50%] h-full flex justify-center items-center">
        <div
          className={`${layout.sectionInfo} w-full rounded-lg justify-center items-center bg-[#181a1c] p-6`}
        >
          <h2 className="text-center text-3xl text-[#f8f9fa] font-bold mb-5">
            Refund Policy
            <hr className="mt-1 border-t-[1px] border-[#f4f3ee]" />
          </h2>
          <p className="max-w-[90%] text-[#6c757d] text-bold text-center mb-5">
            Introduction We strive to ensure satisfaction with our Services.
            This Refund Policy outlines the circumstances under which refunds
            may be granted.
          </p>
          <h3 className="text-left text-lg text-[#f8f9fa] font-bold mb-3">
            Eligibility for Refund
          </h3>
          <p className="max-w-[90%] text-center text-[#6c757d] text-bold mb-5">
            Refunds are considered on a case-by-case basis for services that
            have not been delivered as promised, subject to the terms of the
            service agreement.
          </p>
          <h3 className="text-left text-lg text-[#f8f9fa] font-bold mb-3">
            Request Process
          </h3>
          <p className="max-w-[90%] text-center text-[#6c757d] text-bold mb-5">
            Requests for refunds should be submitted in writing to our customer
            service department, detailing the reason for the request.
          </p>
          <h3 className="text-left text-lg text-[#f8f9fa] font-bold mb-3">
            Processing Refunds
          </h3>
          <p className="max-w-[90%] text-center text-[#6c757d] text-bold mb-5">
            Eligible refunds will be processed within a reasonable timeframe,
            typically 30 days.
          </p>
          <h3 className="text-left text-lg text-[#f8f9fa] font-bold mb-3">
            Limitations
          </h3>
          <p className="max-w-[90%] text-center text-[#6c757d] text-bold mb-5">
            Refunds are not available for services already rendered or for minor
            issues that do not materially affect the overall provision of
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
