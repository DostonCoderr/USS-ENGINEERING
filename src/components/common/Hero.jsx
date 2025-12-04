// src/components/HeroWithSwiper.jsx → HAMMA NARSASI KICHIK VA MUVOZANATLI!

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroWithSwiper() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-black">
      {/* Kosmik fon */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-black opacity-90" />
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center h-screen">
        
        {/* CHAP – Matn (kichik va ixcham) */}
        <div className="px-6 lg:px-12 flex flex-col justify-center h-full">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent">
                USS
              </span>
              <span className="block text-white/40 text-4xl md:text-5xl lg:text-6xl mt-1">
                ENGINEERING
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/70 font-light leading-snug">
              Professional metall konstruktsiyalar<br />
              14+ yil tajriba • 9500+ loyiha • Zamonaviy zavod
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-white font-semibold text-sm shadow-lg hover:shadow-purple-600/50 transition-all"
              >
                Bepul hisob-kitob
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 border border-white/30 rounded-full text-white font-medium text-sm backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* O‘NG – Swiper (rasm ham kichikroq, matn bilan bir xil balandlikda) */}
        <div className="h-full flex items-center justify-center px-6 lg:px-12">
          <div className="w-full max-w-md lg:max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl">
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
                  <motion.div
                    initial={{ scale: 1.25 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                    className="h-full w-full"
                  >
                    <img
                      src={`/images/hero-${i}.jpg`}
                      alt="USS Engineering"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Pastga strelka */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}