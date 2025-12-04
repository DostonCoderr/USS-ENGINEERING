// src/pages/Home.jsx → FAQAT BOSH SAHIFA UCHUN

import Hero from "../components/sections/Hero";
import ServicesGrid from "../components/sections/ServicesGrid"; // Xizmatlar (grid)
import Advantages from "../components/sections/Advantages"; // Afzalliklar (raqamlar)
import AboutShort from "../components/sections/AboutShort"; // Kompaniya haqida qisqacha
import PortfolioMasonry from "../components/sections/PortfolioMasonry"; // So‘nggi loyihalar
import ReviewsSlider from "../components/sections/ReviewsSlider"; // Mijozlar fikri
import PartnersCarousel from "../components/sections/PartnersCarousel"; // Hamkorlar
import CTASection from "../components/sections/CTASection"; // Oxirgi chaqiriq
import ContactMap from "../components/sections/ContactMap"; // Xarita + forma (oxirida)
import VideoTestimonials from "../components/sections/VideoTestimonials";
import Calculator from "../components/sections/Calculator";
import FAQ from "../components/sections/Faq";
import TechTable from "../components/sections/TechTable";

export default function Home() {
  return (
    <>
      {/* 1 – Hero (sizda tayyor) */}
      <Hero />
      {/* 2 – Xizmatlar (faqat grid, ServiceHero emas!) */}
      <ServicesGrid />
      {/* 3 – Afzalliklar (14+ yil, 9500+ loyiha, va h.k.) */}
      <Advantages />
      {/* 4 – Kompaniya haqida qisqacha */}
      <AboutShort />
      {/* 5 – So‘nggi loyihalar (portfolio preview) */}
      <PortfolioMasonry limit={8} /> {/* Faqat 6 ta ko‘rsatish */}
      {/* 6 – Mijozlar sharhlari */}
      <ReviewsSlider />
      {/* 7 – Hamkorlar */}
      <PartnersCarousel />

      <TechTable />

      <VideoTestimonials />

      <Calculator />
      
      {/* 8 – Oxirgi CTA (katta tugma) */}
      <CTASection />
      <FAQ />
      {/* 9 – Kontakt + xarita (oxirgi bo‘lim) */}
      <ContactMap />
    </>
  );
}
