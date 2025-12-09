import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap"; // GSAP'ni alohida import qilish kerak

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Lenis orqali scrollni zudlik bilan tepaga chiqarish
    const lenisInstance = window.lenis;

    if (lenisInstance && typeof lenisInstance.scrollTo === 'function') {
      
      // A. Lenisni to'xtatish (agar u animatsiyada bo'lsa)
      // Bu muhim, chunki u hali tugallanmagan oldingi animatsiyani bekor qiladi.
      lenisInstance.stop();

      // B. 0-pozitsiyaga tezkor o'tkazish
      lenisInstance.scrollTo(0, {
        duration: 0, 
        // immediate o'rniga duration: 0 va force: true ishlatamiz
        force: true, 
      });

      // C. Skrollni qayta ishga tushirish
      lenisInstance.start(); 
      
      
    } else {
      // Lenis ishlamasa, standart usul.
      window.scrollTo(0, 0);
    }
    
    // 2. Skroll tugagandan so'ng GSAP/ScrollTrigger'ni yangilash
    // Tezkor animatsiya tugagach, 100ms kechikish ScrollTrigger uchun yetarli.
    setTimeout(() => {
        if (ScrollTrigger) {
            // Skrollni tepaga olganimizdan keyin Refresh qilamiz
            ScrollTrigger.refresh(true);
        }
    }, 100); 

  }, [pathname]); // har sahifa o‘zgarganda ishlaydi

  return null;
}