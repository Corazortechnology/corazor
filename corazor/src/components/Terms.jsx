import React from 'react'
import { card, idea } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'
import { motion } from "framer-motion"

const Terms = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <section ref={ref} className={layout.section}>
        <motion.div
          initial={{ x: -400 }}
          animate={inView ? { x: 100 } : {}}
          transition={{ duration: 0.8 }}
          className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Welcome to Corazor Technology Private Limited</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            We offer a suite of IT services including web development, app development, AI solutions, blockchain
            technology, marketing solutions, and legal drafting services ("Services") targeted at
            businesses and startups. These Terms and Conditions govern your use of our services and
            our website at [Insert Website URL] ("Website"). By accessing the Website or using any
            Services, you agree to comply with and be bound by these terms.
          </p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
           <span
           className={`${styles.heading2} text-ss leading-tight ss:text-sm md:text-lg lg:text-xl`}
           >


            
             Services Offered: 
            </span>

            <br />
            
              We provide comprehensive IT solutions detailed on our Website. These services are
            designed to assist businesses and startups in leveraging technology for growth and
            efficiency.
          </p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            <span  className={`${styles.heading2} text-ss leading-tight ss:text-sm md:text-lg lg:text-xl`}>
            User Accounts:
                </span> To access certain services, you may need to create an account. You are responsible for
            maintaining the confidentiality of your account credentials and for all activities under your
            account. Providing false contact information of any kind may result in the termination of your
            account.
          </p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>

          <span
           className={`${styles.heading2} text-ss leading-tight ss:text-sm md:text-lg lg:text-xl`}
           >


            Intellectual Property: 
            
             
            </span>

            <br />
            
            All materials within the Services and on the Website, including software, text, images, and
            logos, are the property of Corazor Technology Private Limited or are used with permission.
            You may not copy, modify, or use these materials without our express written consent.
          </p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>

          <span
           className={`${styles.heading2} text-ss leading-tight ss:text-sm md:text-lg lg:text-xl`}
           >


            
            Payment: 
             
            </span>

            <br />
            Fees for Services are detailed in service agreements. All payments are due as specified in
            the invoice or agreement. Late payments may incur additional charges.
          </p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>

          <span
           className={`${styles.heading2} text-ss leading-tight ss:text-sm md:text-lg lg:text-xl`}
           >


            
             
            Termination, Limitation of Liability,
            </span>

            <br />
             Governing Law: Terms covering termination, liability, and
            legal jurisdiction provide important information about your rights and obligations when using our
            services.
          </p>
          {/* Optional Button if needed */}
          {/* <Button styles='mt-10'/> */}
        </motion.div>
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
        </motion.div> */}
      </section>
    </div>
  )
}

export default Terms
