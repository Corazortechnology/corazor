import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";
import Form from "./components/Form";
import styles from "./style";
import Technology from "./components/Technologies";
import Projcets from "./components/Projcets";
// import Swypemate from '../screen/swipemateScrren';
const Mainapp = () => {
  return (
    <React.StrictMode>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div id="home" className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            {/* <Stats /> */}
            <section id="features">
              <Business />
            </section>

            <Billing />
            <CardDeal />
            <section id="technology">
              <Technology />
            </section>

            <section id="projects">
              <Projcets />
            </section>
            {/* <Testimonials /> Uncomment if needed */}
            {/* <Clients /> Uncomment if needed */}
            {/* <CTA />  */}
            <section id="contact">
              <Form />
            </section>
            <Footer />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Mainapp;
