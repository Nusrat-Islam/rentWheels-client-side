import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import RentCard from '../Components/RentCard';
import ListingCard from '../Components/ListingCards';
import ListingCards from '../Components/ListingCards';
import { Link } from 'react-router';

const MyBookings = () => {

    const { user } = use(AuthContext)
    const [rents, setRents] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(rents)

    useEffect(() => {
        fetch(`https://ren-beige.vercel.app/my-bookings?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setRents(data.result)
                setLoading(false)
            })
    }, [])
    if (loading) {
        return <p>Loading.........</p>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
            {rents.map((booking) => (
                <div key={booking._id} className="card w-96 bg-base-100 shadow-sm">
                    <figure>
                        <img className='h-[400px] pt-8'
                            src={booking.carImage || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                            alt={booking.name || "Car"} />
                    </figure>
                    <div className="card-body">
                        <h2 className="primary-font font-bold text-2xl">{booking.name}</h2>
                        <p className='secondary-font text-xl'>Booked by: {booking.userName}</p>
                        <p className='secondary-font font-bold'>Status: {booking.status}</p>
                        <div className=" ">
                            <Link to="/" className="btn thm-btn w-full text-xl">Back to home</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyBookings;