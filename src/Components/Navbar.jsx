import React, {  useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { IoLogIn, IoLogOut } from 'react-icons/io5';
import { toast } from 'react-toast';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)

   const signOutUser = () => {
      logOut()
      .then((res)=>{
         console.log(res.user)
         toast.success(res.user)
      })
      .catch((e)=> {
           console.log(e.message)
           toast.error(e.message)
      })
    }
    return (
        <div >
            <div className="navbar shadow-amber-200 shadow-xl">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><a>Home</a></li>
      <li><a>Add Car</a></li>
      <li><a>My Listings</a></li>
      <li><a>My Bookings</a></li>
      <li><a>Browse Cars</a></li>
      </ul>
    </div>
    <div className='mt-3'>
        <div>
            <img src="/public/websiteLogo-.png"alt="" className='relative -mt-10  w-38 h-38' />
        </div>
        <div className='absolute -mt-15 '>
            <h4 className='primary-font font-bold  ml-9'>RentWheels</h4>
            <p className='text-xs ml-2 bg-gradient-to-r  from-[#FF8C00] via-[#9c2fea]  to-[#e5d308] text-transparent bg-clip-text'>C a r  R e n t a l  P l a t f o r m</p>
        </div>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal -mt-5 font-semiold primary-font text-xl gap-x-4">
      <li><a>Home</a></li>
      <li><a>Add Car</a></li>
      <li><a>My Listings</a></li>
      <li><a>My Bookings</a></li>
       <NavLink to='/brows'>Brows Cars</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  referrerPolicy="no-referrer"
                  src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>
             
              <li>
             
              </li>
              <li>
                <button
                  onClick={signOutUser}
                  className="btn thm-btn"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="btn thm-btn"
          >
            {" "}
            <IoLogIn /> Login
          </Link>
        )} 
  </div>
</div>
        </div>
    );
};

export default Navbar;