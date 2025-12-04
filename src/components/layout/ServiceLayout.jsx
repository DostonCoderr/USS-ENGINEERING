// src/layout/ServiceLayout.jsx → BARCHA XIZMATLAR UCHUN UMUMIY

import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

export default function ServiceLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-black">
      {/* Hero qismi – har bir xizmat uchun umumiy */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black text-white"
          >
            Xizmatlarimiz
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-xl md:text-2xl text-white/70 max-w-4xl mx-auto"
          >
            Zamonaviy uskunalar va tajribali jamoa bilan sizning loyihangizni hayotga tatbiq etamiz
          </motion.p>
        </div>
      </section>

      {/* Har bir xizmatning o‘z sahifasi shu yerga keladi */}
      <Outlet />
    </div>
  );
}