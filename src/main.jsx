import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./i18n"; 
import { initGsapWithLenis } from "./lib/gsapSetup";
import ScrollToTop from "./components/common/ScrollToTop";


import App from "./App.jsx";
import "./index.css";

// GSAP + Lenis ni uchun ishlatim
initGsapWithLenis();

ReactDOM.createRoot(document.getElementById("root")).render(  
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />  
      <App />
    </BrowserRouter>
  </React.StrictMode>
);