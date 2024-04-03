import React from 'react'
import { card,idea } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'
import {motion} from "framer-motion"

const CardDeal = () => {
  const { ref, inView } = useInView({
    
    triggerOnce: true, // Trigger animation only once
    threshold: 0.8, // Trigger when 40% of the element is in the viewport
  });
  return (
    <section  ref={ref}className={layout.section}>
    <motion.div
    initial={{x:-300}}
    animate={inView ? { x: +30 } : {}}
    transition={{duration:0.8}}
    

    className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Transform Your Idea into a Digital Solution <br className='sm:block hidden'/>with Ease.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Dive into the world of custom software development where innovation meets efficiency. From strategy through to execution, our team ensures your project is handled with expertise, delivering bespoke solutions that fit your unique needs perfectly. Let’s code the future, one line at a time.
      </p>
      <Button styles='mt-10'/>
    </motion.div>
    <motion.div
     
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    
    className={`${layout.sectionImg} shadow-img hover:drop-shadow-3xl`}
    tabIndex={0} 
    >
      
      <img
        src={idea}  
        alt='card'
        className='w-[90%] h-[90%]'
      />
    </motion.div>
  </section>
  
  )
}

export default CardDeal
