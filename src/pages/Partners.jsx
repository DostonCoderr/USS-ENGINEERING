import { motion } from "framer-motion";

export default function Partners() {
  const partners = [
    "Trumpf", "Amada", "Bystronic", "Mazak", "Salvagnini", "Durma", "Haco"
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-black -z-10" />

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-black text-white mb-16"
        >
          Hamkorlar
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {partners.map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition"
            >
              <div className="text-4xl font-black text-white">{name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}