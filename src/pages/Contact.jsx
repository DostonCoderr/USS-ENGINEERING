import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import ContactMap from "../components/sections/ContactMap";
import { Phone, MapPin, Mail, Clock4 } from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section ref={ref} className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-black -z-10" />

        <div className="max-w-4xl mx-auto px-4 text-center pt-[90px]"> 
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-black text-white mb-6" 
          >
            {t("contact.title")}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-white/70 max-w-2xl mx-auto mb-10"
          >
            {t("contact.subtitle")}
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"> 
            
     
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-3 md:p-4 text-center">
              <Phone className="w-7 h-7 text-cyan-400 mx-auto mb-2" /> 
              <p className="text-xs text-white/70">{t("contact.phone_label")}</p>
              <p className="text-base font-bold text-white">{t("contact.info.phone")}</p>
            </div>

        
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-3 md:p-4 text-center">
              <Mail className="w-7 h-7 text-purple-400 mx-auto mb-2" />
              <p className="text-xs text-white/70">{t("contact.info.email_title")}</p>
              <p className="text-base font-bold text-white">{t("contact.info.email")}</p>
            </div>

          
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-3 md:p-4 text-center">
              <MapPin className="w-7 h-7 text-pink-400 mx-auto mb-2" />
              <p className="text-xs text-white/70">{t("contact.address_label")}</p>
              <p className="text-base font-bold text-white">{t("contact.info.address_short")}</p> 
            </div>

    
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-3 md:p-4 text-center">
              <Clock4 className="w-7 h-7 text-yellow-400 mx-auto mb-2" />
              <p className="text-xs text-white/70">{t("contact.hours_label")}</p>
              <p className="text-base font-bold text-white">{t("contact.info.hours")}</p> 
            </div>
          </div>
        </div>
      </section>

   
      <ContactMap />


      <section className="py-12 bg-gradient-to-r from-indigo-900/70 to-purple-900/70"> 
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = "tel:+998951687555"}
            className="px-10 py-4 bg-white text-black rounded-full text-xl font-black shadow-lg hover:shadow-white/50 transition-all" 
          >
            {t("contact.cta_button")}
          </motion.button>
        </div>
      </section>
    </>
  );
}