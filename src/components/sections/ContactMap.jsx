import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { sendToTelegram } from "../../lib/telegram";

export default function ContactMap() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0] || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    setError("");
    setSuccess(false);

    const result = await sendToTelegram({
      ...formData,
      file,
    });

    if (result.success) {
      setSuccess(true);
      setFormData({ name: "", phone: "", message: "" });
      setFile(null);
      setTimeout(() => setSuccess(false), 5000);
    } else {
      setError("Xabar yuborishda xato yuz berdi. Iltimos, qayta urining.");
    }

    setLoading(false);
  };

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Kosmik fon */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />
        {[...Array(80)].map((_, i) => (
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
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          className="text-center text-5xl md:text-7xl font-black mb-20 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
        >
          {t("contact.title")}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FORMA */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            className="bg-white/8 backdrop-blur-3xl border border-white/20 rounded-3xl p-10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name, Phone, Message — o‘zgarmaydi */}
              <div>
                <label className="block text-white/90 font-medium mb-2">
                  {t("contact.form.name_label")}
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition"
                  placeholder={t("contact.form.name_placeholder")}
                />
              </div>

              <div>
                <label className="block text-white/90 font-medium mb-2">
                  {t("contact.form.phone_label")}
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition"
                  placeholder="+998 __ ___ __ __"
                />
              </div>

              <div>
                <label className="block text-white/90 font-medium mb-2">
                  {t("contact.form.message_label")}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition resize-none"
                  placeholder={t("contact.form.message_placeholder")}
                />
              </div>

              {/* FILE — IXTIYORIY */}
              <div>
    <label className="block text-white/70 text-sm mb-2">
      {t("contact.form.file_label")}
    </label>
    <input
      type="file"
      accept="image/*,.pdf,.dwg,.dxf,.zip"
      onChange={handleFileChange}
      className="w-full text-white/70 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:bg-white/10 file:text-white hover:file:bg-white/20 cursor-pointer"
    />
  </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className={`w-full py-6 rounded-2xl text-white text-xl font-bold shadow-xl transition-all ${
                  loading
                    ? "bg-gray-600"
                    : "bg-gradient-to-r from-indigo-600 to-purple-700 hover:shadow-purple-600/60"
                }`}
              >
                {loading ? "Yuborilmoqda..." : t("contact.form.submit_button")}
              </motion.button>

              {success && (
                <p className="text-green-400 text-center font-bold text-lg bg-green-900/30 py-4 rounded-xl">
                 {t("contact.form.success_msg")}
                </p>
              )}
              {error && (
                <p className="text-red-400 text-center bg-red-900/30 py-4 rounded-xl">
                  {error}
                </p>
              )}
            </form>

            {/* Kontaktlar — o‘zgarmaydi */}
            <div className="mt-12 space-y-8 text-white">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/60">{t("contact.phone_label")}</p>
                  <a
                    href={`tel:${t("contact.info.phone")}`}
                    className="text-2xl font-bold hover:text-indigo-400 transition"
                  >
                    {t("contact.info.phone")}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/60">{t("contact.address_label")}</p>
                  <p className="text-lg font-medium leading-relaxed">
                  {t("contact.info.address_full")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* XARITA */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="h-96 lg:h-full min-h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=69.230787%2C41.352819&z=17&pt=69.230787,41.352819,pm2blm&ol=biz&oid=159447366426&source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="USS Engineering"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
