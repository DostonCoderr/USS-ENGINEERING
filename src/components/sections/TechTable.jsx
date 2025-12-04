// src/components/sections/TechTable.jsx → TEXNIK IMKONIYATLAR JADVALI

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TechTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const data = [
    { param: "Lazer kesim (TRUMPF)", value: "6000 × 2500 mm gacha" },
    { param: "Maksimal qalinlik (Qora po‘lat)", value: "25 mm" },
    { param: "Maksimal qalinlik (Nerjaveyka)", value: "20 mm" },
    { param: "Maksimal qalinlik (Alyuminiy)", value: "15 mm" },
    { param: "Listogib kuchi", value: "320 tonna" },
    { param: "Bukish uzunligi", value: "4000 mm gacha" },
    { param: "Poroshkali bo‘yash kamerasi", value: "7000 × 2500 × 3000 mm" },
    { param: "Payvandlash turlari", value: "MIG/MAG, TIG, Argon, Plazma" },
    { param: "Yillik ishlab chiqarish hajmi", value: "15 000+ tonna" },
    { param: "Loyiha muddati", value: "5 kundan 45 kungacha" },
    { param: "Yetkazib berish", value: "O‘zbekiston bo‘ylab bepul" },
    { param: "Kafolat", value: "36 oy" },
  ];

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Kosmik fon */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-purple-950/60 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Sarlavha */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Texnik imkoniyatlar
            </span>
          </h2>
          <p className="mt-4 text-xl text-white/60">
            Zamonaviy uskunalar va katta ishlab chiqarish quvvati
          </p>
        </motion.div>

        {/* Jadval – premium ko‘rinish */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center justify-between p-6 md:p-8 border-b border-white/5 last:border-b-0 ${
                  index % 2 === 0 ? "md:border-r md:border-r-white/5" : ""
                } hover:bg-white/5 transition-all duration-300`}
              >
                <div className="text-white/80 text-lg font-medium">
                  {item.param}
                </div>
                <div className="text-right">
                  <span className="text-2xl md:text-3xl font-black text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">
                    {item.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pastki eslatma */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-white/50 mt-10 text-lg"
        >
          Har qanday murakkablikdagi loyihalarni qabul qilamiz. Agar sizda chizma bo‘lsa – 24 soat ichida hisob-kitob tayyor!
        </motion.p>
      </div>
    </section>
  );
}