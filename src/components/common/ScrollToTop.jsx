// src/components/common/ScrollToTop.jsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1-usul: oddiy (tezroq)
    window.scrollTo(0, 0);

    // 2-usul: Lenis bilan silliq (agar Lenis o‘rnatgan bo‘lsangiz)
    // if (window.lenis) {
    //   window.lenis.scrollTo(0, { duration: 0 });
    // } else {
    //   window.scrollTo(0, 0);
    // }
  }, [pathname]); // har sahifa o‘zgarganda ishlaydi

  // Hech narsa render qilmaydi
  return null;
}