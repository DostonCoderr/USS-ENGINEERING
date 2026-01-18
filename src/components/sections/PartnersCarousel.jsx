
import { useState } from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";

import partners from "../../data/partners";


function PartnerItem({ partner }) {

  const [imageError, setImageError] = useState(false);


  const containerClasses = "flex flex-col items-center justify-center h-24 md:h-32 px-2";
  const hoverClasses = "transition-all duration-300 hover:scale-105";

  if (imageError || !partner.img) {

    return (
      <div className={`${containerClasses}`} style={{ width: 'auto' }}>
        <span className="text-white/70 font-medium text-sm md:text-lg text-center block w-full h-full flex items-center justify-center whitespace-nowrap">
          {partner.name}
        </span>
      </div>
    );
  }


  return (
    <div 
      className={`${containerClasses} ${hoverClasses}`}
      style={{ width: 'auto' }} 
    >
      <img
        src={partner.img}
        alt={partner.name}
        className="w-auto h-full object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300" 
        loading="lazy"
        onError={() => setImageError(true)}
      />
    </div>
  );
}


export default function PartnersCarousel() {
  const { t } = useTranslation();

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-black/50">
      {/* Orqa fon qoldi */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-950/70 via-purple-950/50 to-indigo-950/70" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <h3 className="text-center text-2xl md:text-3xl font-bold mb-8 text-white/90">
          {t("partners.title")}
        </h3>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}

          breakpoints={{
            640: 	{ slidesPerView: 4 },
            768: 	{ slidesPerView: 5 }, 
            1024: { slidesPerView: 6 }, 
            1280: { slidesPerView: 7 },
          }}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={7000}
          loop={true}
          allowTouchMove={false}
          className="partners-swiper"
        >
          {[...partners, ...partners].map((partner, index) => (
            <SwiperSlide key={index}>
      
              <PartnerItem partner={partner} /> 
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style >{`
        .partners-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}