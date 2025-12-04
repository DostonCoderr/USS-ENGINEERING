// src/components/sections/ServiceHero.jsx → HAR BIR XIZMAT UCHUN HERO

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServiceHero({ 
  title = "Xizmat nomi", 
  subtitle = "Professional yondashuv va zamonaviy texnologiyalar", 
  image = "/images/services/default.jpg",
  features = ["Yuqori aniqlik", "Tez yetkazib berish", "Sifat kafolati"]
}) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Kosmik fon + yulduzlar */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-black" />
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* CHAP – Matn */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white"
        >
          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
          >
            <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
              {title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="mt-6 text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>

          {/* Features list */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 space-y-4"
          >
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                <span className="text-lg text-white/80">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* Tugmalar */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-white text-lg font-bold shadow-2xl hover:shadow-purple-600/60 transition-all"
            >
              Bepul hisob-kitob
            </motion.button>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-white/40 rounded-full text-white text-lg font-medium backdrop-blur-sm hover:border-white/80 hover:bg-white/10 transition-all"
              >
                Maslahat olish
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* O‘NG – Rasm (zoom effekt) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <motion.div
            initial={{ scale: 1.3 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, ease: "easeOut" }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover aspect-square lg:aspect-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </motion.div>
        </motion.div>
      </div>

      {/* Pastga strelka */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}