import React, { useState } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import RentCard from './RentCard';
import WhyRentUs from './WhyRentUs';
import RentalProcess from './RentalProcess';
import Logo from './Logo';
import Loading from './Loading';

const Home = () => {
  const data = useLoaderData()
  const [cars, setCars] = useState(data)


  const handleForm = (e) => {
    e.preventDefault()

    const search_text = e.target.search.value
    console.log(search_text)
    fetch(`https://ren-beige.vercel.app/search?search=${search_text}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCars(data)
      })
  }

  return (


    <div>

      <Banner></Banner>
      {/* Search box */}


      <div className='flex justify-center items-center '>
        <div>
          <img className=' h-45 rotate-y-180' src="/headingCar2.png " alt="" />
        </div>
        <h3 className='primary-font -mb-12 font-bold text-4xl ml-4 '>6 Newest Cars</h3>
      </div>


      <form onSubmit={handleForm} className='flex'>
        <label className="input">
          <svg className="h-[1em] opacity-50 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" name="search" required placeholder="Search" />

        </label>
        <div>
          <button className='btn'>Search</button>
        </div>
      </form>

      <div className=' grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-8 pb-20'>
        {
          cars.map(singleData => (
            <RentCard key={singleData._id} singleData={singleData}></RentCard>
          ))
        }
      </div>
      <WhyRentUs></WhyRentUs>
      <RentalProcess></RentalProcess>
      <Logo></Logo>
    </div>
  );
};

export default Home;