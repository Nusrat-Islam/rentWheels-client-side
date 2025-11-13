import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const ListingCards = ({ rent, rents, setRents }) => {


  const handleDelete = () => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://ren-beige.vercel.app/rents/${rent._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },

        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              // 👉 UI theke remove kore dao
              const remaining = rents.filter(item => item._id !== rent._id);
              setRents(remaining);

              Swal.fire({
                title: "Deleted!",
                text: "Your car has been deleted.",
                icon: "success"
              });
            }
          })
          .catch(e => {
            console.log(e)
          })

      }
    });
  }
  return (

    <div >

      <div className=''>
        <div className=" card w-40 h-[480px] lg:h-full lg:w-full md:h-full md:w-full bg-transparent shadow-xl shadow-amber-300 mt-10">
          <figure className="px-6 pt-8">
            <img
              src={rent.imageUrl}
              alt="Cars"
              className=" w-full rounded-xl h-85 transition-transforn hover:scale-120" />
          </figure>
          <div className="card-body ">
            <div className='lg:flex  md:flex flex-col justify-between items-center'>
              <div><h2 className="card-title lg:primary-font md:primary-font lg:text-xl md:text-xl">{rent.name}</h2></div>
              <div>  <p className="secondary-font font-bold lg:text-xl md:text-xl bg-gradient-to-r from-[#FF8C00] via-[#9c2fea] to-[#e5d308] text-transparent bg-clip-text">
                {rent.category}
              </p></div>
            </div>
            <div className="">
              <div className="flex flex-col justify-center gap-3">

                <button className="btn w-full bg-transparent lg:text-xl md:text-xm text-xs border-purple-600 ">
                  Starting from <span className='text-yellow-500'> ${rent.rentPerDay}/</span> day
                </button>


                <div className="lg:flex md:flex gap-3">
                  <Link to={`/update-cars/${rent._id}`} className="btn thm-btn flex-1">Update</Link>
                  <button onClick={handleDelete} className="btn thm-btn flex-1">Delete</button>
                </div>
              </div>

            </div>

            <div>
              <img src="/src/assets/badge.png" alt="" className='relative 
         right-3.5 w-25 h-15 -mt-115 -left-2'/>
            </div>

            <div>
              <span className='absolute text-white secondary-font -mt-112 '>{rent.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCards;