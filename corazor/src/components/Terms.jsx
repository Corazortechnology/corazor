import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { layout } from '../style';

const Terms = () => {
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
           Terms and Conditions
          </h2>
          <p className='max-w-[80%] text-[#6c757d] text-bold text-center mb-5'>
            We offer a suite of IT services including web development, app development, AI solutions, blockchain
            technology, marketing solutions, and legal drafting services ("Services") targeted at
            businesses and startups. These Terms and Conditions govern your use of our services and
            our website at [Insert Website URL] ("Website"). By accessing the Website or using any
            Services, you agree to comply with and be bound by these terms.
          </p>
            <span className='font-bold'>Services Offered:</span><br />
          <p className='max-w-[80%] text-center mb-5 text-[#6c757d] text-bold text-[#6c757d] text-bold'>
            We provide comprehensive IT solutions detailed on our Website. These services are
            designed to assist businesses and startups in leveraging technology for growth and
            efficiency.
          </p>
            <span className='font-bold'>User Accounts:</span><br />
          <p className='max-w-[80%] text-center mb-5 text-[#6c757d] text-bold'>
            To access certain services, you may need to create an account. You are responsible for
            maintaining the confidentiality of your account credentials and for all activities under your
            account. Providing false contact information of any kind may result in the termination of your
            account.
          </p>
            <span className='font-bold'>Intellectual Property:</span><br />
          <p className='max-w-[80%] text-center mb-5 text-[#6c757d] text-bold'>
            All materials within the Services and on the Website, including software, text, images, and
            logos, are the property of Corazor Technology Private Limited or are used with permission.
            You may not copy, modify, or use these materials without our express written consent.
          </p>
            <span className='font-bold'>Payment:</span><br />
          <p className='max-w-[80%] text-center mb-5 text-[#6c757d] text-bold'>
            Fees for Services are detailed in service agreements. All payments are due as specified in
            the invoice or agreement. Late payments may incur additional charges.
          </p>
            <span className='font-bold'>Termination, Limitation of Liability, Governing Law:</span><br />
          <p className='max-w-[80%] text-center mb-5 text-[#6c757d] text-bold'>
            Terms covering termination, liability, and legal jurisdiction provide important information about your rights and obligations when using our services.
          </p>
          {/* Optional Button if needed */}
          {/* <Button styles='mt-10'/> */}
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
};

export default Terms;
