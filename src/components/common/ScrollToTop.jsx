import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap"; 

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenisInstance = window.lenis;

    if (lenisInstance && typeof lenisInstance.scrollTo === 'function') {
      

      lenisInstance.stop();

      lenisInstance.scrollTo(0, {
        duration: 0, 
        force: true, 
      });

      lenisInstance.start(); 
      
      
    } else {
      // Lenis ishlamasa, standart usul.
      window.scrollTo(0, 0);
    }
    
    // 2. Skroll tugagandan so'ng GSAP/ScrollTrigger'ni yangilash
    setTimeout(() => {
        if (ScrollTrigger) {
            ScrollTrigger.refresh(true);
        }
    }, 100); 

  }, [pathname]); 

  return null;
}