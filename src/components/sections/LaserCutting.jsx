import ServiceHero from "../../components/sections/ServiceHero";
import ServicesGrid from "../../components/sections/ServicesGrid";

export default function LaserCutting() {
  return (
    <>
      <ServiceHero
        title="Lazer kesim"
        subtitle="0.1 mm dan 25 mm gacha bo‘lgan metallarni yuqori aniqlikda kesamiz"
        image="/images/services/laser-cutting.jpg"
        features={[
          "±0.05 mm aniqlik",
          "Metall, alyuminiy, zanglamas po‘lat",
          "Katta o‘lchamdagi detallar",
          "Tez ishlab chiqarish"
        ]}
      />

     
      <ServicesGrid />
    </>
  );
}