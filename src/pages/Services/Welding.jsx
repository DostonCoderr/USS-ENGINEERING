import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import OrderModal from "../../components/common/PopupForm";
import { useTranslation } from "react-i18next";
import { 
  Zap, Shield, Flame, Factory, 
  Wrench, CheckCircle2, Truck, ArrowRight, FileText, HelpCircle, Sparkles
} from "lucide-react";

export default function Welding() {
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
            className="text-5xl md:textxt-7xl font-black text-white mb-8"
          >
            {t("welding.title")}
          </motion.h1>

          <div className="flex justify-center gap-8 mb-10 text-5xl">
            <Flame className="text-orange-500" />
            <Wrench className="text-gray-400" />
            <Zap className="text-yellow-400" />
            <Shield className="text-cyan-400" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-xl font-bold text-white shadow-xl hover:shadow-purple-600/60 transition-all flex items-center gap-3 group"
            >
              {t("welding.cta_calc")} <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition" />
            </button>
            <Link to="/portfolio" className="px-10 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-full text-xl font-medium text-white hover:bg-white/20 transition">
              {t("welding.cta_portfolio")}
            </Link>
          </div>
        </div>
      </section>

      {/* QALINLIK / TEXNOLOGIYA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Flame className="w-10 h-10 text-red-500" />, v: "100 mm", m: t("welding.thickness.steel") },
            { icon: <Factory className="w-10 h-10 text-gray-400" />, v: "80 mm", m: t("welding.thickness.stainless") },
            { icon: <Sparkles className="w-10 h-10 text-blue-400" />, v: "50 mm", m: t("welding.thickness.aluminum") },
            { icon: <Zap className="w-10 h-10 text-yellow-400" />, v: "TIG/MIG/argon", m: t("welding.thickness.methods") },
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
            { i: <CheckCircle2 className="w-10 h-10 text-green-400" />, t: t("welding.advantages.quality") },
            { i: <Factory className="w-10 h-10 text-indigo-400" />, t: t("welding.advantages.fronius") },
            { i: <Wrench className="w-10 h-10 text-purple-400" />, t: t("welding.advantages.complex") },
            { i: <Zap className="w-10 h-10 text-yellow-400" />, t: t("welding.advantages.fast") },
            { i: <Shield className="w-10 h-10 text-cyan-400" />, t: t("welding.advantages.warranty") },
            { i: <Truck className="w-10 h-10 text-pink-400" />, t: t("welding.advantages.delivery") },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              {item.i}
              <span className="text-lg font-medium text-white">{item.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          {[
            { q: t("welding.faq.argon"), a: t("welding.faq.argon_answer") },
            { q: t("welding.faq.thick"), a: t("welding.faq.thick_answer") },
            { q: t("welding.faq.delivery"), a: t("welding.faq.delivery_answer") },
          ].map((faq, i) => (
            <details key={i} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 cursor-pointer group">
              <summary className="flex items-center justify-between text-lg font-medium text-white">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-indigo-400" />
                  {faq.q}
                </div>
                <span className="text-xl group-open:rotate-180 transition">↓</span>
              </summary>
              <p className="mt-3 text-white/70 pl-8">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/70 to-purple-900/70">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            {t("welding.final_cta")}
          </h2>
          <button
            onClick={() => setModalOpen(true)}
            className="px-16 py-6 bg-white text-black rounded-full text-2xl font-bold shadow-2xl hover:scale-105 transition-all flex items-center gap-4 mx-auto"
          >
            <FileText className="w-8 h-8" />
            {t("welding.send_drawing")}
          </button>
        </div>
      </section>

      <OrderModal 
        project={{ title: t("welding.title") }} 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  );
}