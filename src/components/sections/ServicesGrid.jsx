import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ServicesGrid() {
  const { t } = useTranslation("services"); 
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = t("services", { returnObjects: true });

  return (
    <section ref={ref} className="relative py-16 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />
        {[...Array(50)].map((_, i) => (
          <div key={i} className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ y: 40, opacity: 0 }} 
          animate={isInView ? { y: 0, opacity: 1 } : {}} 
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-tight">
            <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent italic">
              {t("services.title", { ns: "translation" })}
            </span>
          </h2>
          <p className="mt-4 text-base md:text-xl text-white/60 max-w-2xl mx-auto font-light">
            {t("services.description", { ns: "translation" })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Array.isArray(services) && services.map((service, index) => (
            <Link to={service.path} key={index} className="block">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative h-full"
              >
                <div className="relative h-full p-6 md:p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] transition-all duration-500 group-hover:bg-white/10 group-hover:border-purple-500/50 group-hover:shadow-[0_20px_50px_rgba(79,70,229,0.2)]">
                  <div className="mb-6">
                    <img 
                      src={service.icon} 
                      alt={service.title} 
                      className="w-12 h-12 md:w-14 md:h-14 filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300" 
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-sm md:text-base text-white/60 leading-relaxed mb-6 font-light">{service.desc}</p>
                  
                  <div className="flex items-center text-indigo-400 text-sm font-semibold uppercase tracking-wider">
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

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={isInView ? { opacity: 1 } : {}} 
          transition={{ delay: 0.5 }} 
          className="text-center mt-16 md:mt-24"
        >
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 md:px-14 md:py-6 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl md:rounded-full text-white text-lg md:text-xl font-black shadow-xl hover:shadow-purple-600/50 transition-all active:scale-90"
            >
              {t("services.cta_button", { ns: "translation" })}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}