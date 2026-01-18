import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function Calculator() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const materials = t("calculator.materials", { returnObjects: true }) || [];
  const thicknesses = t("calculator.thicknesses", { returnObjects: true }) || [];

  const [material, setMaterial] = useState(materials[0] || { name: "" });
  const [thickness, setThickness] = useState(thicknesses[1] || "2 mm");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [quantity, setQuantity] = useState("1");

  const density = useMemo(() => ({
    "Qora po‘lat": 7.85,
    "Galvaniz po‘lat": 7.85,
    "Alyuminiy": 2.7,
    "Nerjaveyka (INOX)": 7.9,
    "Mis": 8.96,
    // Qo'shimcha tillar uchun
    "Чёрная сталь": 7.85,
    "Оцинкованная сталь": 7.85,
    "Алюминий": 2.7,
    "Нержавейка (INOX)": 7.9,
    "Медь": 8.96,
  }), []);

  const calculateWeight = () => {
    if (!width || !height || !material?.name || !thickness) return 0;

    const w = parseFloat(width) || 0;
    const h = parseFloat(height) || 0;
    const tValue = parseFloat(thickness.replace(/[^0-9.]/g, "")) || 0;

    if (w <= 0 || h <= 0 || tValue <= 0) return 0;

    // mm → m ga o'tkazish
    const widthM = w / 1000;
    const heightM = h / 1000;
    const thicknessM = tValue / 1000;

    const densityValue = density[material.name] || 7.85; // default qora po'lat
    const volume = widthM * heightM * thicknessM;
    const weightKg = volume * densityValue * 1000; // kg

    return weightKg;
  };

  const weight = calculateWeight();
  const currentQuantity = Math.max(1, parseInt(quantity) || 1);
  const totalWeight = weight * currentQuantity;

  return (
    <section ref={ref} className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-950 via-purple-950/70 to-black">
        {/* Yumshoq yulduzlar - soni kamaytirildi */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/50 rounded-full animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              {t("calculator.title")}
            </span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            {t("calculator.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Chap — forma */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Material */}
            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
              <label className="block text-indigo-300 font-semibold text-lg mb-4">
                1. {t("calculator.material_label")}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {materials.map((mat) => (
                  <button
                    key={mat.name}
                    onClick={() => setMaterial(mat)}
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 border ${
                      material?.name === mat.name
                        ? "bg-indigo-600/80 border-indigo-400 text-white shadow-lg scale-105"
                        : "bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:border-indigo-500/50"
                    }`}
                  >
                    {mat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Qalinlik */}
            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
              <label className="block text-purple-300 font-semibold text-lg mb-4">
                2. {t("calculator.thickness_label")}
              </label>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                {thicknesses.map((th) => (
                  <button
                    key={th}
                    onClick={() => setThickness(th)}
                    className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      thickness === th
                        ? "bg-purple-600 text-white shadow-md scale-105"
                        : "bg-white/10 text-white/80 hover:bg-purple-800/40 hover:scale-102"
                    }`}
                  >
                    {th}
                  </button>
                ))}
              </div>
            </div>

            {/* O'lchamlar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Eni */}
              <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                <label className="block text-white/80 font-medium mb-2">
                  {t("calculator.width_label")}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    placeholder="1250"
                    min="1"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 text-sm font-bold">
                    mm
                  </span>
                </div>
              </div>

              {/* Bo'yi */}
              <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                <label className="block text-white/80 font-medium mb-2">
                  {t("calculator.height_label")}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="2500"
                    min="1"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 text-sm font-bold">
                    mm
                  </span>
                </div>
              </div>

              {/* Miqdor */}
              <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                <label className="block text-white/80 font-medium mb-2">
                  {t("calculator.quantity_label")}
                </label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>
            </div>
          </motion.div>

          {/* O'ng — natija */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-gradient-to-b from-indigo-900/30 to-purple-900/20 backdrop-blur-lg border border-indigo-500/20 rounded-3xl p-8 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center md:text-left">
                {t("calculator.result_title")}
              </h3>

              <div className="space-y-6 text-lg">
                <ResultItem label="Material" value={material.name || "—"} color="text-indigo-300" />
                <ResultItem label="Qalinlik" value={thickness || "—"} color="text-purple-300" />
                <ResultItem
                  label={t("calculator.weight_one")}
                  value={weight.toFixed(2)}
                  unit="kg"
                  isBold
                  color="text-white"
                />
                <ResultItem
                  label={t("calculator.total_weight")}
                  value={totalWeight.toFixed(2)}
                  unit="kg"
                  isBold
                  borderTop
                  color="text-cyan-300"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(99,102,241,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl text-white text-xl font-bold shadow-xl hover:shadow-purple-600/60 transition-all"
            >
              {t("calculator.order_button")}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const ResultItem = ({ label, value, unit = "", isBold = false, borderTop = false, color = "text-white" }) => (
  <div className={`flex justify-between items-center py-3 ${borderTop ? "pt-5 border-t border-white/15" : ""}`}>
    <span className="text-white/70 font-medium">{label}</span>
    <span className={`${isBold ? "text-2xl font-bold" : "text-xl font-semibold"} ${color}`}>
      {value} {unit}
    </span>
  </div>
);