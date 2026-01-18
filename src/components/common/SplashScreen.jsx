import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ finishLoading }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsExiting(true);
      setTimeout(finishLoading, 900);
    }, 3400);

    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030712] overflow-hidden">
      {/* Orqa fon effektlari */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-black to-blue-950/10"
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-10 md:gap-14">
        {/* Logo qismi */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Logo orqasidagi neon glow - faqat chetlariga urg'u berish uchun */}
          <div className="absolute inset-[-20px] rounded-[2.5rem]  blur-2xl animate-pulse" />

          {/* ASOSIY LOGO KONTEYNERI - TOZA QORA FON */}
          <div className="w-58 h-58 md:w-64 md:h-64 bg-black rounded-[15rem] p-8 flex items-center justify-center border border-white/5 relative z-10 ">
            <img
              src="/images/logo/Logo.png"
              alt="USS Engineering"
              className="w-full h-full object-contain brightness-110"
            />
          </div>
        </motion.div>

        {/* Matn qismi */}
        <div className="text-center space-y-4">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-3xl md:text-6xl font-black tracking-[0.4em] md:tracking-[0.6em] text-white italic"
          >
            USS-ENGINEERING
          </motion.h1>

          {/* Progress Bar */}
          <div className="mt-6 w-56 md:w-80 h-1 bg-white/5 rounded-full overflow-hidden mx-auto relative">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-blue-400 to-indigo-600 origin-left"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-indigo-300/50 text-[10px] md:text-xs tracking-[0.5em] uppercase mt-4 font-bold"
          >
            Building the Future
          </motion.p>
        </div>
      </div>

      {/* Chiqish pardasi */}
      <AnimatePresence>
        {isExiting && (
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
            className="absolute inset-0 bg-[#030712] z-50 border-b border-indigo-500/20"
          />
        )}
      </AnimatePresence>
    </div>
  );
}