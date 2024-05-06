import React from 'react';
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
  
} from './components';
import Form from './components/Form';
import styles from './style';
import Technology from './components/Technologies';

const Mainapp = () => {
  return (
    <React.StrictMode>
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        
        <div className='bg-primary ${styles.flexStart}' id="home">
          <Hero />
        </div>

        <div id="features" className='bg-primary px-11 py-5'>
          <Business />
        </div>
        <div id="About" className='bg-primary px-11 py-5'>
          <Technology />
        </div>

        <div id="About" className='bg-primary mt-[-5%] px-5 '>
          <Billing />
        </div>

        <div id="Contact Us" className='bg-primary px-8 py-5'>
          <Form />
        </div>

        <Footer />
      </div>
    </React.StrictMode>
  );
};

export default Mainapp;
