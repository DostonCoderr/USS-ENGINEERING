import Hero from "../components/sections/Hero";
import ServicesGrid from "../components/sections/ServicesGrid"; 
import Advantages from "../components/sections/Advantages"; 
import AboutShort from "../components/sections/AboutShort"; 
import PortfolioMasonry from "../components/sections/PortfolioMasonry"; 
import ReviewsSlider from "../components/sections/ReviewsSlider"; 
import PartnersCarousel from "../components/sections/PartnersCarousel";
import CTASection from "../components/sections/CTASection"; 
import ContactMap from "../components/sections/ContactMap"; 
import VideoTestimonials from "../components/sections/VideoTestimonials";
import Calculator from "../components/sections/Calculator";
import FAQ from "../components/sections/Faq";
import TechTable from "../components/sections/TechTable";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Advantages />
      <AboutShort />
      <PortfolioMasonry limit={8} /> 
      <ReviewsSlider />
      <PartnersCarousel />
      <TechTable />
      <VideoTestimonials />
      <Calculator />
      <CTASection />
      <FAQ />
      <ContactMap />
    </>
  );
}
