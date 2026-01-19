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

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-0 pt-16 lg:pt-0">
        
        {/* Chap matn – hammasi kichraytirildi */}
        <div className="px-5 sm:px-8 lg:px-12 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left pb-10 lg:pb-0">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="flex flex-col font-black tracking-tight italic">
              <span className="text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
                USS
              </span>
              <span className="text-xl sm:text-3xl lg:text-4xl text-white/40 leading-tight mt-1">
                ENGINEERING
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg lg:text-base text-white/70 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
              {t("hero.description")}
              {/* Agar tavsif juda uzun bo'lsa, shu yerni qisqartirib qo'ying */}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-purple-600/40 transition-all min-w-[140px]"
              >
                {t("hero.order_btn") || "Bepul hisob-kitob olish"}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 border border-white/30 rounded-full text-white font-medium text-xs sm:text-sm uppercase tracking-wider backdrop-blur-sm hover:bg-white/10 transition-all min-w-[140px]"
              >
                {t("hero.portfolio_btn") || "Portfolio"}
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* O‘ng Swiper – biroz kichraytirildi */}
        <div className="flex items-center justify-center px-5 sm:px-8 lg:px-12 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full max-w-[260px] sm:max-w-[380px] lg:max-w-[480px] aspect-square rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(79,70,229,0.25)] border border-white/10"
          >
            <Swiper
              modules={[Autoplay, EffectFade]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              effect="fade"
              loop={true}
              speed={1400}
              className="h-full w-full"
            >
              {[1, 2, 3, 4].map((i) => (
                <SwiperSlide key={i}>
                  <img
                    src={`/images/hero-${i}.jpg`}
                    alt="Engineering Project"
                    className="w-full h-full object-cover scale-105"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>

      {/* Pastga strelka */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hidden md:block"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}