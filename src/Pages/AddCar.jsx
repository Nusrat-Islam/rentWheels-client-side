

import { use } from 'react';
import { AuthContext } from '../Context/AuthContext';


const AddCar = () => {
  const { user } = use(AuthContext)
  const handleAddCar = (e) => {


    e.preventDefault()

    const formData = {
      name: e.target.name.value,
      description: e.target.description.value,
      category: e.target.category.value,
      rentPerDay: e.target.price.value,
      location: e.target.location.value,
      imageUrl: e.target.image.value,
      providerName: user.displayName,
      providerEmail: user.email,
      status: "available",
      rating: "5",
      createdAt: new Date()


    }
    fetch('https://ren-beige.vercel.app/rents', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(e => {
        console.log(e)
      })
  }
  return (
    <div>

      <div className="card shadow-amber-200 pb-6 shadow-xl bg-transparent w-full max-w-md mx-auto  rounded-2xl">
        <div className="card-body p-6 relative">
          <div className='flex justify-center items-center -mt-12'>
            <div>
              <img className=' h-45 rotate-y-180' src="/src/assets/headingCar2.png " alt="" />
            </div>
            <h3 className='primary-font -mb-12 font-bold text-2xl ml-4 '>Add New Car</h3>
          </div>
          <form onSubmit={handleAddCar} className="space-y-4">
            {/* Name Field */}
            <div className='flex gap-2'>
              <div>
                <label className="label secondary-font font-semibold text-gray-600">Name</label>
                <input

                  type="text"
                  name="name"
                  required
                  className="input shadow-amber-200 shadow-xl bg-transparent w-full rounded-full focus:border-0 focus:outline-black"
                  placeholder="Enter name"
                />
              </div>


              <div>
                <label className="label secondary-font font-semibold text-gray-600">Category</label>
                <select
                  defaultValue={""}
                  name="category"
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
                  name="location"
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
                  name={user.displayName}
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
                  required
                  className="input shadow-amber-200 shadow-xl bg-transparent w-full rounded-full focus:border-0 focus:outline-black"
                  placeholder={user.email}
                />
              </div>
            </div>


            {/* Thumbnail URL */}
            <div>
              <label className="label secondary-font font-semibold text-gray-600 mb-1">Thumbnail URL</label>
              <input
                type="url"
                name="image"
                required
                className="input bg-transparent shadow-amber-200 shadow-xl w-full rounded-full focus:border-0  focus:outline-black"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full text-white mt-6 rounded-full bg-linear-to-r thm-btn "
            >
              Add Car
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCar;