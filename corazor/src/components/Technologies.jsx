import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles, { layout } from "../style";
import {
  reacticon,
  nodeLogo,
  AWS,
  angluar,
  datascience,
  solidity,
  ALML,
  thirdweb,
  Typescript,
  Web3,
} from "../assets";
import "./technologies.css"

const Technology = () => {
  const scrollRef = useRef(null);
  const scrollControls = useAnimation();
  const [scrollSpeed, setScrollSpeed] = useState(35);

  const technologies = [
    { id: "tech-1", name: "React", description: "A JavaScript library for building user interfaces.", img: reacticon },
    { id: "tech-2", name: "Node.js", description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.", img: nodeLogo },
    { id: "tech-5", name: "AWS", description: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.", img: AWS },
    { id: "tech-6", name: "Angular", description: "A complete Front-end framework", img: angluar },
    { id: "tech-7", name: "Solidity", description: "Smart contract programming language.", img: solidity },
    { id: "tech-8", name: "ALML", description: "Advanced machine learning library.", img: ALML },
    { id: "tech-9", name: "Data Science", description: "Statistical and computational analysis.", img: datascience },
    { id: "tech-10", name: "Thirdweb", description: "Web3 app development toolkit.", img: thirdweb },
    { id: "tech-11", name: "TypeScript", description: "JavaScript with types enhancement.", img: Typescript },
    { id: "tech-12", name: "Web3", description: "Decentralized web technologies.", img: Web3 },
  ];

  useEffect(() => {
    const checkSize = () => {
      const newSpeed = window.innerWidth < 450 ? 20 : 35;  // Faster scroll speed if below 450px
      setScrollSpeed(newSpeed);
    };

    window.addEventListener('resize', checkSize);
    checkSize();  // Initial check

    return () => window.removeEventListener('resize', checkSize);
  }, []);

  useEffect(() => {
    const sequence = async () => {
      await scrollControls.start({
        x: "-100%",
        transition: { duration: scrollSpeed, ease: "linear" },
      });
      scrollControls.set({ x: "0%" });
      sequence();
    };

    sequence();
  }, [scrollControls, scrollSpeed]);

  return (
    <section className={`${layout.section} mt-5  `}>
      <div className={layout.sectionInfo + " mr-[10%]"}>
        <h2 className={styles.heading2 + " leading-tight"}>
          <span className="text-gradient">Technologies</span> We Use
        </h2>
        <p className={styles.paragraph + " max-w-[470px] mt-5"}>
          Dive into the stack of technologies that drive our solutions. From front-end frameworks to back-end languages and deployment tools, explore the technologies we use to build innovative software.
        </p>
      </div>
      <div className="flex mt-10 w-full overflow-x-auto">
        <motion.div
          ref={scrollRef}
          className={layout.sectionImg + " flex space-x-4 min-w-max"}
          initial={{ x: "0%" }}
          animate={scrollControls}
        >
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className="flex-shrink-0 flex flex-col items-center text-center w-full sm:w-[320px] min-h-10"
            >
              <div className="p-4 bg-gray-800 rounded-lg md:p-3 w-[300px]">
                <img src={tech.img} alt={tech.name} className="w-24 h-24 object-contain mx-auto" />
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
