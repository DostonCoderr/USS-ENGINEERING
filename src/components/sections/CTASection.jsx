// src/components/sections/CTASection.jsx → ZAYAVKA QOLDIRISH BOSILGANDA POPUP OCHILADI!

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import OrderModal from "../common/PopupForm"; // to‘g‘ri yo‘l

export default function CTASection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });
  
  // MODAL HOLATI — YANGI!
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
        {/* Kosmik fon + yulduzcha animatsiyasi */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-purple-950/40 to-transparent" />
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: [0.2, 0.8, 0.2] } : {}}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9 }}
            className="space-y-10"
          >
            {/* Sarlavha */}
            <h2 className="text-4xl md:text-5xl font-bold text-white/95">
              {t("cta.title")}
            </h2>

            {/* 15 daqiqada javob */}
            <motion.p
              initial={{ scale: 0.95, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl md:text-3xl font-medium text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text"
            >
              {t("cta.promise")}
            </motion.p>

            {/* ICONLAR – animatsiyali */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-10 md:gap-16 py-8"
            >
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 2, repeat: Infinity }} className="p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
                <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </motion.div>

              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} className="p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
                <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </motion.div>

              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
                <svg className="w-12 h-12 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
            </motion.div>

            {/* ZAYAVKA QOLDIRISH TUGMASI — ENDI POPUP OCHILADI! */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                onClick={openModal} // MODAL OCHILADI!
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-16 py-7 bg-gradient-to-r from-indigo-600 to-purple-700 backdrop-blur-2xl border border-white/30 rounded-3xl text-white text-2xl font-bold shadow-2xl overflow-hidden group hover:shadow-purple-600/70 transition-all"
              >
                <span className="relative z-10 flex items-center gap-5">
                  {t("cta.button")}
                  <motion.span
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </motion.button>
            </motion.div>

            {/* Pastki kichik matn */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="text-white/50 text-base max-w-md mx-auto"
            >
              {t("cta.subtitle")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ORDER MODAL — ENDI OCHILADI! */}
      <OrderModal
        project={{ title: t("cta.button") }}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}