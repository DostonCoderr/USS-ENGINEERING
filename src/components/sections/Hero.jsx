// src/components/HeroVideo.jsx → POPUP OCHILADI + TARJIMA + ZO‘R!

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import OrderModal from "../common/PopupForm"; // to‘g‘ri yo‘l

export default function HeroVideo() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false); // YANGI: modal holati

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video fon */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/metall-factory.mp4" type="video/mp4" />
          {/* Fallback gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />
        </video>

        {/* Qorong‘i qoplama */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Kontent */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Kompaniya nomi */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
              <span className="inline-block bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent drop-shadow-2xl">
                USS -
              </span>
              <span className="inline-block text-white/30"> ENGINEERING</span>
            </h1>

            {/* Tarjima qilinadigan subtitr */}
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-6 text-2xl md:text-4xl text-white/80 font-light leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* BEPUL HISOB-KITOB TUGMASI — ENDI POPUP OCHILADI! */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12"
            >
              <motion.button
                onClick={openModal} // YANGI: modal ochiladi
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  // Kichik ekranlar uchun kichikroq o'lcham
                  px-8 py-4 text-xl
                  // O'rta ekranlar uchun kattaroq o'lcham
                  sm:px-10 sm:py-5 sm:text-2xl 
                  md:px-14 md:py-7 md:text-2xl // Katta ekranlar uchun original o'lcham
                  
                  bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-white font-bold 
                  shadow-2xl hover:shadow-purple-600/60 transition-all shadow-purple-500/30
                "
              >
                {t("hero.cta_button")} {/* "Bepul hisob-kitob olish" */}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Pastga strelka */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* ORDER MODAL — ENDI OCHILADI! */}
      <OrderModal
        project={{ title: t("hero.cta_button") }}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}