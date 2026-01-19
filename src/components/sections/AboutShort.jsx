import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const statsData = [
  {
    icon: 'M17 20h-5v-11h-5v11h-5v-13h15v13zm-10-8l3-3 3 3v-3h-6v3z',
    value: '50+',
    titleKey: 'about.stat_projects_title',
    descKey: 'about.stat_projects_desc',
  },
  {
    icon: 'M12 2c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 14c-4.42 0-8 3.58-8 8h16c0-4.42-3.58-8-8-8z',
    value: '120+',
    titleKey: 'about.stat_employees_title',
    descKey: 'about.stat_employees_desc',
  },
  {
    icon: 'M12 2l-5 5h10l-5-5zM12 22l5-5h-10l5 5zM17 11h-10l-2 2v2h14v-2l-2-2z',
    value: '10K+',
    titleKey: 'about.stat_production_title',
    descKey: 'about.stat_production_desc',
  },
];

export default function AboutShort() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleButtonClick = () => {
    navigate('/about');
  };

  const features = Array.isArray(t("about.features", { returnObjects: true }))
    ? t("about.features", { returnObjects: true })
    : [];

  return (
    <section ref={ref} className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />
        {[...Array(50)].map((_, i) => (  // 90 → 50 ga kamaytirdik, mobil uchun tezroq yuklanadi
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 7}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* CHAP TARAF – matn qismi */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {t("about.title")}
            </span>
          </motion.h2>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-5 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: `${t("about.mainText1")}<br/><br/>${t("about.mainText2")}<br/><br/>${t("about.mainText3")}`
            }}
          />

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 space-y-3"
          >
            {features.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-indigo-400 rounded-full flex-shrink-0" />
                <span className="text-white/90 text-sm sm:text-base font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Button – endi kichikroq va moslashuvchan */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10"
          >
            <motion.button
              onClick={handleButtonClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3.5 sm:px-9 sm:py-4 md:px-10 md:py-4.5 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-white text-base sm:text-lg md:text-xl font-bold shadow-lg hover:shadow-purple-600/50 transition-all"
            >
              {t("about.button")}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* O‘NG TARAF – statistika */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 lg:space-y-8"
        >
          {/* Yillik tajriba – kichikroq */}
          <div className="p-6 sm:p-7 md:p-8 bg-white/8 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl">
            <div className="text-5xl sm:text-6xl md:text-7xl font-black text-white">
              7<span className="text-indigo-400">+</span>
            </div>
            <p className="mt-2 text-lg sm:text-xl text-white/80 font-medium">{t("about.yearsTitle")}</p>
            <p className="mt-3 text-sm sm:text-base text-white/60">{t("about.yearsDesc")}</p>
          </div>

          {/* Statistik kartochkalar – ixchamroq */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="p-5 sm:p-6 bg-white/6 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex flex-col items-center text-center"
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400 mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={stat.icon} />
                </svg>
                <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-white/80">{t(stat.titleKey)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}