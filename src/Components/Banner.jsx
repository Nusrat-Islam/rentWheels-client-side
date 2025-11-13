import React from "react";
import Slider from "react-slick";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/carBanner.jpg"; 
import banner2 from "../assets/carBanner4.avif"; 
import banner3 from "../assets/carBanner3.jpg"; 

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const slides = [
    { id: 1, image: banner1, words: ["Drive Your Dream Car"], description: "Luxury and affordable rentals.", button: "Explore Cars" },
    { id: 2, image: banner2, words: ["Easy & Fast Booking"], description: "Book in a few clicks.", button: "Book Now" },
    { id: 3, image: banner3, words: ["Reliable & Safe Cars"], description: "Maintained & insured vehicles.", button: "View Fleet" },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] w-full">
            <img 
              src={slide.image} 
              alt="" 
              className="w-full h-full object-cover object-center brightness-75" 
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 text-white">
              <motion.h2 
                initial={{ y: 50, opacity: 0 }} 
                animate={{ y:0, opacity:1 }} 
                transition={{ duration:1 }} 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              >
                <Typewriter 
                  words={slide.words} 
                  loop={0} 
                  cursor 
                  cursorStyle="|" 
                  typeSpeed={70} 
                  deleteSpeed={50} 
                  delaySpeed={2000} 
                />
              </motion.h2>
              <motion.p 
                initial={{ y:20, opacity:0 }} 
                animate={{ y:0, opacity:1 }} 
                transition={{ delay:1, duration:1 }} 
                className="text-lg md:text-xl mb-6"
              >
                {slide.description}
              </motion.p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;



