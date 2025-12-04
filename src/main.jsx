// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// 1. i18next – Tarjima
import "./i18n"; // ← BU ENG MUHIMI! Barcha tillar shu orqali ishlaydi

// 2. GSAP + Lenis (silliq scroll + animatsiya)
import { initGsapWithLenis } from "./lib/gsapSetup";

// 3. ScrollToTop – har sahifa o‘zgarganda tepaga chiqadi
import ScrollToTop from "./components/common/ScrollToTop";

// 4. Asosiy App
import App from "./App.jsx";
import "./index.css";

// GSAP + Lenis ni ishga tushiramiz
initGsapWithLenis();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />  {/* ← Har sahifa o‘zgarganda tepaga chiqadi */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);