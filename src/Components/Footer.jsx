import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaCcVisa, FaCcPaypal, FaCcMastercard, FaAmazonPay, FaCcStripe } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-500 text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        
        {/* Logo & Tagline */}
        <div>
          <div>
            <img src="/public/websiteLogo-.png"alt="" className='relative -mt-10  w-38 h-38' />
        </div>
        <div className='absolute -mt-15 '>
            <h4 className='primary-font font-bold  ml-9'>RentWheels</h4>
            <p className='text-xs ml-2 bg-gradient-to-r  from-[#FF8C00] via-[#9c2fea]  to-[#e5d308] text-transparent bg-clip-text'>C a r  R e n t a l  P l a t f o r m</p>
        </div>
          <p className="text-sm text-gray-800">
            Premium Car Rental Platform — drive your dream vehicle with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-800">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/fleet" className="hover:text-white transition">Fleet</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-gray-800 text-sm">
            <li>Email: <a href="mailto:support@rentwheels.com" className="hover:text-white">support@rentwheels.com</a></li>
            <li>Phone: <a href="tel:+880123456789" className="hover:text-white">+880 1234 567 89</a></li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Payment & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">We Accept</h3>
          <div className="flex space-x-4 mb-4">
           <a href="#" className="  text-white hover:bg-white hover:text-gray-800 transform hover:-translate-y-1 hover:scale-110 transition duration-300"><FaCcVisa size={24} /></a>
           <a href="#" className="  text-white hover:bg-white hover:text-gray-800 transform hover:-translate-y-1 hover:scale-110 transition duration-300"><FaCcPaypal size={24}/>
</a>
           <a href="#" className="  text-white hover:bg-white hover:text-gray-800 transform hover:-translate-y-1 hover:scale-110 transition duration-300"><FaCcMastercard size={24}/>
</a>
           <a href="#" className="  text-white hover:bg-white hover:text-gray-800 transform hover:-translate-y-1 hover:scale-110 transition duration-300"><FaAmazonPay  size={24}/>
</a>
           <a href="#" className="  text-white hover:bg-white hover:text-gray-800 transform hover:-translate-y-1 hover:scale-110 transition duration-300"><FaCcStripe size={24}/>
</a>
            
          </div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full text-white hover:bg-white hover:text-gray-800 transform hover:-translate-y-1 hover:scale-110 transition duration-300"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full text-white hover:bg-white hover:text-gray-800 transform hover:-translate-y-1 hover:scale-110 transition duration-300"><FaInstagram /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full text-white hover:bg-white hover:text-gray-800 transform hover:-translate-y-1 hover:scale-110 transition duration-300"><FaXTwitter /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full text-white hover:bg-white hover:text-gray-800 transform hover:-translate-y-1 hover:scale-110 transition duration-300"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-800 relative z-10">
        <p>© {new Date().getFullYear()} <span className="text-white font-bold">RentWheels</span> All Rights Reserved.</p>
        <a href="/terms" className="hover:text-white ml-2">Terms & Conditions</a>
      </div>

      {/* Moving Car */}
              <motion.div
        className="absolute bottom-2 text-5xl text-gray-900"
       animate={{
    x: ["-200px", "100vw"], 
    scaleX: [1, 1] // no flip
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
    ease: "linear"
  }}
      >
        <img className="w-80 rotate-y-180 " src="https://sbtechnosoft.com/vroomo/images/placeholder-8.png" alt="" />
      </motion.div> 
    </footer>
  );
};

export default Footer;




