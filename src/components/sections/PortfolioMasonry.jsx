import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import OrderModal from "../common/PopupForm";

export default function PortfolioMasonry({ limit }) {
  const { t } = useTranslation("portfolio");
  const [selectedProject, setSelectedProject] = useState(null);

  // Yulduzlar sonini kamaytirdik (15 → 10), agar kerak bo'lmasa umuman olib tashlash mumkin
  const stars = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
  }));

  const projects = t("portfolio.projects", { returnObjects: true });
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <>
      <section className="relative py-16 lg:py-20 overflow-hidden">
        {/* Background + yulduzlar */}
        {/* <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />

          {stars.map((s) => (
            <div
              key={s.id}
              className="absolute w-0.5 h-0.5 bg-white rounded-full"
              style={{
                top: `${s.top}%`,
                left: `${s.left}%`,
                opacity: 0.7,
                animation: `pulseStar 6s ease-in-out ${s.delay}s infinite`,
              }}
            />
          ))}
        </div> */}

        <div className="max-w-7xl mx-auto px-6 pt-[75px]">
          {/* Sarlavha – oddiy, animatsiyasiz */}
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {t("portfolio.title")}
            </span>
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden bg-black/20">
                  <img
                    src={`/images/portfolio/project-${project.id}.jpg`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    // Agar rasm o'lchamlari ma'lum bo'lsa qo'shing (masalan width="400" height="400")
                    // width={400}
                    // height={400}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Matn va tugmalar */}
                <div className="absolute inset-x-0 bottom-0 p-4 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-base font-bold">{project.title}</h3>
                  <p className="text-xs text-white/70 mt-0.5">{project.desc}</p>

                  <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Link
                      to={`/portfolio/${project.id}`}
                      className="flex-1 py-2 bg-white/10 backdrop-blur border border-white/30 rounded-lg text-center text-xs font-medium hover:bg-white/20 transition"
                    >
                      {t("portfolio.details")}
                    </Link>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg text-xs font-bold shadow-md hover:shadow-lg transition"
                    >
                      {t("portfolio.order")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All tugmasi */}
          {limit && (
            <div className="text-center mt-12">
              <Link to="/portfolio">
                <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-white text-base font-bold shadow-2xl hover:shadow-purple-600/60 transition-all">
                  {t("portfolio.view_all")}
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>

      <OrderModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}