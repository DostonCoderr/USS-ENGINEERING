import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const isScrollingRef = useRef(false); 

  useEffect(() => {
    const toggle = () => setIsVisible(window.pageYOffset > 500);

    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollToTop = () => {
 
    if (isScrollingRef.current) return;
    isScrollingRef.current = true;

    if (window.lenis && typeof window.lenis.scrollTo === "function") {
      window.lenis.scrollTo(0, {
        duration: 1.6,
        onComplete: () => {
          isScrollingRef.current = false; 
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Smooth scroll tugashini taxminan 900ms deb olish
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 900);
    }
  };

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
          className="fixed right-8 z-40 w-[65px] h-[65px] bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center shadow-2xl group"
          style={{ bottom: "8rem" }}
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

          <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-500" />
        </motion.button>
      )}
    </>
  );
}
