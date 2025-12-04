// src/components/common/ScrollToTopButton.jsx → FloatingButton bilan do‘st!

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setIsVisible(window.pageYOffset > 500);
    };
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.6 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Agar FloatingButton yo‘q bo‘lsa — oddiy joylashuv
  // Agar bor bo‘lsa — uning ustida, lekin hech qachon ustiga chiqmaydi
  return (
    <>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-28 right-8 z-40 w-[65px] h-[65px] bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center shadow-2xl group"
          style={{ bottom: "7.5rem" }} // FloatingButton (64px + 32px margin) ustida
        >
          <motion.svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </motion.svg>

          {/* Hover effekt */}
          <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-500" />
        </motion.button>
      )}
    </>
  );
}