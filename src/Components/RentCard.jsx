import { motion } from 'framer-motion';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { Link } from 'react-router';

const RentCard = ({ singleData, index }) => {
  const { name, providerName,description, providerEmail,location, rating, status, rentPerDay, category, imageUrl,_id } = singleData;

  return (
    <motion.div
    
      custom={index}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          delay: index * 0.15,
          ease: [0.17, 0.55, 0.55, 1],
        },
      }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
      className="card shadow-amber-300 shadow-xl bg-tranparent rounded-2xl overflow-hidden mt-8 transition-all duration-500 hover:shadow-2xl"
    >
      {/* Image */}
      <figure className="px-8 pt-10 h-80 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="rounded-3xl hover:scale-125 transform transition-transform duration-500 ease-in-out"
        />
      </figure>

      {/* Card body */}
      <div className="card-body  ">
        <div className="flex justify-between items-center">
         <div> <h2 className="primary-font font-bold pt-4 text-2xl">{name}</h2></div>
        <div>  <p className="secondary-font font-bold text-xl bg-gradient-to-r from-[#FF8C00] via-[#9c2fea] to-[#e5d308] text-transparent bg-clip-text">
            {category}
          </p></div>
        </div>
        <div>
          <p className='secondary-font'>{description}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="secondary-font text-xl">Location: {location}</p>
          <div className="flex items-center gap-2">
            <p className="secondary-font text-xl">{rating}</p>
            <img className="w-8 h-8" src="/rating.png" alt="rating" />
          </div>
        </div>
        
        <div className='flex justify-between items-center'>
          <div>
       <h4 className='secondary-font'>Email: {providerEmail}</h4>
          </div>
          <div>
       <h4 className='secondary-font'>Name: {providerName}</h4>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 md:gap-6 w-full max-w-md mx-auto">
          <button className="mt-3 btn flex-1 border-2 border-purple-600 bg-transparent py-3 rounded-lg font-bold text-xl">
            Starting From <span className="text-yellow-500">${rentPerDay}/</span>Day
          </button>

          <Link to={`/car-details/${_id}`} className="flex-1 thm-btn py-3 rounded-lg text-xl font-semibold hover:bg-purple-600 transition flex justify-center items-center gap-2">
            View Details <MdOutlineDoubleArrow className="text-xl" />
          </Link>
        </div>
       <div>
        <div>
          <img src="/badge.png" alt="" className='relative 
         right-3.5 w-25 h-15 -mt-140'/>
       </div>

       <div>
          <span className='absolute text-white secondary-font -mt-10'>{status}</span>
       </div> 
       
       </div>
      </div>
    </motion.div>
  );
};

export default RentCard;
