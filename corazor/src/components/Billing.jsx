import React from 'react'
import { apple, bill, google,pipeline } from '../assets'
import styles, { layout } from '../style'
import {motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

const Billing = () => {


  const { ref, inView } = useInView({
    
    triggerOnce: true, // Trigger animation only once
    threshold: 0.4, // Trigger when 40% of the element is in the viewport
  });


  return (
    <section id='About' ref={ref} className={layout.sectionReverse}>
    <motion.div
      initial={{ x: -400 }}
      animate={inView ? { x: 0 } : {}}
      transition={{ duration: 1 }}
      className={layout.sectionImgReverse}
    >
      <img
        src={pipeline}
        alt='billing'
        className='w-[90%] h-[90%] relative z-[5]'
      />
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
    </motion.div>
    <motion.div 
    initial={{ x: +400 }}
    animate={inView ? { x: 0 } : {}}
    transition={{ duration: 1 }}
    // className={layout.sectionImgReverse}
    className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Streamline Your Projects <br className='sm:block hidden'/>with Custom Software.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Empower your business with tailored software solutions that enhance productivity and efficiency. Our expert developers integrate cutting-edge technologies to create systems that perfectly align with your operational needs, driving growth and innovation.
      </p>
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img
          src={apple}
          alt='app-store'
          className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
        />
        <img
          src={google}
          alt='google-play'
          className='w-[128px] h-[42px] object-contain cursor-pointer'
        />
      </div>
    </motion.div>
  </section>
);
}

export default Billing
