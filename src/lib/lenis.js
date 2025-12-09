// src/lib/lenis.js - TO'G'RILANGAN
import Lenis from "@studio-freight/lenis";

export const initLenis = () => {
  const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
    normalizeWheel: true,
  });

  // 🛑 DIQQAT: Lenis'ning o'z RAF loopi o'chirildi!
  // Bu loopni endi 'gsapSetup.js' boshqaradi.

  return lenis;
};