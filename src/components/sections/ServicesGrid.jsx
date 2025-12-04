// src/components/sections/ServicesGrid.jsx → ENDI 100% ISHLAYDI!

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ServicesGrid() {
  const { t, i18n } = useTranslation("services"); // "services" namespace
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // services.json array sifatida keladi → t("0.title") emas, to‘g‘ridan-to‘g‘ri array!
  const services = t("services", { returnObjects: true });

  return (
    <section ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Kosmik fon */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />
        {[...Array(80)].map((_, i) => (
          <div key={i} className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ y: 60, opacity: 0 }} animate={isInView ? { y: 0, opacity: 1 } : {}} className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black">
            <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {t("services.title", { ns: "translation" })}
            </span>
          </h2>
          <p className="mt-4 text-xl text-white/60 max-w-3xl mx-auto">
            {t("services.description", { ns: "translation" })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to={service.path} key={index}>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -20, scale: 1.05 }}
                className="group relative block h-full"
              >
                <div className="relative h-full p-8 bg-white/8 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl transition-all duration-500 group-hover:bg-white/14 group-hover:border-white/30 group-hover:shadow-purple-500/30">
                  <div className="mb-6">
                    <img src={service.icon} alt={service.title} className="w-14 h-14 filter brightness-0 invert group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-6">{service.desc}</p>
                  <div className="flex items-center text-indigo-300 font-medium">
                    <span>{t("services.more_details", { ns: "translation" })}</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-3 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div initial={{ y: 60, opacity: 0 }} animate={isInView ? { y: 0, opacity: 1 } : {}} transition={{ delay: 0.8 }} className="text-center mt-20">
          <Link to="/contact">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="px-14 py-6 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-white text-xl font-bold shadow-2xl hover:shadow-purple-600/60 transition-all"
            >
              {t("services.cta_button", { ns: "translation" })}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}