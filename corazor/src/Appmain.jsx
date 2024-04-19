import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
  Testimonials 
} from './components';
import Form from './components/Form';
import styles from './style';
import Technology from './components/Technologies';
import Projcets from './components/Projcets';
// import Swypemate from '../screen/swipemateScrren';
const Mainapp = () => {
  return (
    <React.StrictMode>
     
        <div className='bg-primary w-full overflow-hidden'>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
             
            </div>
          </div>
          
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />  
            </div>
          </div>
          <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Stats />
              <Business />
              <Billing />
              <CardDeal />
              <Technology />
              <Projcets />
              {/* <Testimonials /> Uncomment if needed */}
              {/* <Clients /> Uncomment if needed */}
              <CTA />
              <Form />
              <Footer />
            </div>
          </div>
        </div>
     
    </React.StrictMode>
  );
};

export default Mainapp;
