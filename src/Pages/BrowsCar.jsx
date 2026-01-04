import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import RentCard from '../Components/RentCard';

const BrowsCar = () => {
const data = useLoaderData() || [];


  
  // States for search, filter and sort
 const [displayCars, setDisplayCars] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // Functionality Logic


  useEffect(() => {
  setDisplayCars(data);
}, [data]);

useEffect(() => {
  if (!data || data.length === 0) return;

  let filtered = [...data];

  // 🔍 Search
  if (searchText) {
  filtered = filtered.filter(car =>
    car.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}


  // 💰 Price Filter (string → number fix)
 if (filterPrice) {
  filtered = filtered.filter(car => {
    const price = Number(car.rentPerDay);

    if (filterPrice === "low") return price <= 50;
    if (filterPrice === "mid") return price > 50 && price <= 150;
    if (filterPrice === "high") return price > 150;
    return true;
  });
}


  // 📍 Location Filter
  if (filterLocation) {
    filtered = filtered.filter(car =>
      car.location?.toLowerCase().includes(filterLocation.toLowerCase())
    );
  }

  // 🔃 Sorting
  if (sortOrder === "lowToHigh") {
    filtered.sort((a, b) => Number(a.rentPerDay) - Number(b.rentPerDay));
  }
  if (sortOrder === "highToLow") {
    filtered.sort((a, b) => Number(b.rentPerDay) - Number(a.rentPerDay));
  }

  setDisplayCars(filtered);
}, [searchText, filterPrice, filterLocation, sortOrder, data]);


  return (
    <div className='w-11/12 mx-auto'>
      <div className='flex justify-center items-center '>
        <div>
          <img className=' h-45 rotate-y-180' src="/headingCar2.png " alt="" />
        </div>
        <h3 className='primary-font -mb-12 font-bold text-4xl ml-4 '>All Available Cars</h3>
      </div>

      {/* --- Search and Filter Section --- */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 mt-10 p-4 bg-gray-50 rounded-xl shadow-sm'>
        {/* Search Bar */}
        <input 
          type="text" 
          placeholder="Search by car model..." 
          className="input input-bordered w-full"
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Filter 1: Price */}
        <select className="select select-bordered w-full" onChange={(e) => setFilterPrice(e.target.value)}>
          <option value="">Any Price</option>
          <option value="low">Budget ($0 - $50)</option>
          <option value="mid">Mid-Range ($51 - $150)</option>
          <option value="high">Luxury ($150+)</option>
        </select>

        {/* Filter 2: Location */}
        <input 
          type="text" 
          placeholder="Filter by location..." 
          className="input input-bordered w-full"
          onChange={(e) => setFilterLocation(e.target.value)}
        />

        {/* Sorting Option */}
        <select className="select select-bordered w-full" onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Sort by Price</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      {/* --- Car Grid (Original code structure kept) --- */}
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-20'>
        {
          displayCars.map(singleData => (
            <RentCard key={singleData._id} singleData={singleData}></RentCard>
          ))
        }
      </div>

      {displayCars.length === 0 && (
        <p className="text-center text-2xl font-bold text-gray-400 pb-20">No cars found!</p>
      )}
    </div>
  );
};

export default BrowsCar;