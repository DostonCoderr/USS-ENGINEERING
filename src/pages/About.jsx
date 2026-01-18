import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Factory, ShieldCheck, Clock, Users, Award, Target } from "lucide-react";
import partnersData from "../data/partners"; 

const displayedPartners = partnersData.slice(0, 8); 

export default function About() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
   
      <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-black -z-10" />
        
        <div className="max-w-5xl mx-auto px-6 text-center pt-[105px]">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            {t("about.title")}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            {t("about.description")}
          </motion.p>
        </div>
      </section>

   
      <section className="py-16 bg-black/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
            <Target className="w-14 h-14 text-indigo-400 mx-auto mb-5" />
            <h2 className="text-3xl font-black text-white mb-4">{t("about.mission_title")}</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              {t("about.mission")}
            </p>
          </div>
        </div>
      </section>


      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                {t("about.experience_title")}
              </h2>
              <p className="text-base text-white/80 leading-relaxed mb-6">
                {t("about.experience_desc")}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-yellow-400" />
                  <span className="text-lg text-white font-medium">{t("about.experience_point1")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-cyan-400" />
                  <span className="text-lg text-white font-medium">{t("about.experience_point2")}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
                <Factory className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                <p className="text-3xl font-black text-white">500+</p>
                <p className="text-white/70 text-sm">{t("about.stats_projects")}</p>
              </div>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
                <ShieldCheck className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <p className="text-3xl font-black text-white">100%</p>
                <p className="text-white/70 text-sm">{t("about.stats_quality")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <section className="py-16 bg-black/40">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white text-center mb-10">
            {t("about.partners_title")}
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 text-lg font-bold text-white/80">
            {displayedPartners.map((partner, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition"
              >
                {partner.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
            {t("about.why_title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck className="w-12 h-12" />, title: t("about.why_quality"), desc: t("about.why_quality_desc") },
              { icon: <Clock className="w-12 h-12" />, title: t("about.why_delivery"), desc: t("about.why_delivery_desc") },
              { icon: <Users className="w-12 h-12" />, title: t("about.why_team"), desc: t("about.why_team_desc") },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="text-indigo-400 mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 bg-gradient-to-r from-indigo-900/70 to-purple-900/70">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            {t("about.cta_title")}
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = "/contact"}
            className="px-16 py-6 bg-white text-black rounded-full text-2xl font-black shadow-2xl hover:shadow-white/50 transition-all"
          >
            {t("about.cta_button")}
          </motion.button>
        </div>
      </section>
    </>
  );
}