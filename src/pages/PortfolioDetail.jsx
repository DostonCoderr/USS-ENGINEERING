// src/pages/PortfolioDetail.jsx → BITTA LOYIHA UCHUN

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import OrderModal from "../components/common/PopupForm";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Savdo markazi",
    location: "Toshkent",
    area: "1200 m²",
    year: "2024",
    desc: "Zamonaviy savdo markazi uchun metall konstruktsiyalar...",
    images: ["1", "2", "3"],
  },
  {
    id: 2,
    title: "Zavod angarlari",
    location: "Farg‘ona",
    area: "3500 m²",
    year: "2025",
    desc: "Yengil po‘lat konstruktsiyalar bilan qurilgan katta angar...",
    images: ["2", "1", "4"],
  },
  {
    id: 3,
    title: "Lazer kesim detallari",
    location: "Farg‘ona",
    area: "3500 m²",
    year: "2025",
    desc: "Yengil po‘lat konstruktsiyalar bilan qurilgan katta angar...",
    images: ["2", "1", "4"],
  },
  {
    id: 4,
    title: "Office Mebili",
    location: "Farg‘ona",
    area: "3500 m²",
    year: "2025",
    desc: "Yengil po‘lat konstruktsiyalar bilan qurilgan katta angar...",
    images: ["2", "1", "4"],
  },
  {
    id: 5,
    title: "Payvandlash loixalari",
    location: "Farg‘ona",
    area: "3500 m²",
    year: "2025",
    desc: "Yengil po‘lat konstruktsiyalar bilan qurilgan katta angar...",
    images: ["2", "1", "4"],
  },
   {
    id: 6,
    title: "Dekorativ panelar",
    location: "Farg‘ona",
    area: "3500 m²",
    year: "2025",
    desc: "Yengil po‘lat konstruktsiyalar bilan qurilgan katta angar...",
    images: ["2", "1", "4"],
  },
  // qolganlari...
];

export default function PortfolioDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const [modalOpen, setModalOpen] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-3xl">
        Loyiha topilmadi
        <Link to="/portfolio" className="ml-4 underline">
          ← Orqaga
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              {project.title}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white/80 mb-12">
              <div>
                <strong>Manzil:</strong> {project.location}
              </div>
              <div>
                <strong>Maydon:</strong> {project.area}
              </div>
              <div>
                <strong>Yil:</strong> {project.year}
              </div>
              <div>
                <strong>Status:</strong> Yakunlangan
              </div>
            </div>

            <p className="text-xl text-white/70 max-w-4xl mb-12 leading-relaxed">
              {project.desc}
            </p>

            {/* Rasmlar */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={`/images/portfolio/project-${project.id}-${i}.jpg`}
                    alt=""
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>
              ))}
            </div>

            {/* Tugma */}
            <div className="text-center">
              <button
                onClick={() => setModalOpen(true)}
                className="px-16 py-6 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl text-white text-2xl font-bold shadow-2xl hover:shadow-purple-600/70 transition-all"
              >
                Shu kabi loyiha uchun buyurtma berish
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <OrderModal
        project={project}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
