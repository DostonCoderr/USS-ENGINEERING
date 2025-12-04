// src/pages/Services.jsx → 100% 3 TILDA + RESPONSIVE + ZO‘R!

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { 
  MdFlashOn, MdSquareFoot, MdFormatPaint, MdHardware, 
  MdFactory, MdDesignServices, MdEventSeat, Md3dRotation, MdArrowForward
} from "react-icons/md";

export default function Services() {
  const { t } = useTranslation();

  const allServices = [
    { title: t("services.list.laser"),      icon: <MdFlashOn />,       path: "/services/laser-cutting" },
    { title: t("services.list.bending"),    icon: <MdSquareFoot />,    path: "/services/sheet-bending" },
    { title: t("services.list.powder"),     icon: <MdFormatPaint />,   path: "/services/powder-coating" },
    { title: t("services.list.welding"),    icon: <MdHardware />,      path: "/services/welding" },
    { title: t("services.list.structures"), icon: <MdFactory />,       path: "/services/metal-structures" },
    { title: t("services.list.custom"),     icon: <MdDesignServices />,path: "/services/custom-parts" },
    { title: t("services.list.furniture"),  icon: <MdEventSeat />,     path: "/services/metal-furniture" },
    { title: t("services.list.design3d"),   icon: <Md3dRotation />,    path: "/services/3d-design" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="py-25 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-black -z-10" />
        <div className="max-w-5xl mt-[15px] mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            {t("services.title")}
          </motion.h1>
          <p className="text-xl text-white/70">
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* XIZMATLAR – GORIZONTAL + RESPONSIVE */}
      <section className="py-16 pb-32">
        <div className="max-w-5xl mt-[15px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {allServices.map((service, i) => (
            <Link to={service.path} key={i}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.99 }}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer flex items-center gap-5"
              >
                {/* Ikonka */}
                <div className="text-5xl text-indigo-400 group-hover:text-purple-400 transition flex-shrink-0">
                  {service.icon}
                </div>

                {/* Sarlavha */}
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-300 transition">
                  {service.title}
                </h3>

                {/* O‘qcha (hoverda paydo bo‘ladi) */}
                <MdArrowForward className="ml-auto text-2xl text-white/50 group-hover:text-indigo-400 group-hover:translate-x-2 transition-all opacity-0 group-hover:opacity-100" />
              </motion.div>
            </Link>
          ))}
        </div>

        {/* ORQAGA */}
        <div className="text-center mt-16">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-12 py-5 bg-white/10 border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition flex items-center gap-3 mx-auto"
            >
              {t("services.back_home")}
              <MdArrowForward className="text-xl" />
            </motion.button>
          </Link>
        </div>
      </section>
    </>
  );
}