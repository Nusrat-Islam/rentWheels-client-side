import React from 'react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { useLoaderData } from 'react-router';

const CarDetails = () => {
  const data = useLoaderData()
  const details = data.result;
  console.log(details)

  return (
    <div className='flex justify-center items-center mt-16'>
      <div className="card card-side  shadow-xl shadow-amber-300 bg-transparent">
        <figure>
          <img className='px-6 py-6  h-[440px] w-[380px]'
            src={details.imageUrl}
            alt="car" />
        </figure>
        <div className=" mt-9">
         
              <div>
                       <h2 className="primary-font font-bold text-3xl">{details.name}</h2>
              </div>
              <div>
                <p className='secondary-font font-bold text-xl bg-gradient-to-r from-[#FF8C00] via-[#9c2fea] to-[#e5d308] text-transparent bg-clip-text mt-3 mb-3'>{details.category}</p>
              </div>
           
          <p className='secondary-font text-xm'>{details.description}</p>
                 
            <div>
              <h4 className='secondary-font font-medium mb-3 mt-3 '> <span className='text-purple-600'>Email:</span> {details.providerEmail}</h4>
            </div>
            <div>
             <h4 className='secondary-font font-medium'><span className='text-purple-600'>Name:</span>{details.providerName}</h4>
            </div>


          <p className='secondary-font mt-6 mb-6 text-xl'><span className='text-purple-600'>Location: </span>{details.location}</p>
            <div>
                <button className='btn btn-outline w-full flex-1 border-2 border-purple-600 bg-transparent py-3 rounded-lg font-bold text-xl'>Starting from <span className='text-yellow-500'>${details.rentPerDay}/</span>Day</button>
            </div>
            <div>
                <button className='btn btn-outline w-full mt-5 thm-btn rounded-lg text-xl'>Book Now <MdOutlineDoubleArrow className="text-xl" />

                </button>
            </div>
            <div>
        <div>
          <img src="/src/assets/badge.png" alt="" className='relative 
         right-3.5 w-25 h-15 -mt-80 -left-91' />
       </div>

       <div>
          <span className='absolute text-white secondary-font left-7 -mt-10'>{details.status}</span>
       </div> 
       
       </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
