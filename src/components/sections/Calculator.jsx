// src/components/sections/Calculator.jsx → IXCHAM + RESPONVIS + PREMIUMLASHGAN

import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function Calculator() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const materials = t("calculator.materials", { returnObjects: true });
  const thicknesses = t("calculator.thicknesses", { returnObjects: true });

  // Dastlabki qiymatlarni sozlashda xato bo'lmasligi uchun tekshiramiz
  const [material, setMaterial] = useState(materials[0] || { name: "", price: 0 });
  const [thickness, setThickness] = useState(thicknesses[1] || "2 mm"); // "2 mm"
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [quantity, setQuantity] = useState("1");

  // Zichliklar (kg/m³ dan g/sm³ ga o‘tkazilgan)
  const density = useMemo(() => ({
    "Qora po‘lat": 7.85,
    "Чёрная сталь": 7.85,
    "Black Steel": 7.85,
    "Galvaniz po‘lat": 7.85,
    "Оцинкованная сталь": 7.85,
    "Galvanized Steel": 7.85,
    "Alyuminiy": 2.7,
    "Алюминий": 2.7,
    "Aluminum": 2.7,
    "Nerjaveyka (INOX)": 7.9,
    "Нержавейка (INOX)": 7.9,
    "Stainless Steel (INOX)": 7.9,
    "Mis": 8.96,
    "Медь": 8.96,
    "Copper": 8.96,
  }), []);

  const calculateWeight = () => {
    // Kiritish maydonchalari to'liq bo'lmasa, hisoblamaslik
    if (!width || !height || !material?.name || !thickness) return 0;
    
    // O'lchamlarni mm dan metrga o'tkazish
    const w = parseFloat(width) / 1000;
    const h = parseFloat(height) / 1000;
    
    // Qalinlikdan ' mm'ni olib tashlab metrgacha o'tkazish
    const tValue = parseFloat(thickness.replace(' mm', '').trim());
    const t = tValue / 1000;
    
    // Materialning zichligini topish
    const materialDensity = density[material.name] || 0;

    // Volume (m³) = width * height * thickness
    const volume = w * h * t;
    
    // Weight (kg) = Volume (m³) * Density (g/cm³) * 1000 (g/cm³ dan kg/m³ ga o'tkazish)
    // Bu yerda bizning zichlik qiymatlarimiz allaqachon kg/m³ uchun optimallashtirilgan (chunki 1 g/cm³ = 1000 kg/m³ ga yaqin)
    // Shuning uchun formulani quyidagicha soddalashtiramiz:
    const weight = volume * (materialDensity * 1000); 

    return weight || 0;
  };

  const weight = calculateWeight();
  // Son bo'lmagan qiymatlar kelsa 1 deb olish
  const currentQuantity = parseInt(quantity) > 0 ? parseInt(quantity) : 1;
  const totalWeight = weight * currentQuantity;
  const totalPrice = totalWeight * material.price;
  
  // Narxni mahalliy formatda (vergul bilan) chiqarish
  const formattedPrice = totalPrice.toLocaleString("uz-UZ", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  return (
    <section ref={ref} className="relative py-16 lg:py-24 overflow-hidden"> {/* Paddinglar ixchamlashtirildi */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/90 via-purple-950/80 to-black" />
        {/* Orqa fondagi yulduz effektlari (saqlab qolindi) */}
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/70 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6"> {/* Kichikroq max-width */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold"> {/* Sarlavha ixchamlashtirildi */}
            <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {t("calculator.title")}
            </span>
          </h2>
          <p className="mt-3 text-lg text-white/70 max-w-2xl mx-auto">
            {t("calculator.subtitle")}
          </p>
        </motion.div>

        {/* Asosiy kontent - grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"> {/* Gap ixchamlashtirildi */}
          {/* FORMA (Chap qism) */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 p-4"
          >
            {/* Material tanlash */}
            <div>
              <label className="block text-white/90 font-semibold mb-3 text-lg">
                {t("calculator.material_label")}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {materials.map((mat) => (
                  <button
                    key={mat.name}
                    onClick={() => setMaterial(mat)}
                    className={`py-3 px-4 rounded-xl border transition-all text-sm font-medium ${ // Kichikroq stillar
                      material?.name === mat.name
                        ? "bg-indigo-600 border-indigo-500 text-white transform scale-105" // Kichikroq aktiv effekt
                        : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"
                    }`}
                  >
                    {mat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Qalinlik tanlash */}
            <div>
              <label className="block text-white/90 font-semibold mb-3 text-lg">
                {t("calculator.thickness_label")}
              </label>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-2"> {/* Gap juda ixchamlashtirildi */}
                {thicknesses.map((th) => (
                  <button
                    key={th}
                    onClick={() => setThickness(th)}
                    className={`py-2 px-3 rounded-lg text-xs md:text-sm font-medium transition-all ${ // Juda ixcham stillar
                      thickness === th
                        ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    {th}
                  </button>
                ))}
              </div>
            </div>

            {/* Kenglik, Uzunlik (Width, Height) */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white/90 font-semibold mb-2">{t("calculator.width_label")}</label>
                <div className="relative">
                    <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        placeholder="1250"
                        min="1"
                        className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition" // Py-4 -> py-3
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 text-sm">mm</span>
                </div>
              </div>
              <div>
                <label className="block text-white/90 font-semibold mb-2">{t("calculator.height_label")}</label>
                <div className="relative">
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="2500"
                        min="1"
                        className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition" // Py-4 -> py-3
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 text-sm">mm</span>
                </div>
              </div>
            </div>

            {/* Soni (Quantity) */}
            <div>
              <label className="block text-white/90 font-semibold mb-2">{t("calculator.quantity_label")}</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-500 transition" // Py-4 -> py-3
              />
            </div>
          </motion.div>

          {/* NATIJA (O'ng qism) */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 self-stretch flex flex-col justify-between" // Ixchamlashtirilgan padding va style
          >
            <div>
                <h3 className="text-2xl font-bold text-white mb-6">{t("calculator.result_title")}</h3>

                <div className="space-y-4 text-base"> {/* Text o'lchami ixchamlashtirildi */}
                    <ResultItem 
                        label={t("calculator.material")} 
                        value={material.name} 
                        color="text-indigo-400"
                    />
                    <ResultItem 
                        label={t("calculator.thickness")} 
                        value={thickness} 
                        color="text-purple-400"
                    />
                    <ResultItem 
                        label={t("calculator.weight_one")} 
                        value={`${weight.toFixed(3)}`} 
                        unit={t("calculator.kg")} 
                        isBold={true}
                    />
                    <ResultItem 
                        label={t("calculator.total_weight")} 
                        value={`${totalWeight.toFixed(3)}`} 
                        unit={t("calculator.kg")} 
                        isBold={true}
                        borderTop={true}
                    />
                </div>
            </div>

            {/* Jami Narx va Buyurtma tugmasi */}
            <div className="mt-8">
              
              <div className="flex justify-between items-end border-t border-white/10 pt-6">
                <span className="text-xl text-white/80 font-medium">{t("calculator.total_price")}</span>
                <div className="text-right">
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text"> {/* Narx o'lchami kichraytirildi */}
                    {formattedPrice}
                  </div>
                  <div className="text-sm text-white/60 mt-1">
                    {t("calculator.sum")} | {t("calculator.price_per_kg", { price: material.price.toLocaleString() })}
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }} // Kichikroq hover effekti
                whileTap={{ scale: 0.98 }} // Kichikroq tap effekti
                className="w-full mt-6 py-4 bg-gradient-to-r from-indigo-700 to-purple-800 rounded-xl text-white text-lg font-bold shadow-lg hover:shadow-purple-500/50 transition-all" // Py-5 -> py-4, text-xl -> text-lg
              >
                {t("calculator.order_button")}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Yordamchi komponent (natija qatorini tozalash uchun)
const ResultItem = ({ label, value, unit, isBold = false, borderTop = false, color = "text-white" }) => (
    <div className={`flex justify-between ${borderTop ? 'pt-4 border-t border-white/10' : ''}`}>
        <span className="text-white/70">{label}</span>
        <span className={`${isBold ? 'font-bold' : 'font-medium'} ${color}`}>
            {value} {unit}
        </span>
    </div>
);