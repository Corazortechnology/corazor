import React from 'react';
// import { useInView } from 'react-intersection-observer';
import { layout } from '../style';

const Terms = () => {
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.4,
  // });

  return (
    <div className='w-full bg-[#111315] flex justify-center items-center py-5'>
      <div className='w-[50%] h-full flex justify-center items-center'>
        <div
          className={`${layout.sectionInfo} w-full rounded-lg justify-center items-center bg-[#181a1c] p-6`}
        >
          <h2 className='text-center text-3xl text-[#f8f9fa] font-bold mb-5'>
            Terms and Conditions
            <hr className='mt-1 border-t-[1px] border-[#f4f3ee]' />
          </h2>
          <p className='max-w-[90%] text-[#6c757d] text-bold text-center mb-5'>
            We offer a suite of IT services including web development, app development, AI solutions, blockchain
            technology, marketing solutions, and legal drafting services targeted at
            businesses and startups. These Terms and Conditions govern your use of our services and
            our website at <a className='text-blue-500 cursor-pointer hover:underline' href="http://www.corazortechnology.com">Corazor</a>. By accessing the Website or using any
            Services, you agree to comply with and be bound by these terms.
          </p>
          <h3 style={{ textAlign: 'left' }} className='text-left text-lg text-[#f8f9fa] font-bold mb-3'>Services Offered</h3>
          <p className='max-w-[90%] text-center text-[#6c757d] text-bold mb-5'>
            We provide comprehensive IT solutions detailed on our Website. These services are
            designed to assist businesses and startups in leveraging technology for growth and
            efficiency.
          </p>
          <h3 className='text-left text-lg text-[#f8f9fa] font-bold mb-3'>User Accounts</h3>
          <p className='max-w-[90%] text-center text-[#6c757d] text-bold mb-5'>
            To access certain services, you may need to create an account. You are responsible for
            maintaining the confidentiality of your account credentials and for all activities under your
            account. Providing false contact information of any kind may result in the termination of your
            account.
          </p>
          <h3 className='text-left text-lg text-[#f8f9fa] font-bold mb-3'>Intellectual Property</h3>
          <p className='max-w-[90%] text-center text-[#6c757d] text-bold mb-5'>
            All materials within the Services and on the Website, including software, text, images, and
            logos, are the property of Corazor Technology Private Limited or are used with permission.
            You may not copy, modify, or use these materials without our express written consent.
          </p>
          <h3 className='text-left text-lg text-[#f8f9fa] font-bold mb-3'>Payment</h3>
          <p className='max-w-[90%] text-center text-[#6c757d] text-bold mb-5'>
            Fees for Services are detailed in service agreements. All payments are due as specified in
            the invoice or agreement. Late payments may incur additional charges.
          </p>
          <h3 className='text-left text-lg text-[#f8f9fa] font-bold mb-3'>Termination, Limitation of Liability, Governing Law</h3>
          <p className='max-w-[90%] text-center text-[#6c757d] text-bold mb-5'>
            Terms covering termination, liability, and legal jurisdiction provide important information about your rights and obligations when using our services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
