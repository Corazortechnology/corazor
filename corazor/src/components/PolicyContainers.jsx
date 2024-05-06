import React, { useState } from "react";

const PolicyContainer = () => {
  // State to handle which policy is currently displayed
  const [currentPolicy, setCurrentPolicy] = useState("terms");

  const renderContent = () => {
    switch (currentPolicy) {
      case "terms":
        return <Terms />;
      case "refund":
        return <RefundPolicy />;
      case "privacy":
        return <PrivacyPolicy />;
      default:
        return <Terms />;
    }
  };

  return (
    <div className="w-full bg-[#111315] flex flex-col justify-center items-center py-5">
      <div className="w-[50%] flex flex-col justify-center items-center">
        <div className="flex justify-around w-full mb-5">
          <button
            className="text-white py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-700"
            onClick={() => setCurrentPolicy("terms")}
          >
            Terms
          </button>
          <button
            className="text-white py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-700"
            onClick={() => setCurrentPolicy("refund")}
          >
            Refund Policy
          </button>
          <button
            className="text-white py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-700"
            onClick={() => setCurrentPolicy("privacy")}
          >
            Privacy Policy
          </button>
        </div>
        <div className="w-full rounded-lg justify-center items-center bg-[#181a1c] p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

const Terms = () => {
  return (
    <div>
      <h2 className="text-center text-3xl text-[#f8f9fa] font-bold mb-5">
        Terms and Conditions
      </h2>
      <p className="max-w-[80%] text-[#6c757d] text-bold text-center mb-5">
        We offer a suite of IT services including web development, app
        development, AI solutions, blockchain technology, marketing solutions,
        and legal drafting services targeted at businesses and startups. These
        Terms and Conditions govern your use of our services and our website at{" "}
        <a
          className="text-blue-500 cursor-pointer hover:underline"
          href="http://www.corazortechnology.com"
        >
          Corazor
        </a>
        . By accessing the Website or using any Services, you agree to comply
        with and be bound by these terms.
      </p>
      <h3 className="text-center text-2xl text-[#f8f9fa] font-bold mb-3">
        Services Offered
      </h3>
      <p className="max-w-[80%] text-center mb-5 text-[#6c757d] text-bold">
        We provide comprehensive IT solutions detailed on our Website. These
        services are designed to assist businesses and startups in leveraging
        technology for growth and efficiency.
      </p>
      <h3 className="text-center text-2xl text-[#f8f9fa] font-bold mb-3">
        User Accounts
      </h3>
      <p className="max-w-[80%] text-center mb-5 text-[#6c757d] text-bold">
        To access certain services, you may need to create an account. You are
        responsible for maintaining the confidentiality of your account
        credentials and for all activities under your account. Providing false
        contact information of any kind may result in the termination of your
        account.
      </p>
      <h3 className="text-center text-2xl text-[#f8f9fa] font-bold mb-3">
        Intellectual Property
      </h3>
      <p className="max-w-[80%] text-center mb-5 text-[#6c757d] text-bold">
        All materials within the Services and on the Website, including
        software, text, images, and logos, are the property of Corazor
        Technology Private Limited or are used with permission. You may not
        copy, modify, or use these materials without our express written
        consent.
      </p>
      <h3 className="text-center text-2xl text-[#f8f9fa] font-bold mb-3">
        Payment
      </h3>
      <p className="max-w-[80%] text-center mb-5 text-[#6c757d] text-bold">
        Fees for Services are detailed in service agreements. All payments are
        due as specified in the invoice or agreement. Late payments may incur
        additional charges.
      </p>
      <h3 className="text-center text-2xl text-[#f8f9fa] font-bold mb-3">
        Termination, Limitation of Liability, Governing Law
      </h3>
      <p className="max-w-[80%] text-center mb-5 text-[#6c757d] text-bold">
        Terms covering termination, liability, and legal jurisdiction provide
        important information about your rights and obligations when using our
        services.
      </p>
    </div>
  );
};

const RefundPolicy = () => {
  return (
    <div>
      <h2 className="text-center text-3xl text-[#f8f9fa] font-bold mb-5">
        Refund Policy for Corazor Technology Private Limited
      </h2>
      <p className="max-w-[80%] text-[#6c757d] text-bold text-center mb-5">
        Introduction We strive to ensure satisfaction with our Services. This
        Refund Policy outlines the circumstances under which refunds may be
        granted.
      </p>
      <h3 className="text-center text-3xl text-[#f8f9fa] font-bold mb-5">
        Eligibility for Refund
      </h3>
      <p className="max-w-[80%] text-center mb-5 text-[#6c757d] text-bold">
        Refunds are considered on a case-by-case basis for services that have
        not been delivered as promised, subject to the terms of the service
        agreement.
      </p>
      <h3 className="text-center text-3xl text-[#f8f9fa] font-bold mb-5">
        Request Process
      </h3>
      <p className="max-w-[80%] text-center mb-5 text-[#6c757d] text-bold">
        Requests for refunds should be submitted in writing to our customer
        service department, detailing the reason for the request.
      </p>
      <h3 className="text-center text-3xl text-[#f8f9fa] font-bold mb-5">
        Processing Refunds
      </h3>
      <p className="max-w-[80%] text-center mb-5 text-[#6c757d] text-bold">
        Eligible refunds will be processed within a reasonable timeframe,
        typically 30 days.
      </p>
      <h3 className="text-center text-3xl text-[#f8f9fa] font-bold mb-5">
        Limitations
      </h3>
      <p className="max-w-[80%] text-center mb-5 text-[#6c757d] text-bold">
        Refunds are not available for services already rendered or for minor
        issues that do not materially affect the overall provision of services.
      </p>
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <div>
      <h2 className="text-center text-3xl text-[#f8f9fa] font-bold mb-5">
        Privacy Policy for Corazor Technology Private Limited
      </h2>
      <p className="max-w-[80%] text-[#6c757d] text-bold text-center mb-5">
        At Corazor Technology Private Limited, we are committed to protecting
        your privacy. This policy outlines our practices concerning the
        collection, use, and disclosure of your information.
      </p>
      <h3 className="text-center text-3xl text-[#f8f9fa] font-bold mb-5">
        Information Collection and Use
      </h3>
      <p className="max-w-[80%] text-center mb-5 text-[#6c757d] text-bold">
        We collect personal information such as your name, contact details, and
        any other information you choose to provide. This information is used to
        deliver our Services, improve our offerings, and communicate with you.
      </p>
      <h3 className="text-center text-3xl text-[#f8f9fa] font-bold mb-5">
        Sharing and Disclosure
      </h3>
      <p className="max-w-[80%] text-center mb-5 text-[#6c757d] text-bold">
        We do not share your personal information with third parties, except as
        required by law, to provide you with Services, or to protect our rights.
      </p>
      <h3 className="text-center text-3xl text-[#f8f9fa] font-bold mb-5">
        Data Security
      </h3>
      <p className="max-w-[80%] text-center mb-5 text-[#6c757d] text-bold">
        We take reasonable precautions to protect your personal information but
        cannot guarantee its absolute security against cyber threats.
      </p>
      <h3 className="text-center text-3xl text-[#f8f9fa] font-bold mb-5">
        Your Rights
      </h3>
      <p className="max-w-[80%] text-center mb-5 text-[#6c757d] text-bold">
        You have the right to access, correct, or delete your personal
        information held by us. For any requests, please contact us directly.
      </p>
      <h3 className="text-center text-3xl text-[#f8f9fa] font-bold mb-5">
        Changes to This Privacy Policy
      </h3>
      <p className="max-w-[80%] text-center mb-5 text-[#6c757d] text-bold">
        We may update our Privacy Policy to reflect changes to our practices. If
        we make material changes, we will notify you through our Website or by
        other means.
      </p>
    </div>
  );
};

export default PolicyContainer;
