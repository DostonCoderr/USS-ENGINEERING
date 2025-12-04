// src/hooks/useLenisScroll.js
import { useEffect } from "react";
import { initLenis } from "../lib/lenis";

export const useLenisScroll = () => {
  useEffect(() => {
    const lenis = initLenis();

    return () => {
      lenis.destroy();
    };
  }, []);
};