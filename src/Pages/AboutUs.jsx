import React from "react";

const AboutUs = () => {
  return (
    <div className="w-11/12 mx-auto py-16">
      
      {/* ===== Heading ===== */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About RentWheels
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your trusted platform for easy, reliable, and affordable car rentals.
        </p>
      </div>

      {/* ===== Content Section ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed">
            RentWheels is a modern car rental platform designed to make vehicle
            booking simple, fast, and transparent. Whether you need a car for
            daily travel, business trips, or special occasions, RentWheels
            connects you with trusted providers offering a wide range of cars.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our goal is to remove complexity from the rental process and give
            users full control with clear pricing, real-time availability, and
            secure bookings.
          </p>
        </div>

        {/* Right */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Why Choose Us
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✔ Wide variety of cars for every need</li>
            <li>✔ Transparent pricing with no hidden costs</li>
            <li>✔ Secure and fast booking system</li>
            <li>✔ User-friendly dashboard and management</li>
            <li>✔ Reliable service and trusted providers</li>
          </ul>
        </div>
      </div>

      {/* ===== Mission Section ===== */}
      <div className="mt-16 bg-gray-50 rounded-2xl p-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our mission is to revolutionize the car rental experience by combining
          technology, transparency, and trust. We aim to empower users with a
          seamless platform where renting a car feels effortless and reliable.
        </p>
      </div>

    </div>
  );
};

export default AboutUs;
