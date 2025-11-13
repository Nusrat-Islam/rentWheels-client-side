import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import RentCard from '../Components/RentCard';
import ListingCard from '../Components/ListingCards';
import ListingCards from '../Components/ListingCards';

const MyListings = () => {

    const { user } = use(AuthContext)
    const [rents, setRents] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://ren-beige.vercel.app/my-listings?email=${user.email}`)
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
        <div>
            <div className='flex justify-center items-center '>
                <div>
                    <img className=' h-45 rotate-y-180' src="/src/assets/headingCar2.png " alt="" />
                </div>
                <h3 className='primary-font -mb-12 font-bold text-2xl ml-4 '>My Listing Cars</h3>
            </div>
            <div className='grid grid-cols-3 gap-8 pb-20'>
                {
                    rents.map(rent => (
                        <ListingCards
                            key={rent._id}
                            rents={rents}
                            setRents={setRents}
                            rent={rent}
                        ></ListingCards>
                    ))
                }
            </div>
        </div>
    );
};

export default MyListings;