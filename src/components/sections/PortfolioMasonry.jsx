// src/components/sections/PortfolioMasonry.jsx → SUPER IXCHAM VERSIYA

import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import OrderModal from "../common/PopupForm";

export default function PortfolioMasonry({ limit }) {
 const { t } = useTranslation("portfolio");
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, margin: "-100px" });
 const [selectedProject, setSelectedProject] = useState(null);

 // ⭐ Yulduzlar faqat BIR MARTA yaratiladi (Optimallashtirish)
 const stars = useMemo(() => {
 // Yulduzlar soni 40 ta
 return [...Array(40)].map((_, i) => ({
 id: i,
 top: Math.random() * 100,
 left: Math.random() * 100,
 delay: Math.random() * 8,
 }));
 }, []);

 const projects = t("portfolio.projects", { returnObjects: true });
 const displayedProjects = limit ? projects.slice(0, limit) : projects;

 return (
 <>
 <section ref={ref} className="relative py-16 lg:py-20 overflow-hidden">
        
 {/* ⭐ OPTIMIZED STAR BACKGROUND */}
 <div className="absolute inset-0 -z-10">
 <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />

 {stars.map((s) => (
 <div
 key={s.id}
 className="absolute w-0.5 h-0.5 bg-white rounded-full"
 style={{
 top: `${s.top}%`,
 left: `${s.left}%`,
 opacity: 0.7,
 // Eslatma: pulseStar CSS animatsiyasi global CSS da bo'lishi kerak
 animation: `pulseStar 6s ease-in-out ${s.delay}s infinite`, 
 }}
 />
 ))}
 </div>

 <div className="max-w-7xl mx-auto px-6 pt-[75px]">
 
 {/* Sarlavha - Kichraytirildi */}
 <motion.h2
 initial={{ y: 40, opacity: 0 }}
 animate={isInView ? { y: 0, opacity: 1 } : {}}
 transition={{ duration: 0.8 }}
 className="text-3xl md:text-5xl font-bold text-center mb-12" // 👈 mb-20 dan mb-12 ga o'zgardi
 >
 <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent">
 {t("portfolio.title")}
 </span>
 </motion.h2>

 {/* Portfolio Grid - Gap kamaytirildi */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> 
 {displayedProjects.map((project, index) => (
 <motion.div
 key={project.id}
 initial={{ opacity: 0, y: 40 }}
 animate={isInView ? { opacity: 1, y: 0 } : {}}
 transition={{ delay: index * 0.04, duration: 0.6 }} // Optimallashtirilgan delay
 className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500" // rounded-2xl dan rounded-xl ga o'zgardi
 >
 <div className="aspect-square overflow-hidden bg-black/20">
 <img
 src={`/images/portfolio/project-${project.id}.jpg`}
 alt={project.title}
className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
 loading="lazy"
 />

 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
 </div>

 {/* Matn va tugmalar joylashuvi */}
 <div className="absolute inset-x-0 bottom-0 p-4 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-500"> 
 <h3 className="text-base font-bold">{project.title}</h3> 
 <p className="text-xs text-white/70 mt-0.5">{project.desc}</p>

 {/* Tugmalar - Kichraytirildi */}
 <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"> 
 <Link
 to={`/portfolio/${project.id}`}
 className="flex-1 py-2 bg-white/10 backdrop-blur border border-white/30 rounded-lg text-center text-xs font-medium hover:bg-white/20 transition" // py-3 dan py-2 ga, text-sm dan text-xs ga o'zgardi
 >
 {t("portfolio.details")}
 </Link>

<button
 onClick={() => setSelectedProject(project)}
 className="flex-1 py-2 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg text-xs font-bold shadow-md hover:shadow-lg transition" // py-3 dan py-2 ga, text-sm dan text-xs ga o'zgardi
 >
 {t("portfolio.order")}
 </button>
 </div>
 </div>
 </motion.div>
))}
 </div>

{/* Ko‘proq ko‘rish tugmasi - Kichraytirildi */}
 {limit && (
 <div className="text-center mt-12"> 
 <Link to="/portfolio">
 <motion.button
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-white text-base font-bold shadow-2xl hover:shadow-purple-600/60 transition-all" // Kichraytirildi
 >
{t("portfolio.view_all")}
 </motion.button>
 </Link>
 </div>
)}
 </div>
 </section>

 {/* Modal */}
 <OrderModal
 project={selectedProject}
 isOpen={!!selectedProject}
 onClose={() => setSelectedProject(null)}
 />
 </>
 );
}