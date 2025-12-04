// src/components/sections/PortfolioMasonry.jsx → TARJIMA + SUPER TOZA!

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import OrderModal from "../common/PopupForm";

export default function PortfolioMasonry({ limit }) {
  const { t } = useTranslation("portfolio");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = t("portfolio.projects", { returnObjects: true });
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <>
      <section ref={ref} className="relative py-16 lg:py-24 overflow-hidden">
        {/* Kosmik fon */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />
          {[...Array(70)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-[75px]">
          {/* Sarlavha */}
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-center mb-20"
          >
            <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {t("portfolio.title")}
            </span>
          </motion.h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
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

                <div className="absolute inset-x-0 bottom-0 p-5 text-white translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{project.desc}</p>

                  <div className="flex gap-3 mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <Link
                      to={`/portfolio/${project.id}`}
                      className="flex-1 py-3 bg-white/10 backdrop-blur border border-white/30 rounded-lg text-center text-sm font-medium hover:bg-white/20 transition"
                    >
                      {t("portfolio.details")}
                    </Link>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition"
                    >
                      {t("portfolio.order")}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Ko‘proq ko‘rish tugmasi */}
          {limit && (
            <div className="text-center mt-16">
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-white text-lg font-bold shadow-2xl hover:shadow-purple-600/60 transition-all"
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