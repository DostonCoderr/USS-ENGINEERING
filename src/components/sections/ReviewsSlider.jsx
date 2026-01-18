import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";

export default function ReviewsSlider() {
  const { t } = useTranslation("reviews");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reviews = t("reviews.reviews", { returnObjects: true });

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black opacity-90" />
        {[...Array(60)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto px-6">

        {/* Sarlavha */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-6xl font-bold mb-16"
        >
          <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent">
            {t("reviews.title")}
          </span>
        </motion.h2>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full bg-white/8 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-yellow-400 text-2xl">★★★★★</div>
                    {review.platform && (
                      <span className="text-sm text-white/60 font-medium">{review.platform}</span>
                    )}
                  </div>

                  <p className="text-white/90 text-base md:text-lg leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white font-bold text-lg">
                    {review.name}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      <style>{`
        .swiper-slide {
          height: auto !important;
        }
        .swiper-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
}