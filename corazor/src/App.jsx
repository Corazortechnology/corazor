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
import Mainapp from "./Appmain";
// import Swipemate from "./components/swipemate/Swipemate";
// <<<<<<< HEAD
import Terms from "./components/Terms";
import "./components/app.scss";
import PrivacyPolicy from "./components/Policy";
import RefundPolicy from "./components/RefundPolicy";
import PolicyContainer from "./components/PolicyContainers";

// >>>>>>> c276642ca1bf99f60c6d943b3eba3a9f936191bc

const App = () => {
  return (
    // <React.StrictMode>
    // <Router>
      <Routes>
        <Route path="/" element={<Mainapp />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/refundPolicy" element={<RefundPolicy />} />

        {/* <Route path="/swipemate" element={<Swipemate />} /> */}
        {/* <Route path="/policycontainer" element={<PolicyContainer/>}/> */}
        {/* <Route path='/about' element={<Business/>} /> */}
      </Routes>
    // </Router>
    // </React.StrictMode>
  );
};

export default App;
