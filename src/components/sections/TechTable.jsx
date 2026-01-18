import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function TechTable() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techData = t("tech.data", { returnObjects: true });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* ContactMap bilan bir xil "Kosmik" fon */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-gray-100 via-white to-gray-400 bg-clip-text text-transparent">
              {t("tech.title")}
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-medium">
            {t("tech.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {Array.isArray(techData) && techData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center justify-between p-8 md:p-10 border-b border-white/10 group hover:bg-white/[0.07] transition-all duration-500 ${
                  index % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <div className="space-y-1">
                  <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Parametr
                  </p>
                  <div className="text-white/80 text-lg md:text-xl font-semibold group-hover:text-white transition-colors">
                    {item.param}
                  </div>
                </div>
                
                <div className="text-right">
                  <span className="text-2xl md:text-3xl font-black bg-gradient-to-br from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 block transition-transform duration-300">
                    {item.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-white/10 text-center"
        >
          <p className="text-white/60 text-lg md:text-xl italic font-light leading-relaxed">
            {t("tech.footer_text")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}