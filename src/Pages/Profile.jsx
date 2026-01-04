import { useContext, useState } from "react";

import { toast } from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUserProfile(name, photo);
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>

      <div className="bg-white rounded-xl shadow p-6 max-w-4xl mx-auto">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={photo || "https://i.ibb.co/2kR5zq0/user.png"}
            alt="Profile"
            className="w-28 h-28 rounded-full border mb-3 object-cover"
          />
          <h3 className="text-xl font-semibold">{user?.displayName}</h3>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        {/* Editable Form */}
        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="label font-medium">Full Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="label font-medium">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>

          <div>
            <label className="label font-medium">Email</label>
            <input
              type="email"
              className="input input-bordered w-full bg-gray-100"
              value={user?.email}
              disabled
            />
          </div>

          <button
            disabled={loading}
            className="btn btn-primary w-full"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
