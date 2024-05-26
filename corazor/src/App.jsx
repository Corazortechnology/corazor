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
import Terms from "./components/TermsPopup";
import "./components/app.scss";
import PrivacyPolicy from "./components/PrivacyPolicyPopup";
import RefundPolicy from "./components/RefundPolicyPopup";
import PolicyContainer from "./components/PolicyContainers";



const App = () => {
  return (
    // <React.StrictMode>
    // <Router>
      <Routes>
        <Route path="/" element={<Mainapp />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/refundPolicy" element={<RefundPolicy />} />

      </Routes>

  );
};

export default App;
