// src/components/sections/VideoTestimonials.jsx - TRANSLATED

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Instagram } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next"; // i18n uchun qo'shildi

const reels = [
  {
    id: "DIgid6HCcoJ",
    url: "https://www.instagram.com/reel/DIgid6HCcoJ/",
  },
  {
    id: "DOv2UGVjHlw",
    url: "https://www.instagram.com/reel/DOv2UGVjHlw/",
  },
  {
    id: "C1Se6DNtXWG",
    url: "https://www.instagram.com/reel/C1Se6DNtXWG/",
  },
  {
    id: "C1KHPHXt5n7",
    url: "https://www.instagram.com/reel/C1KHPHXt5n7/",
  },
];

export default function VideoTestimonials() {
  const { t } = useTranslation(); // Hook ishlatildi

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Space background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black opacity-90" />
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {t("testimonials.title")} {/* Tarjima */}
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {t("testimonials.description")} {/* Tarjima */}
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          className="pb-16"
        >
          {reels.map((reel) => (
            <SwiperSlide key={reel.id}>
              <div className="group relative">
                {/* Instagram Video */}
                <div className="aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <iframe
                    src={`https://www.instagram.com/reel/${reel.id}/embed`}
                    className="w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allowtransparency="true"
                    // TAYINLANGAN O'ZGARTIRISH: `unload` ruxsatini olib tashladim (u ko'rinmasa ham, ta'sir qilishi mumkin)
                    // Standart va xavfsiz ruxsatlarni qoldirdim:
                    allow="encrypted-media; autoplay; clipboard-write; picture-in-picture"
                    title={`Instagram Reel ${reel.id}`}
                  />
                </div>

                {/* Hover effect + Instagram link */}
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-3xl"
                >
                  <div className="flex items-center gap-3 bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full border border-white/30">
                    <Instagram className="w-6 h-6 text-pink-400" />
                    <span className="text-white font-bold">
                      {t("testimonials.view_on_instagram")}
                    </span>{" "}
                    {/* Tarjima */}
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/uss_engineering"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-white text-xl font-bold shadow-2xl hover:shadow-pink-600/50 transition-all hover:scale-105"
          >
            <Instagram className="w-8 h-8" />
            {t("testimonials.all_videos_cta")} {/* Tarjima */}
          </a>
        </div>
      </div>
    </section>
  );
}
