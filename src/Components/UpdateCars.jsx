import React, { use } from 'react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toast';
import Swal from 'sweetalert2';

const UpdateCars = () => {

  const { user } = use(AuthContext)

  const data = useLoaderData()
  const result = data.result

  const handleSubmit = (e) => {


    e.preventDefault()

    const formData = {
      name: e.target.name.value,
      description: e.target.description.value,
      category: e.target.category.value,
      rentPerDay: e.target.price.value,
      location: e.target.location.value,
      imageUrl: e.target.image.value,
      //    providerName:user.displayName,
      // providerEmail:user.email,
      status: "available",



    }
    console.log(formData)
    fetch(`https://ren-beige.vercel.app/rents/${result._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success("Car Updated Successfully")
      })
      .catch(e => {
        console.log(e)
      })
  }



  return (
    <div>
      <div className="card shadow-amber-200 pb-6 shadow-xl bg-transparent w-full max-w-md mx-auto  rounded-2xl">
        <div className="card-body p-6 relative">
          <h2 className="text-2xl primary-font font-bold text-center mb-6">Update Your Car</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="label secondary-font font-semibold text-gray-600">Name</label>
              <input

                type="text"
                defaultValue={result.name}
                name="name"
                required
                className="input shadow-amber-200 shadow-xl bg-transparent w-full rounded-full focus:border-0 focus:outline-black"
                placeholder="Enter name"
              />
            </div>
            {/* Sedan, SUV, Hatchback, Luxury, Electric) */}
            {/* Category Dropdown */}
            <div>
              <label className="label secondary-font font-semibold text-gray-600">Category</label>
              <select
                defaultValue={result.category}
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

            {/* Description Textarea */}
            <div>
              <label className="label secondary-font font-semibold text-gray-600">Description</label>
              <textarea
                name="description"
                defaultValue={result.description}
                required
                rows="3"
                className="textarea bg-transparent shadow-amber-200 shadow-xl w-full rounded-2xl focus:border-0 focus:outline-black h-[250px]"
                placeholder="Enter description"
              ></textarea>

              {/* location */}
            </div>
            <label className="label secondary-font font-semibold text-gray-600 mb-1">Location</label>
            <input

              type="text"
              defaultValue={result.location}
              name="location"
              required
              className="input shadow-amber-200 shadow-xl bg-transparent w-full rounded-full focus:border-0 focus:outline-black"
              placeholder="Enter location"
            />
            {/* Rent/Day */}
            <label className="label secondary-font font-semibold text-gray-600 mb-1">Price/Day</label>
            <input

              type="text"
              defaultValue={result.rentPerDay}
              name="price"
              required
              className="input shadow-amber-200 shadow-xl bg-transparent w-full rounded-full focus:border-0 focus:outline-black"
              placeholder="Enter price"
            />
            <label className="label secondary-font font-semibold text-gray-600 mb-1">Status</label>
            <input

              type="text"
              defaultValue={result.status}
              name="status"
              required
              className="input shadow-amber-200 shadow-xl bg-transparent w-full rounded-full focus:border-0 focus:outline-black"
              placeholder="Enter status"
            />
            <label className="label secondary-font font-semibold text-gray-600 mb-1">UserName</label>
            <input

              type="text"
              defaultValue={user.displayName}
              name="status"
              disabled
              required
              className="input shadow-amber-200 shadow-xl bg-transparent w-full rounded-full focus:border-0 focus:outline-black"

            />
            <label className="label secondary-font font-semibold text-gray-600 mb-1">UserEmail</label>
            <input

              type="text"
              defaultValue={user.email}
              disabled
              name="status"
              required
              className="input shadow-amber-200 shadow-xl bg-transparent w-full rounded-full focus:border-0 focus:outline-black"

            />

            {/* Thumbnail URL */}
            <div>
              <label className="label secondary-font font-semibold text-gray-600 mb-1">Thumbnail URL</label>
              <input
                type="url"
                defaultValue={result.imageUrl}
                name="image"
                required
                className="input bg-transparent shadow-amber-200 shadow-xl w-full rounded-full focus:border-0  focus:outline-black"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full text-white mt-6 rounded-full bg-linear-to-r thm-btn text-xl"
            >
              Update Car <MdOutlineDoubleArrow className="text-xl" />

            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCars;