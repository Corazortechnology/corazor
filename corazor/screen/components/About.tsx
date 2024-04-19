import { useState } from 'react';
// import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.4,
  });

  // State to manage the completion of the first animation
  const [animateSecond, setAnimateSecond] = useState(false);

  const variants = {
    visible: { 
      rotateX: 360, 
      opacity: [0, 0, 1], 
      scale: [0, 1], 
      transition: { duration: 0.8 }
    },
    hidden: { 
      rotateX: 180,
      opacity: 0, 
      scale: 0
    }
  };

  const variantsforabout = {
    visible: { 
      // rotateX: 360,  
      opacity: 1,
       
      scale: [2,1], 
      transition: { duration: 0.5 } 
    },
    hidden: {   
      opacity: 0, 
      scale: 1
    }
  };

  return (
    <section id="about" className="container py-24 sm:py-32">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        onAnimationComplete={() => {
          if (inView) {
            setAnimateSecond(true); // Trigger second animation only when inView is true
          }
        }}
        className="bg-muted/50 border rounded-lg py-12"
      >
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <motion.div 
                  initial="hidden"
                  animate={animateSecond ? 'visible' : 'hidden'}
                  variants={variantsforabout}
                  className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text  "
                >
                  About Swipemate
                </motion.div>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                In the rapidly evolving fintech sector, SWYPEMATE emerged as a groundbreaking platform
                designed to empower consumers with unparalleled control and insight into their financial
                products. By integrating a comprehensive suite of services, including card comparison, offer
                discovery, offer trading, and a customized credit card feature, we're setting a new standard
                for personalized finance.
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
