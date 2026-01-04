import { useState } from "react";
import { Link } from "react-router";
import { FaUserCircle } from "react-icons/fa";

const DashboardNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold text-gray-700">
        Dashboard
      </h2>

      {/* Profile Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2"
        >
          <FaUserCircle className="text-2xl text-gray-600" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg overflow-hidden">
            <Link
              to="/dashboard/profile"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Profile
            </Link>

            <Link
              to="/"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Home
            </Link>

            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardNavbar;
