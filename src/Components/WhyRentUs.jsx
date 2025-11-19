import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';



  const heading = {

  words: "Why Rent Us?"
    }

const WhyRentUs = () => {
  
  return (

    <section className="py-16 bg-gray-100">
           <div className='flex justify-center items-center -mt-50'>
                <div>
                   <img className=' h-45 rotate-y-180' src="/headingCar2.png "alt="" />
                </div>
                 <h3 className='primary-font -mb-12 font-bold lg:text-5xl md:text-5xl text-2xl text-gray-700 ml-4 '>Why Rent Us?</h3>
            </div>
      <div className="max-w-xl lg:flex-row md:max-w-full mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-12">
      
        {/* Picture */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-0"
        >
          <img 
            src="https://dreamlayout.mnsithub.com/php/gorentphp/assets/images/resources/about-one-img-1.jpg" 
            alt="Why Rent Us" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
            
          <div className='mt-6'>
             <p>Every vehicle in our fleet is carefully maintained and regularly inspected to guarantee safety, comfort, and performance. From economy to luxury — we’ve got the perfect ride for every occasion.
                Our dedicated support team is available 24/7 to assist you with bookings, questions, or roadside emergencies. We value your trust and work tirelessly to make your journey smooth and worry-free.
             </p>
             <div className='mt-6'>
                <p className='btn rounded-full bg-yellow-500 text-bold secondary-font py-12  transform-transition hover:scale-170'>Affordable <br /> & Flexible</p>
                <p className='btn rounded-full bg-yellow-500 text-bold secondary-font py-12 transform-transition hover:scale-170'>Top-notch <br />Vehicles</p>
                <p className='btn rounded-full bg-yellow-500 text-bold secondary-font py-12 transform-transition hover:scale-170'>24/7 Customar<br /> Support</p>
                <p className='btn rounded-full bg-yellow-500 text-bold secondary-font py-12 transform-transition hover:scale-170'>Fast & Easy <br /> Booking</p>
                <p className='btn rounded-full bg-yellow-500 text-bold secondary-font py-12 transform-transition hover:scale-170'>Secure<br /> Payments</p>
             </div>
          </div>
        
        
        </motion.div>
      </div>
    </section>
  );
};

export default WhyRentUs;
