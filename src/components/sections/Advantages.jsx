import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react"; 
import { useTranslation } from "react-i18next";

export default function Advantages() {
  const { t } = useTranslation("advantages");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const data = t("advantages", { returnObjects: true });

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
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

        {/* STATISTIKA */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
          {data.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-white">
                <CountUp end={stat.number} />
                <span className="text-indigo-400 text-3xl md:text-4xl ml-1">{stat.suffix}</span>
              </div>
              <p className="mt-3 text-base md:text-lg text-white/70 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SARLAVHA */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-6xl font-bold mb-16"
        >
          <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            {data.title}
          </span>
        </motion.h2>

        {/* KARTALAR */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.list.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              <div className="h-full p-7 bg-white/6 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 group-hover:bg-white/12 group-hover:border-white/30 group-hover:shadow-2xl">
                <div className="mb-5 w-14 h-14">
                  <img
                    src={adv.icon}
                    alt={adv.title}
                    className="w-full h-full filter brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{adv.title}</h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">{adv.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function CountUp({ end }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / 80;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [inView, end]);

  return <span ref={countRef}>{count.toLocaleString("en-US")}</span>;
}