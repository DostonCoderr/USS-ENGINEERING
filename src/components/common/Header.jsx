import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import OrderModal from "../common/PopupForm"; // to‘g‘ri yo‘l

const flags = {
  uz: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1fa-1f1ff.svg",
  ru: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1f7-1f1fa.svg",
  en: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1fa-1f1f8.svg",
};

const languages = [
  { code: "uz", label: "UZ", flag: flags.uz },
  { code: "ru", label: "RU", flag: flags.ru },
  { code: "en", label: "EN", flag: flags.en },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Mobil menyu ochilganda body scrollni boshqarish
  useEffect(() => {
    if (mobileOpen) {
      // Body scrollini o'chirish
      document.body.style.overflow = "hidden";
    } else {
      // Body scrollini tiklash
      document.body.style.overflow = "unset";
    }
    // Komponent o'chirilganda tozalash
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  const navItems = [
    { name: t("header.home"), path: "/" },
    { name: t("header.services"), path: "/services" },
    { name: t("header.about"), path: "/about" },
    { name: t("header.portfolio"), path: "/portfolio" },
    { name: t("header.contact"), path: "/contact" },
  ];

  const openModal = () => {
    setModalOpen(true);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Kosmik fon — Hech narsa o‘zgartirilmagan */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-indigo-900/20" />
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              opacity: Math.random() * 0.6 + 0.3,
            }}
          />
        ))}
      </div>

      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <motion.div
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          className="bg-white/8 backdrop-blur-3xl border border-white/10 rounded-full shadow-2xl"
        >
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo — O‘zgartirilmagan */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center shadow-md">
                <span className="text-lg font-bold text-white">U</span>
              </div>
              <span className="text-lg font-medium text-white">USS ENGINEERING</span>
            </Link>

            {/* Desktop Menu — O‘zgartirilmagan */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    location.pathname === item.path
                      ? "bg-white/25 text-white shadow-sm"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side — O‘zgartirilmagan */}
            <div className="hidden lg:flex items-center gap-3">
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                >
                  <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-5" />
                  <span className="text-white text-xs font-medium">{currentLang.label}</span>
                  <svg className={`w-4 h-4 text-white/60 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full mt-2 **right-0** w-32 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => changeLanguage(language.code)}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all ${
                            i18n.language === language.code ? "bg-white/20" : ""
                          }`}
                        >
                          <img src={language.flag} alt={language.label} className="w-6 h-6" />
                          <span className="text-sm font-medium">{language.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                onClick={openModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-white font-medium text-sm shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                {t("header.call_us")}
              </motion.button>
            </div>

            {/* Mobile Toggle — O‘zgartirilmagan */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </motion.div>
      </header>

      {/* 🚀 Mobil Menyuni To'liq Ekranga Yoyish uchun O‘zgartirilgan Qism */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }} // O'ngdan kirib kelishi uchun boshlang'ich holat
            animate={{ opacity: 1, x: 0 }} // Ekrandagi holat
            exit={{ opacity: 0, x: "100%" }} // O'ng tomonga chiqib ketishi
            transition={{ type: "tween", duration: 0.3 }}
            // 👇 MUHIM O‘ZGARTIRISH: Menyuni to‘liq ekranga fiksatsiyalash
            className="fixed inset-0 z-[60] lg:hidden bg-white/5 backdrop-blur-3xl shadow-2xl overflow-y-auto" 
          >
            {/* Menyuning Ichki Kontenti uchun maxsus ichki container */}
            <div className="h-full flex flex-col pt-6 pb-12 px-6">
                
                {/* Yuqori qism: Logo va Yopish tugmasi (Rasmga mos) */}
                <div className="flex justify-between items-center mb-10">
                    {/* Logo */}
                    <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center space-x-2">
                        <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-lg font-bold text-white">U</span>
                        </div>
                        <span className="text-xl font-medium text-white">USS ENGINEERING</span>
                    </Link>
                    
                    {/* Yopish Tugmasi (X) */}
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Navigatsiya elementlari */}
                <nav className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setMobileOpen(false)}
                            className={`block py-3 px-4 text-white hover:bg-white/10 rounded-xl transition ${
                                location.pathname === item.path ? "bg-white/20 font-bold" : "font-medium"
                            } text-xl`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex-grow flex flex-col justify-end">
                    {/* Til tanlash tugmalari */}
                    <div className="flex justify-start gap-4 mb-6 pt-6 border-t border-white/10">
                        {languages.map((lng) => (
                            <button
                                key={lng.code}
                                onClick={() => {
                                    changeLanguage(lng.code);
                                    setMobileOpen(false);
                                }}
                                className={`px-5 py-2 rounded-full flex items-center gap-2 ${
                                    i18n.language === lng.code ? "bg-white/30" : "bg-white/10 hover:bg-white/20"
                                } transition`}
                            >
                                <img src={lng.flag} alt={lng.label} className="w-5 h-5" />
                                <span className="text-white font-bold">{lng.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Mobil "Bog‘lanish" tugmasi */}
                    <motion.button
                        onClick={openModal}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-white font-bold text-lg shadow-lg"
                    >
                        {t("header.call_us")}
                    </motion.button>
                </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ORDER MODAL — O‘zgartirilmagan */}
      <OrderModal
        project={{ title: t("header.call_us") }}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}