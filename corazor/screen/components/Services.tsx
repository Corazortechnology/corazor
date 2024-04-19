import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
// import {  CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Custom Credit Solutions",
    description: "Partner with top banks to develop credit cards that adapt to user's financial behaviors, delivering a custom-fit financial experience.",
  icon: <MagnifierIcon/>, // Ensure you replace 'image4' with the actual image reference.
  },
  {
    title: "Benefit Optimization Alerts",
    description: "Send personalized alerts about often-missed benefits, like overlooked rebates and premium insurance coverage, to maximize user value.",
  icon: <WalletIcon/>, // Ensure you replace 'image3' with the actual image reference.
  },
  {
    title: "Smart Card Advisor",
    description: "Utilize deep insights to recommend cards that align with user lifestyles, such as offering frequent flyers cards with exceptional travel rewards.",
  icon: <ChartIcon/>, // Ensure you replace 'image' with the actual image reference.
  },
];

export const Services = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.4,
  });


  return (
    <section 
    ref={ref}
    className="container py-24 sm:py-32">
      <div 
      
      className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
          Enhancing Your Financial Journey with Personalized Credit Solutions
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <motion.Card 
              initial={{x:-500}}
          animate={inView ? { x: 0 } : {x:-500}}
          transition={{
            type: "spring",  
        stiffness: 130, 
        mass: 0.9,     
        damping: 10,    
        duration: 0.9   

          }}
              key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </motion.Card>
            ))}
          </div>
        </div>

        <motion.img  
       
          initial={{x:500}}
          animate={inView ? { x: 0 } : {x:500}}
          transition={{
            type: "spring",  
        stiffness: 130, 
        mass: 0.9,     
        damping: 10,    
        duration: 0.9   

          }}
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
