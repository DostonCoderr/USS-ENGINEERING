// src/components/sections/AboutShort.jsx → 100% XATOSIZ + NAVIGATE

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import partnersData from "../../data/partners";
const displayedPartners = partnersData.slice(0, 8);

export default function AboutShort() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleButtonClick = () => {
    navigate('/about');
  };

  // XAVFSIZ USUL: Agar array bo‘lmasa — bo‘sh array qaytaradi
  const features = Array.isArray(t("about.features", { returnObjects: true }))
    ? t("about.features", { returnObjects: true })
    : [];

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />
        {[...Array(90)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* CHAP TARAF */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9 }}
        >
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-black mb-8"
          >
            <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {t("about.title")}
            </span>
          </motion.h2>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6 text-lg md:text-xl text-white/80 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: `${t("about.mainText1")}<br/><br/>${t("about.mainText2")}<br/><br/>${t("about.mainText3")}`
            }}
          />

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 space-y-4"
          >
            {features.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 bg-indigo-400 rounded-full flex-shrink-0" />
                <span className="text-white/90 font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-12"
          >
            <motion.button
              onClick={handleButtonClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-white text-lg font-bold shadow-2xl hover:shadow-purple-600/60 transition-all"
            >
              {t("about.button")}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* O‘NG TARAF */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="space-y-12"
        >
          <div className="p-8 bg-white/8 backdrop-blur-3xl border border-white/10 rounded-3xl">
            <div className="text-6xl md:text-7xl font-black text-white">
              7<span className="text-indigo-400">+</span>
            </div>
            <p className="mt-3 text-xl text-white/80 font-medium">{t("about.yearsTitle")}</p>
            <p className="mt-4 text-white/60">{t("about.yearsDesc")}</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">{t("about.partnersTitle")}</h3>
            <div className="grid grid-cols-2 gap-6">
              {displayedPartners.map((partner, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="p-6 bg-white/6 backdrop-blur-xl border border-white/10 rounded-2xl text-center text-white/80 font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  {partner.name}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}