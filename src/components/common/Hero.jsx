import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroWithSwiper() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-black">
      {/* Kosmik fon */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-black opacity-90" />
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0 pt-20 lg:pt-0">
        
        {/* CHAP – Matn (Mobile uchun kichraytirildi) */}
        <div className="px-6 lg:px-12 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left pb-12 lg:pb-0">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="flex flex-col font-black tracking-tighter italic">
              <span className="text-4xl sm:text-6xl lg:text-8xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-[0.8]">
                USS
              </span>
              <span className="text-2xl sm:text-4xl lg:text-6xl text-white/30 leading-[1.2] mt-1 lg:mt-2">
                ENGINEERING
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-lg lg:text-xl text-white/70 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
              {t("hero.description")}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-white font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-purple-600/40 transition-all"
              >
                {t("hero.order_btn")}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/20 rounded-full text-white font-semibold text-xs uppercase tracking-widest backdrop-blur-md hover:bg-white/10 transition-all"
              >
                {t("hero.portfolio_btn")}
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* O‘NG – Swiper (Mobile o'lchamlar to'g'rilandi) */}
        <div className="flex items-center justify-center px-6 lg:px-12 order-1 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full max-w-[280px] sm:max-w-md lg:max-w-lg aspect-square rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.3)] border border-white/10"
          >
            <Swiper
              modules={[Autoplay, EffectFade]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              effect="fade"
              loop={true}
              speed={1200}
              className="h-full w-full"
            >
              {[1, 2, 3, 4].map((i) => (
                <SwiperSlide key={i}>
                  <img
                    src={`/images/hero-${i}.jpg`}
                    alt="Engineering Project"
                    className="w-full h-full object-cover scale-110"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>

      {/* Pastga strelka (Mobile-da yashirildi) */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hidden md:block"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}