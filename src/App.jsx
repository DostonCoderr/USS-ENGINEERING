import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import FAQ from "./pages/FAQ";
import ScrollToTopButton from "./components/common/ScrollToTopButton";

// Services
import LaserCutting from "./pages/Services/LaserCutting";
import SheetBending from "./pages/Services/SheetBending";
import PowderCoating from "./pages/Services/PowderCoating";
import Welding from "./pages/Services/Welding";
import MetalStructures from "./pages/Services/MetalStructures";
import CustomParts from "./pages/Services/CustomParts";
import MetalFurniture from "./pages/Services/MetalFurniture";
import Header from "./components/common/Header";
import FloatingButton from "./components/common/FloatingButton";
import Footer from "./components/common/Footer";
import ServiceLayout from "./components/layout/ServiceLayout";
import Services from "./pages/Services";



function App() {

  
  return (
    <>
    <Header />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/services" element={<Services/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:id" element={<PortfolioDetail />} />
      <Route path="/faq" element={<FAQ />} />

      {/* Services */}
     <Route element={<ServiceLayout />}>
        <Route path="/services/laser-cutting" element={<LaserCutting />} />
        <Route path="/services/sheet-bending" element={<SheetBending />} />
        <Route path="/services/powder-coating" element={<PowderCoating />} />
        <Route path="/services/welding" element={<Welding />} />
        <Route path="/services/metal-structures" element={<MetalStructures />} />
        <Route path="/services/custom-parts" element={<CustomParts />} />
        <Route path="/services/metal-furniture" element={<MetalFurniture />} />
      </Route>
    </Routes>
    <FloatingButton />
    <ScrollToTopButton/>
    <Footer/>
    </>
  );
}

export default App;