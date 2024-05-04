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
import Mainapp from './Appmain';
import Swipemate from './components/swipemate/Swipemate';
import Terms from './components/Terms';




const App = () => {
  return (
    <React.StrictMode>
      <Router>

        <Routes>
        <Route path="/" element={<Mainapp />} />
        
        <Route path="/swipemate" element={<Swipemate />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Terms />} />
      


        </Routes>
        {/* <div className='bg-primary w-full overflow-hidden'>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
             
            </div>
          </div>
          <Routes> */}
            {/* <Route path="/" element={<Hero />} /> */}
            {/* <Route path="/swipemate" element={<Swypemate />} /> */}
            {/* Other routes can also be added here if needed */}
          {/* </Routes>
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
              <Projcets /> */}
              {/* <Testimonials /> Uncomment if needed */}
              {/* <Clients /> Uncomment if needed */}
              {/* <CTA />
              <Form />
              <Footer /> */}
            {/* </div>
          </div>
        </div> */}
      </Router>
    </React.StrictMode>
  );
};

export default App;
