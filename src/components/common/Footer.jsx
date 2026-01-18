import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const services = t("footer.services", { returnObjects: true });
  const navItems = t("footer.nav", { returnObjects: true });

  const serviceLinks = [
    "/services/laser-cutting",
    "/services/sheet-bending",
    "/services/powder-coating",
    "/services/welding",
    "/services/metal-structures",
    "/services/custom-parts",
    "/services/metal-furniture",
  ];

  const navLinks = ["/", "/about", "/portfolio", "/faq", "/contact"];

  return (
    <footer className="relative bg-black/60 backdrop-blur-3xl border-t border-white/10">
      {/* Kosmik fon */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 via-purple-950/40 to-transparent" />
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* 1. Logotip + Tavsif */}
          <div className="space-y-6">
            <h3 className="text-4xl font-black">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                USS
              </span>
              <span className="text-white"> Engineering</span>
            </h3>
            <p className="text-white/70 text-lg leading-relaxed whitespace-pre-line">
              {t("footer.description")}
            </p>

            {/* Ijtimoiy tarmoqlar */}
            <div className="flex gap-4">
              <a href="https://t.me/uss_engineering" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all">
                <img src="https://api.iconify.design/mdi:telegram.svg?color=white&width=28" alt="Telegram" />
              </a>
              <a href="https://instagram.com/uss_engineering" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all">
                <img src="https://api.iconify.design/mdi:instagram.svg?color=white&width=28" alt="Instagram" />
              </a>
              <a href="https://youtube.com/@ussengineering" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all">
                <img src="https://api.iconify.design/mdi:youtube.svg?color=white&width=28" alt="YouTube" />
              </a>
            </div>
          </div>

          {/* 2. Xizmatlar */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">{t("footer.services_title")}</h4>
            <ul className="space-y-4 text-white/70">
              {services.map((service, i) => (
                <li key={i}>
                  <Link to={serviceLinks[i]} className="hover:text-white transition flex items-center gap-2">
                    <span className="text-indigo-400">→</span> {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Sayt bo‘limlari */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">{t("footer.nav_title")}</h4>
            <ul className="space-y-4 text-white/70">
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link to={navLinks[i]} className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Kontaktlar */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-white mb-6">{t("footer.contact_title")}</h4>
            
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/60">{t("footer.phone_label")}</p>
                  <a href={`tel:${t("footer.phone")}`} className="text-xl font-bold text-white hover:text-indigo-400 transition">
                    {t("footer.phone")}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/60">{t("footer.address_label")}</p>
                  <p className="text-lg font-medium text-white">{t("footer.address")}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/60">{t("footer.hours_label")}</p>
                  <p className="text-lg font-medium text-white">{t("footer.hours")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pastki qism */}
        <div className="mt-20 pt-10 border-t border-white/10 text-center">
          <p className="text-white/60">
            {t("footer.copyright")} <span className="text-white font-bold">USS Engineering</span>
          </p>
          <p className="text-white/40 text-sm mt-2">
            {t("footer.made_with")}
          </p>
        </div>
      </div>
    </footer>
  );
}