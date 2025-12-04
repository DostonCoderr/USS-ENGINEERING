// src/components/common/OrderModal.jsx → TO‘LIQ YANGILANGAN + XAVFSIZ

import { motion } from "framer-motion";
import { useState } from "react";
import { sendToTelegram } from "../../lib/telegram";

export default function OrderModal({ project = { title: "Buyurtma" }, isOpen, onClose }) {
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
      alert("Ism va telefon to‘ldirilishi shart!");
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
      }, 2500);
    } else {
      alert("Xatolik yuz berdi. Iltimos, qayta urining yoki +998 admin raqamiga yozing.");
    }

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-gradient-to-br from-indigo-950/95 via-purple-950/95 to-black/95 border border-white/20 rounded-3xl p-8 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {sent ? (
          <div className="text-center py-12">
            <div className="text-7xl mb-4">Check</div>
            <h3 className="text-3xl font-black text-white">Rahmat!</h3>
            <p className="text-white/80 mt-3 text-lg">15 daqiqada aloqaga chiqamiz</p>
          </div>
        ) : (
          <>
            <h3 className="text-3xl font-black text-white mb-2">{project.title}</h3>
            <p className="text-white/60 text-sm mb-8">Tez hisob-kitob uchun ma'lumot qoldiring</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" placeholder="Ismingiz" value={name} onChange={(e) => setName(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition"
                required />

              <input type="tel" placeholder="+998 99 123 45 67" value={phone} onChange={(e) => setPhone(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition"
                required />

              <textarea placeholder="Izoh (ixtiyoriy)" rows={3} value={note} onChange={(e) => setNote(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/60 resize-none transition" />

              <div>
                <label className="block text-white/70 text-sm mb-2">Fayl biriktirish (PDF, DXF, rasm)</label>
                <input type="file" accept="image/*,.pdf,.dxf,.dwg" onChange={(e) => setFile(e.target.files[0])}
                  className="w-full text-white/70 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:bg-white/10 file:text-white hover:file:bg-white/20 transition" />
              </div>

              <div className="flex gap-4 pt-6">
                <button type="button" onClick={onClose}
                  className="flex-1 py-4 bg-white/10 border border-white/20 rounded-2xl text-white font-bold hover:bg-white/20 transition">
                  Bekor qilish
                </button>
                <button type="submit" disabled={loading}
                  className="flex-1 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl text-white font-black shadow-xl hover:shadow-purple-600/70 disabled:opacity-70 transition font-bold">
                  {loading ? "Yuborilmoqda..." : "Yuborish"}
                </button>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}