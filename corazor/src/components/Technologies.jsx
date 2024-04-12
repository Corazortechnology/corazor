// import React from 'react'
import { card,idea,reacticon,nodeLogo,DockerLogo,Kubernetes,awslogo,angluar } from '../assets'
import Button from './Button'
import React, { useEffect, useRef } from 'react';
import styles, { layout } from '../style'
import { motion, useAnimation } from 'framer-motion';


const Technology = () => {
    const scrollRef = useRef(null);
    const technologies = [
        {
          id: "tech-1",
          name: "React",
          description: "A JavaScript library for building user interfaces.",
          img: reacticon,
        },
        {
          id: "tech-2",
          name: "Node.js",
          description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
          img: nodeLogo,
        },
        {
          id: "tech-3",
          name: "Docker",
          description: "A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
          img: DockerLogo,
        },
        {
          id: "tech-4",
          name: "Kubernetes",
          description: "An open-source system for automating deployment, scaling, and management of containerized applications.",
          img: Kubernetes,
        },
        {
          id: "tech-5",
          name: "AWS",
          description: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
          img: awslogo,
        },
        {
          id: "tech-6",
          name: "Angluar",
          description: "A complete Front-end framework ",
          img: angluar,
        }, 
       
      ];
      const scrollControls = useAnimation();

      useEffect(() => {
          const sequence = async () => {
              await scrollControls.start({ x: '-100%', transition: { duration: 10, ease: "linear" } });
              scrollControls.set({ x: '0%' });
              sequence();
          };
  
          sequence();
      }, [scrollControls]);
  
      return (
          <section className={`${layout.section}  `}>
              <div className={`${layout.sectionInfo}  `}>
                  <h2 className={`${styles.heading2} leading-2 `}>Our Technologies The Tools That Empower Us</h2>
                  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                      Dive into the stack of technologies that drive our solutions. From front-end frameworks to back-end languages and deployment tools, explore the technologies we use to build innovative software.
                  </p>
              </div>
              <div className="flex mt-10 w-full overflow-x-auto sm:flex overflow-y-auto ">
                  <motion.div className={`${layout.sectionImg} flex space-x-4 min-w-max ] `} initial={{ x: '0%' }} animate={scrollControls}>
                      {technologies.map((tech, index) => (
                          <div key={tech.id} className="flex-shrink-0 flex flex-col items-center text-center w-full xl:w-[340px] lg:w-[300px] sm:w-[320px] ss:w-[320px] xs:w-[320px] md:w-1/4 ">
                              <div className="p-4 bg-gray-800 rounded-lg md:p-3 w-[300px]">
                                  <img src={tech.img} alt={tech.name} className='w-24 h-24 object-contain mx-auto' />
                                  <h3 className="mt-4 text-lg text-white font-semibold">{tech.name}</h3>
                                  <p className="text-sm text-white">{tech.description}</p>
                              </div>
                          </div>
                      ))}
                  </motion.div>
              </div>
          </section>
      );
  };
  
  export default Technology;