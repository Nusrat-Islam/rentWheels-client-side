import React, { useRef, useState } from 'react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';


const CarDetails = () => {
  const data = useLoaderData();
  const details = data.result;
  const carId = details._id;
  const rentModalRef = useRef(null);
  const { user } = React.useContext(AuthContext);
  const [status, setStatus] = useState(details.status);


  const handleModal = () => {
    rentModalRef.current.showModal();
  }

  const handleModalSubmit = (e) => {
    e.preventDefault()



    const bookingData = {
      name: e.target.name.value,
      carImage: e.target.image.value,
      carId: carId,
      userEmail: user.email,
      userName: user.displayName,
      rentPerDay: e.target.price.value,
      bookingDate: new Date(),
      status: "confirmed"
    }

    rentModalRef.current.close();

    fetch("https://ren-beige.vercel.app/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData)
    })

      .then(res => res.json())
      .then(data => {
        if (data.success) {

          toast.dismiss();
          toast.success("Booking confirmed!");
          setStatus("unavailable");

        } else {
          // Revert status if failed
          setStatus(details.status);

          toast.error(data.message || "Booking failed!");
        }
      });



  };

  return (
    <div className='flex justify-center items-center mt-16'>
      <div className="card card-side shadow-xl shadow-amber-300 bg-transparent w-96 lg:w-full md:w-full">
        <figure>
          <img className='lg:px-6 md:px-6 md:py-6 lg:py-6 px-2 py-2  h-[440px] w-[380px]'
            src={details.imageUrl}
            alt="car" />
        </figure>
        <div className=" mt-9">

          <div>
            <h2 className="primary-font font-bold  text-xl md:text-3xl lg:text-3xl">{details.name}</h2>
          </div>
          <div>
            <p className='secondary-font font-bold text-xl bg-gradient-to-r from-[#FF8C00] via-[#9c2fea] to-[#e5d308] text-transparent bg-clip-text mt-3 mb-3'>{details.category}</p>
          </div>

          <p className='secondary-font text-xm'>{details.description}</p>
          <div>
            <h4 className='secondary-font font-medium lg:mb-3 md:mb-3 lg:mt-3 md:mt-3'> <span className='text-purple-600'>Email:</span> {details.providerEmail}</h4>
          </div>
          <div>
            <h4 className='secondary-font font-medium'><span className='text-purple-600'>Name:</span>{details.providerName}</h4>
          </div>
          <p className='secondary-font mb-2 lg:mt-6 lg:mb-6  md:mb-3 md:mt-3  text-xl'><span className='text-purple-600'>Location: </span>{details.location}</p>
          <div>
            <button className='btn btn-outline lg:w-full md:w-full flex-1 border-2 border-purple-600 bg-transparent py-3 rounded-lg font-bold  md:text-xl lg:text-xl'>Starting from <span className='text-yellow-500'>${details.rentPerDay}/</span>Day</button>
          </div>
          <div>
            <button onClick={handleModal} className='btn btn-outline  lg:w-full md:w-full mt-5 thm-btn rounded-lg text-xl'>Book Now <MdOutlineDoubleArrow className="text-xl" />

            </button>
            {/* Modal */}

            <dialog ref={rentModalRef} className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <form onSubmit={handleModalSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div className='flex gap-2'>
                    <div>
                      <label className="label secondary-font font-semibold text-gray-600">Name</label>
                      <input

                        type="text"
                        defaultValue={details.name}
                        disabled
                        name="name"
                        required
                        className="input shadow-amber-200 shadow-xl bg-transparent w-full rounded-full focus:border-0 focus:outline-black"
                        placeholder="Enter name"
                      />
                    </div>


                    <div>
                      <label className="label secondary-font font-semibold text-gray-600">Category</label>
                      <select
                        defaultValue={details.category}
                        name="category"
                        disabled
                        required
                        className="select bg-base-100 shadow-amber-200 shadow-xl w-full rounded-full focus:border-0 focus:outline-gray-200 "
                      >
                        <option value="" disabled>
                          Select category
                        </option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Hatchback">Hatchback</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Electric">Electric</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Other">Others</option>
                      </select>
                    </div>
                  </div>

                  {/* Description Textarea */}
                  <div>
                    <label className="label secondary-font font-semibold text-gray-600">Description</label>
                    <textarea
                      name="description"
                      defaultValue={details.description}
                      disabled
                      required
                      rows="2"
                      className="textarea bg-transparent shadow-amber-200 shadow-xl w-full rounded-2xl focus:border-0 focus:outline-black h-[100px]"
                      placeholder="Enter description"
                    ></textarea>
                  </div>
                  <div className='flex gap-2'>
                    {/* location */}

                    <div>
                      <label className="label secondary-font font-semibold text-gray-600 mb-1">Location</label>
                      <input

                        type="text"
                        defaultValue={details.location}
                        name="location"
                        disabled
                        required
                        className="input shadow-amber-200 shadow-xl bg-transparent w-full rounded-full focus:border-0 focus:outline-black"
                        placeholder="Enter location"
                      />
                    </div>

                    {/* Rent/Day */}
                    <div>
                      <label className="label secondary-font font-semibold text-gray-600 mb-1">Price/Day</label>
                      <input

                        type="text"
                        defaultValue={details.rentPerDay}
                        disabled
                        name="price"
                        required
                        className="input shadow-amber-200 shadow-xl bg-transparent w-full rounded-full focus:border-0 focus:outline-black"
                        placeholder="Enter price"
                      />
                    </div>
                  </div>
                  <div className='flex gap-2'>
                    <div>
                      <label className="label secondary-font font-semibold text-gray-600 mb-1">providerName</label>
                      <input

                        type="text"
                        name="name"
                        defaultValue={details.displayName}
                        disabled
                        required
                        className="input shadow-amber-200 shadow-xl bg-transparent w-full rounded-full focus:border-0 focus:outline-black"
                        placeholder={user.displayName}
                      />
                    </div>
                    <div>
                      <label className="label secondary-font font-semibold text-gray-600 mb-1">ProviderEmail</label>
                      <input

                        type="text"
                        name="providerEmail"
                        disabled
                        defaultValue={details.providerEmail}
                        required
                        className="input shadow-amber-200 shadow-xl bg-transparent w-full rounded-full focus:border-0 focus:outline-black"
                        placeholder={user.email}
                      />
                    </div>
                  </div>


                  {/* Thumbnail URL */}
                  <div className='flex gap-3'>
                    <div>
                      <label className="label secondary-font font-semibold text-gray-600 mb-1">Thumbnail URL</label>
                      <input
                        type="url"
                        name="image"
                        defaultValue={details.imageUrl}
                        disabled
                        required
                        className="input bg-transparent shadow-amber-200 shadow-xl w-full rounded-full focus:border-0  focus:outline-black"
                        placeholder="https://example.com/image.jpg"
                      />   </div>

                    <div>  <label className="label secondary-font font-semibold text-gray-600 mb-1">Status</label>
                      <input
                        type="text"
                        name="status"
                        defaultValue={details.status}
                        required
                        disabled
                        className="input bg-transparent shadow-amber-200 shadow-xl w-full rounded-full focus:border-0  focus:outline-black"
                        placeholder={details.status}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn w-full text-white mt-6 rounded-full bg-linear-to-r thm-btn "
                  >
                    Book
                  </button>
                </form>
                <div className="modal-action">
                  <form method="dialog">

                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>

          </div>
          <div>
            <div>
              <img src="/badge.png" alt="" className='relative 
         right-3.5 w-25 h-15 -mt-90 lg:-mt-80 md:-mt-80 lg:-left-91 md:-left-87 -left-47' />
            </div>

            <div>
              <span className='absolute text-white secondary-font -mt-10 left-0 lg:left-7 md:left-0 lg:-mt-10 md:-mt-12'>{status}</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
