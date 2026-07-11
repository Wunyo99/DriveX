import { carBrands } from "../data/carBrands";
import { motion } from "framer-motion";
const Brands = () => {
  const brands = [...carBrands, ...carBrands];
  return (
    <div className="overflow-hidden py-8">
      <motion.div
        className="flex gap-12 w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        }}
      >
        {brands.map((brand, index) => (
          <div
            key={index}
            className="shrink-0 flex items-center justify-center"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-15 w-auto object-contain lg:grayscale lg:hover:grayscale-0 transition"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Brands;
