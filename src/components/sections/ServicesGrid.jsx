import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ServicesGrid() {
  const { t } = useTranslation("services"); 
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const services = t("services", { returnObjects: true });

  return (
    <section ref={ref} className="relative py-12 lg:py-20 overflow-hidden">
      {/* Fon – yulduzlar sonini kamaytirdik, mobil uchun og'irlikni kamaytirish */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />
        {[...Array(30)].map((_, i) => (  // 50 → 30 ga kamaytirdik
          <div 
            key={i} 
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sarlavha – mobil uchun kichikroq */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }} 
          animate={isInView ? { y: 0, opacity: 1 } : {}} 
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent italic">
              {t("services.title", { ns: "translation" })}
            </span>
          </h2>
          <p className="mt-3 md:mt-5 text-sm sm:text-base md:text-lg text-white/70 max-w-3xl mx-auto font-light">
            {t("services.description", { ns: "translation" })}
          </p>
        </motion.div>

        {/* Grid – mobil uchun 1, tablet uchun 2, desktop uchun 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {Array.isArray(services) && services.map((service, index) => (
            <Link to={service.path} key={index} className="block h-full">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative h-full"
              >
                <div className="relative h-full p-5 sm:p-6 md:p-7 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl transition-all duration-400 group-hover:bg-white/10 group-hover:border-purple-500/40 group-hover:shadow-[0_15px_40px_rgba(79,70,229,0.15)]">
                  <div className="mb-4 sm:mb-5">
                    <img 
                      src={service.icon} 
                      alt={service.title} 
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300" 
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-white/65 leading-relaxed mb-4 sm:mb-6 font-light">
                    {service.desc}
                  </p>
                  
                  <div className="flex items-center text-indigo-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    <span>{t("services.more_details", { ns: "translation" })}</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA button – mobil uchun kichikroq */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={isInView ? { opacity: 1 } : {}} 
          transition={{ delay: 0.6 }}
          className="text-center mt-12 md:mt-20"
        >
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 sm:px-10 sm:py-5 md:px-14 md:py-6 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl sm:rounded-2xl md:rounded-full text-white text-base sm:text-lg md:text-xl font-bold shadow-lg hover:shadow-purple-600/50 transition-all active:scale-95"
            >
              {t("services.cta_button", { ns: "translation" })}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}