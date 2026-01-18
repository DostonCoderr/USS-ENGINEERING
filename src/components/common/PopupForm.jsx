import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { sendToTelegram } from "../../lib/telegram";
import { X, CheckCircle2 } from "lucide-react"; // Ikonkalar uchun

export default function OrderModal({ project = { title: "Buyurtma" }, isOpen, onClose }) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert(t("contact.form.error_msg"));
      return;
    }

    setLoading(true);

    const result = await sendToTelegram({
      name,
      phone,
      message: `${project.title}${note ? `\nIzoh: ${note}` : ""}`,
      file,
    });

    if (result.success) {
      setSent(true);
      setTimeout(() => {
        onClose();
        setName(""); setPhone(""); setNote(""); setFile(null); setSent(false);
      }, 3000);
    } else {
      alert(t("contact.form.error_msg"));
    }
    setLoading(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-xl z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          className="relative bg-gradient-to-br from-indigo-950/90 via-purple-950/90 to-black border border-white/20 rounded-[2.5rem] p-8 md:p-10 max-w-lg w-full shadow-[0_0_50px_rgba(79,70,229,0.2)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Yopish tugmasi */}
          <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition">
            <X size={28} />
          </button>

          {sent ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle2 className="w-20 h-20 text-green-400 mx-auto mb-6" />
              <h3 className="text-4xl font-black text-white mb-4">{t("contact.form.success_title")}</h3>
              <p className="text-white/70 text-lg leading-relaxed">{t("contact.form.success_msg")}</p>
            </motion.div>
          ) : (
            <>
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-3 italic">
                  {project.title}
                </h3>
                <p className="text-indigo-300 font-medium tracking-wide uppercase text-sm">
                  {t("contact.form.modal_subtitle")}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder={t("contact.form.name_placeholder")} 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-purple-500 transition-all shadow-inner"
                    required 
                  />
                </div>

                <div>
                  <input 
                    type="tel" 
                    placeholder="+998 __ ___ __ __" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-purple-500 transition-all shadow-inner"
                    required 
                  />
                </div>

                <div>
                  <textarea 
                    placeholder={t("contact.form.message_placeholder")} 
                    rows={3} 
                    value={note} 
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-purple-500 resize-none transition-all shadow-inner" 
                  />
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-semibold uppercase tracking-widest mb-3 ml-1">
                    {t("contact.form.file_label")}
                  </label>
                  <input 
                    type="file" 
                    accept="image/*,.pdf,.dxf,.dwg" 
                    onChange={(e) => setFile(e.target.files[0])}
                    className="w-full text-white/40 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:bg-indigo-600/20 file:text-indigo-300 hover:file:bg-indigo-600/30 transition cursor-pointer text-sm" 
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="flex-[2] py-5 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl text-white font-black text-lg shadow-[0_10px_30px_rgba(79,70,229,0.3)] hover:shadow-purple-600/50 disabled:opacity-50 transition-all active:scale-95"
                  >
                    {loading ? t("contact.form.sending") : t("contact.form.submit_button")}
                  </button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}