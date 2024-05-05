import React from 'react';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles, { layout } from '../style';

const PrivacyPolicy = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div className='w-full bg-[#111315]   flex justify-center items-center py-5'>

    <div className=' w-[50%] h-full flex justify-center   items-center'>
      {/* <section ref={ref} className={`${layout.section} w-[98%] border `}> */}
        <div
          // initial={{ x: -400 }}
          // animate={inView ? { x:0 } : {x:0}}
          // transition={{ duration: 0.8 }}
          className={`${layout.sectionInfo} w-[10px] rounded-[5%] justify-center items-center bg-[#181a1c]   p-6`}
          >
          <h2 className='text-center text-3xl text-[#f8f9fa] font-bold mb-5'>
           Privacy Policy for Corazor Technology Private Limited
          </h2>
          <p className='max-w-[80%] text-[#6c757d] text-bold text-center mb-5'>
            At Corazor Technology Private Limited, we are committed to protecting your privacy. This
            policy outlines our practices concerning the collection, use, and disclosure of your
            information.
          </p>
          <h3 className='text-center text-3xl text-[#f8f9fa] font-bold mb-5'>Information Collection and Use</h3>
          <p className='max-w-[80%] text-[#6c757d] text-bold'>
            We collect personal information such as your name, contact details, and any other
            information you choose to provide. This information is used to deliver our Services, improve
            our offerings, and communicate with you.
          </p>
          <h3 className='text-center text-3xl text-[#f8f9fa] font-bold mb-5'>Sharing and Disclosure</h3>
          <p className='max-w-[80%] text-[#6c757d] text-bold'>
            We do not share your personal information with third parties, except as required by law, to
            provide you with Services, or to protect our rights.
          </p>
          <h3 className='text-center text-3xl text-[#f8f9fa] font-bold mb-5'>Data Security</h3>
          <p className='max-w-[80%] text-[#6c757d] text-bold'>
            We take reasonable precautions to protect your personal information but cannot guarantee
            its absolute security against cyber threats.
          </p>
          <h3 className='text-center text-3xl text-[#f8f9fa] font-bold mb-5'>Your Rights</h3>
          <p className='max-w-[80%] text-[#6c757d] text-bold'>
            You have the right to access, correct, or delete your personal information held by us. For any
            requests, please contact us directly.
          </p>
          <h3 className='text-center text-3xl text-[#f8f9fa] font-bold mb-5'>Changes to This Privacy Policy</h3>
          <p className='max-w-[80%] text-[#6c757d] text-bold'>
            We may update our Privacy Policy to reflect changes to our practices. If we make material
            changes, we will notify you through our Website or by other means.
          </p>
        </div>
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`${layout.sectionImg} shadow-img hover:drop-shadow-3xl`}
          tabIndex={0}>
          <img
          src={idea}
          alt='card'
          className='w-[90%] h-[90%]'
          />
        // </motion.div> */}
      {/* </section> */}
    </div>
        </div>
  );
}

export default PrivacyPolicy;
