import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router'; // Ensure correct import for react-router-dom
import { AuthContext } from '../Context/AuthContext';
import { IoLogIn, IoLogOut, IoCarSport, IoList, IoAddCircle } from 'react-icons/io5';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const signOutUser = () => {
    logOut()
      .then(() => {
        toast.success("You logged-out");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  // Active Link Styling
  const activeLink = ({ isActive }) =>
    isActive
      ? "text-[#7b3cff] border-b-2 border-[#7b3cff] font-bold"
      : "text-gray-700 hover:text-[#7b3cff] transition-all duration-300";

  // Common Nav Links based on Auth State
  const links = (
    <>
      <li><NavLink className={activeLink} to="/">Home</NavLink></li>
      <li><NavLink className={activeLink} to="/brows">Browse Cars</NavLink></li>
      <li><NavLink className={activeLink} to="/about">About Us</NavLink></li>
      
      {/* Protected Routes - Only shown when logged in */}
      {user && (
        <>
          <li><NavLink className={activeLink} to="/add-car">Add Car</NavLink></li>
          <li><NavLink className={activeLink} to="/my-listings">My Listings</NavLink></li>
          <li><NavLink className={activeLink} to="/my-bookings">My Bookings</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-lg">
      <div className="navbar mx-auto w-11/12 px-0">
        
        {/* Navbar Start: Logo & Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn primary-btn lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
              {links}
            </ul>
          </div>

        {/* Logo Section */}
<Link to="/" className="flex flex-col items-center gap-1 md:gap-2 group">
  <div className=" flex-shrink-0 -mt-7">
    <img 
      src="/websiteLogo-.png" 
      alt="Logo" 
      className="w-32 h-32 object-contain group-hover:scale-110 transition-transform" 
    />
  </div>
  <div className="flex flex-col justify-center -mt-12">
    <h4 className="text-sm md:text-xl font-bold text-center  leading-none">
      RentWheels
    </h4>
    <p className="text-[7px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-widest bg-gradient-to-r from-[#FF8C00] via-[#9c2fea] to-[#e5d308] text-transparent bg-clip-text font-bold whitespace-nowrap">
      C a r R e n t a l P l a t f o r m
    </p>
  </div>
</Link>

        </div>

        {/* Navbar Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 font-medium">
            {links}
          </ul>
        </div>

        {/* Navbar End: Auth/Profile */}
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar online">
                <div className="w-10 rounded-full border-2 border-[#7b3cff]">
                  <img 
                    alt="User Profile" 
                    referrerPolicy="no-referrer"
                    src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} 
                  />
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-4 shadow-2xl menu menu-sm dropdown-content bg-base-100 rounded-xl w-60 border border-gray-100">
                <div className="flex flex-col items-center pb-3 mb-2 border-b">
                   <p className="font-bold text-gray-800">{user?.displayName}</p>
                   <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
                
                <li><Link to="/profile" className="py-2 hover:bg-purple-50"><IoCarSport /> My Profile</Link></li>
                <li><Link to="dashboard" className="py-2 hover:bg-purple-50"><IoList /> Dashboard</Link></li>
                
                <li className="mt-2">
                  <button 
                    onClick={signOutUser}
                    className="btn btn-sm bg-[#7b3cff] hover:bg-[#622ecc] text-white border-none flex items-center justify-center gap-2 w-full"
                  >
                    <IoLogOut size={18} /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn bg-[#7b3cff] hover:bg-[#622ecc] text-white border-none px-6 rounded-full flex items-center gap-2">
              <IoLogIn size={20} /> Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;