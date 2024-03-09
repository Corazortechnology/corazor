import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Technology",
    img: "https://wallpaperbat.com/img/797100-robotic-process-automation-1200x675-wallpaper-teahubio.jpg",
    desc:"Artificial Intelligence(AI), Machine Learning (ML), Cloud Computing, Mobile App Development Technologies"
  },
  {
    id: 2,
    title: "Marketing",
    img: "https://e1.pxfuel.com/desktop-wallpaper/7/350/desktop-wallpaper-best-business-communtiy-digital-marketing.jpg",
  desc:"Search Engine Optimization (SEO), Social Media Marketing, Influencer Marketing"  
},
  {
    id: 3,
    title: "Legal",
    img: "https://legalfirm.in/wp-content/uploads/2023/03/Flat-owners-Association-How-to-Find-the-Best-Law-firms.jpg",
    desc: "Experience, Client-Centric Focus, Our Commitment"},
 
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
