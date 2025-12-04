import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    { name: "Azizbek", text: "Tez va sifatli! 3 kun ichida 500 dona tayyor bo‘ldi", rating: 5 },
    { name: "Jamshid", text: "Bepul chizma chizib berdi – rahmat!", rating: 5 },
    { name: "Olim", text: "Narxi hamyonbop, kafolat 36 oy – ishonchli!", rating: 5 },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-black -z-10" />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-black text-white mb-16"
        >
          Mijozlar fikri
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">"{r.text}"</p>
              <p className="text-lg font-bold text-white">— {r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}