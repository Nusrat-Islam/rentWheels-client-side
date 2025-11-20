import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  const brands = [
    "https://www.pngall.com/wp-content/uploads/13/Nissan-Logo-PNG-Clipart.png",
    "/brand2.png",
    "/brand3.png",
    "/brand4.png",
    "/brand5.png",
    "/brand6.png",
    "/brand7.png",
    "/brand8.png",
  ];

  return (
    <div>
      <div className="flex justify-center items-center mb-10">
        <div>
          <img
            className="h-45 rotate-y-180"
            src="/headingCar2.png"
            alt=""
          />
        </div>
        <h3 className="primary-font -mb-12 font-semibold text-gray-700 text-5xl ml-4">
          Our Top Brands
        </h3>
      </div>

      <div className="grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3 gap-x-10 gap-y-20 mt-15 pb-15">
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
