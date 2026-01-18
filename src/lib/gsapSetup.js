import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initLenis } from "./lenis";

gsap.registerPlugin(ScrollTrigger);

let lenis;

const initGsapWithLenis = () => {
  if (typeof window === "undefined") return;

  lenis = initLenis();


  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
};

export { gsap, ScrollTrigger, initGsapWithLenis };