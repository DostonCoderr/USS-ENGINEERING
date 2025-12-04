// src/pages/Services/CustomParts.jsx → 3 TILDA + PROFESSIONAL TARJIMA

import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import OrderModal from "../../components/common/PopupForm";
import { useTranslation } from "react-i18next";
import { 
  Zap, Ruler, Shield, Clock4, Gem, Factory, 
  Wrench, CheckCircle2, Truck, ArrowRight, Sparkles, Settings
} from "lucide-react";

export default function CustomParts() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-black -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black text-white mb-8"
          >
            {t("custom.title")}
          </motion.h1>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            {t("custom.subtitle")}
          </p>
          <div className="flex justify-center gap-8 mb-10 text-5xl">
            <Settings className="text-cyan-400" />
            <Factory className="text-gray-400" />
            <Wrench className="text-orange-400" />
            <Sparkles className="text-purple-400" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setModalOpen(true)} 
              className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-xl font-bold text-white shadow-xl hover:shadow-purple-600/60 transition-all flex items-center gap-3 group"
            >
              {t("custom.cta_calc")} <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition" />
            </button>
            <Link to="/portfolio" className="px-10 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-full text-xl font-medium text-white hover:bg-white/20 transition">
              {t("custom.cta_portfolio")}
            </Link>
          </div>
        </div>
      </section>

      {/* STATISTIKA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Gem className="w-10 h-10 text-blue-400" />, v: t("custom.stats.complexity"), m: t("custom.stats.any") },
            { icon: <Factory className="w-10 h-10 text-gray-400" />, v: "CNC", m: t("custom.stats.precision") },
            { icon: <Ruler className="w-10 h-10 text-cyan-400" />, v: "±0.1 mm", m: t("custom.stats.tolerance") },
            { icon: <Clock4 className="w-10 h-10 text-pink-400" />, v: "7-30 " + t("custom.stats.days"), m: t("custom.stats.production") },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center">
              {item.icon}
              <div className="text-3xl font-bold text-white mt-3">{item.v}</div>
              <div className="text-white/60 text-sm mt-1">{item.m}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AFZALLIKLAR */}
      <section className="py-16 bg-black/30">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { i: <CheckCircle2 className="w-10 h-10 text-green-400" />, t: t("custom.advantages.free_design") },
            { i: <Wrench className="w-10 h-10 text-purple-400" />, t: t("custom.advantages.prototype") },
            { i: <Factory className="w-10 h-10 text-indigo-400" />, t: t("custom.advantages.equipment") },
            { i: <Shield className="w-10 h-10 text-cyan-400" />, t: t("custom.advantages.warranty") },
            { i: <Truck className="w-10 h-10 text-pink-400" />, t: t("custom.advantages.delivery") },
            { i: <Zap className="w-10 h-10 text-yellow-400" />, t: t("custom.advantages.fast_prototype") },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              {item.i}
              <span className="text-lg font-medium text-white">{item.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <OrderModal 
        project={{ title: t("custom.title") }} 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  );
}