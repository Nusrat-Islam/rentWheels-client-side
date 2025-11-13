import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  const brands = [
    "/src/assets/brand1.png",
    "/src/assets/brand2.png",
    "/src/assets/brand3.png",
    "/src/assets/brand4.png",
    "/src/assets/brand5.png",
    "/src/assets/brand6.png",
    "/src/assets/brand7.png",
    "/src/assets/brand8.png",
  ];

  return (
    <div>
      <div className="flex justify-center items-center mb-10">
        <div>
          <img
            className="h-45 rotate-y-180"
            src="/src/assets/headingCar2.png"
            alt=""
          />
        </div>
        <h3 className="primary-font -mb-12 font-semibold text-gray-700 text-5xl ml-4">
          Our Top Brands
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-20 mt-15 pb-15">
        {brands.map((brand, index) => (
          <motion.img
            key={index}
            src={brand}
            alt={`brand-${index}`}
            className="h-50 w-50"
            animate={{ rotate: 360 }}
            transition={{ repeat:2, duration: 5, ease: "linear" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Logo;
