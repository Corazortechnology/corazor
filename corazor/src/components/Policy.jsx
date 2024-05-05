import React from 'react';
import { useInView } from 'react-intersection-observer';
import { layout } from '../style';

const PrivacyPolicy = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div className='w-full bg-[#111315] flex justify-center items-center py-5'>
      <div className='w-[50%] h-full flex justify-center items-center'>
        <div className={`${layout.sectionInfo} w-full rounded-lg justify-center items-center bg-[#181a1c] p-6`}>
          <h2 className='text-center text-3xl text-[#f8f9fa] font-bold mb-5'>
           Privacy Policy 
           <hr className='mt-1 border-t-[1px] border-[#f4f3ee]' />
          </h2>
          <p className='max-w-[90%] text-[#6c757d] text-bold text-center mb-5'>
            At Corazor Technology Private Limited, we are committed to protecting your privacy. This
            policy outlines our practices concerning the collection, use, and disclosure of your
            information.
          </p>
          <h3 className='text-left text-lg text-[#f8f9fa] font-bold mb-3'>Information Collection and Use</h3>
          <p className='max-w-[90%] text-center text-[#6c757d] text-bold mb-5'>
            We collect personal information such as your name, contact details, and any other
            information you choose to provide. This information is used to deliver our Services, improve
            our offerings, and communicate with you.
          </p>
          <h3 className='text-left text-lg text-[#f8f9fa] font-bold mb-3'>Sharing and Disclosure</h3>
          <p className='max-w-[90%] text-center text-[#6c757d] text-bold mb-5'>
            We do not share your personal information with third parties, except as required by law, to
            provide you with Services, or to protect our rights.
          </p>
          <h3 className='text-left text-lg text-[#f8f9fa] font-bold mb-3'>Data Security</h3>
          <p className='max-w-[90%] text-center text-[#6c757d] text-bold mb-5'>
            We take reasonable precautions to protect your personal information but cannot guarantee
            its absolute security against cyber threats.
          </p>
          <h3 className='text-left text-lg text-[#f8f9fa] font-bold mb-3'>Your Rights</h3>
          <p className='max-w-[90%] text-center text-[#6c757d] text-bold mb-5'>
            You have the right to access, correct, or delete your personal information held by us. For any
            requests, please contact us directly.
          </p>
          <h3 className='text-left text-lg text-[#f8f9fa] font-bold mb-3'>Changes to This Privacy Policy</h3>
          <p className='max-w-[90%] text-center text-[#6c757d] text-bold mb-5'>
            We may update our Privacy Policy to reflect changes to our practices. If we make material
            changes, we will notify you through our Website or by other means.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
