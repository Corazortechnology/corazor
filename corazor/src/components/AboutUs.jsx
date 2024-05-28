import React from 'react'
import { aboutus } from '../assets' // Make sure to replace this with the actual path to your image
import styles, { layout } from '../style'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.4, // Trigger when 40% of the element is in the viewport
  });

  return (
    <section ref={ref} className={`${layout.section} mt-[-2%] mb-[-10%]`}>
      <motion.div
        initial={{ x: -300 }}
        animate={inView ? { x: 30 } : {}}
        transition={{ duration: 0.8 }}
        className={layout.sectionInfo}
      >
        <h2 className={styles.heading2}>
          About Us <br className='sm:block hidden' />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Welcome to our company! We are dedicated to delivering top-notch digital solutions to meet your business needs. Our team of experts works diligently to provide customized software development, ensuring your project is executed with precision and care. Connect with us to explore how we can bring your aboutuss to life.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <strong >Contact Details:</strong><br />
          Address: 
          Headquarters- Saharanpur, Uttar Pradesh
<br />
Branch office - New Delhi, India
          {/* Phone: (123) 456-7890 */}
          <br />
            Email:   
          <span  className='text-gradient'>
             corazortechnology@gmail.com
            </span> 
            
            
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${layout.sectionImg} shadow-img hover:drop-shadow-3xl`}
        tabIndex={0}
      >
        <img
          src={aboutus}
          alt='office'
          className='w-[90%] h-[90%]'
        />
      </motion.div>
    </section>
  )
}

export default AboutUs
