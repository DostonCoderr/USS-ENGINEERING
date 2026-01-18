import { motion } from "framer-motion";
import { useState } from "react";

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const phone = "+998 95 168 75 55";
  const whatsapp = "https://wa.me/998991234567";
  const telegram = "https://t.me/USS_EngineeringBot";

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Asosiy tugma */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full shadow-2xl flex items-center justify-center"
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          )}
        </svg>
      </motion.button>

      {/* Qo‘shimcha tugmalar (ochilganda) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-20 right-0 space-y-4"
      >
        {/* WhatsApp */}
        <motion.a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, x: -10 }}
          className="block w-14 h-14 bg-green-500 rounded-full shadow-xl flex items-center justify-center"
        >
          <img src="https://api.iconify.design/mdi:whatsapp.svg?color=white&width=32" alt="WhatsApp" />
        </motion.a>

        {/* Telegram */}
        <motion.a
          href={telegram}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, x: -10 }}
          className="block w-14 h-14 bg-blue-500 rounded-full shadow-xl flex items-center justify-center"
        >
          <img src="https://api.iconify.design/mdi:telegram.svg?color=white&width=32" alt="Telegram" />
        </motion.a>

        {/* Telefon */}
        <motion.a
          href={`tel:${phone.replace(/\s/g, "")}`}
          whileHover={{ scale: 1.2, x: -10 }}
          className="block w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full shadow-xl flex items-center justify-center"
        >
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
}