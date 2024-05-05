import styles from '../style'
import { discount, robot,hero } from '../assets'
import GetStarted from './GetStarted'
import { motion,AnimatePresence  } from 'framer-motion';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section id='home' className={`mb-[-7%] flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img
            src={discount}
            alt='discount'
            className='w-[32px] h-[32px]'
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>Innovation at the Intersection of </span> Technology   {" "}
            <span className='text-white'>and Creativity</span> 
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            Corazor <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>Technology</span> {" "}
          </h1>
          {/* <div className='ss:flex hidden md:mr-4 mr-0'> */}
            {/* <GetStarted/> */}
          {/* </div> */}
        </div>
        {/* <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
          Custom Software Development.
        </h1> */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        "Transforming Ideas into Reality with Custom Software Solutions.
At the Heart of Innovation, We Engineer Your Vision.
Tailored Management Systems Designed to Propel Your Business Forward.
Experience the Future of Efficiency with Our Expert Team."
        </p>
         <Link >

         
{/*          
        <button className='mt-5 bg-secondary font-bold  text-black p-3 border rounded-lg'>
           Our Products
        </button> */}
         </Link>


      </div>
      <motion.div 
      initial={{y:+100}}
      animate={{y:[0,30] }}
      transition={{duration:1,repeat: Infinity,ease:"easeInOut",repeatType:"reverse"}}
      className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img 
        
          src={hero}
          alt='billing'
          className='w-[90%] h-[90%] relative z-[5]'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </motion.div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero
