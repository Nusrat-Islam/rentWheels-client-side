  import React from 'react';
import { useLoaderData } from 'react-router';
import RentCard from '../Components/RentCard';
  
  const BrowsCar = () => {
  const data = useLoaderData()
  console.log(data)


    return (
        <div className='
      '>
            <div className='flex justify-center items-center '>
                <div>
                   <img className=' h-45 rotate-y-180' src="/src/assets/headingCar2.png "alt="" />
                </div>
                 <h3 className='primary-font -mb-12 font-bold text-2xl ml-4 '>All Available Cars</h3>
            </div>
            
            <div className='grid grid-cols-3 gap-8 pb-20'>
             {
                data.map(singleData => (
                 <RentCard key={singleData._id} singleData={singleData}></RentCard>   
                ))
             }
            </div>
           
        </div>
    );
  };
  
  export default BrowsCar;