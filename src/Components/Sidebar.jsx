import { NavLink } from "react-router";
import { FaHome, FaCar, FaUser } from "react-icons/fa";

const Sidebar = () => {
  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition
     ${isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-blue-100"}`;

  return (
    <aside className="w-64 bg-white shadow-lg hidden md:block">
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

      <nav className="px-4 space-y-2">
        <NavLink to="/dashboard" end className={navLinkStyle}>
          <FaHome /> Dashboard
        </NavLink>

        <NavLink to="/dashboard/add-car" className={navLinkStyle}>
          <FaCar /> Add Car
        </NavLink>
        <NavLink to="/dashboard/my-listings" className={navLinkStyle}>
          <FaCar /> My Listings
        </NavLink>
        <NavLink to="/dashboard/my-bookings" className={navLinkStyle}>
          <FaCar /> My Bookings
        </NavLink>

        <NavLink to="/dashboard/profile" className={navLinkStyle}>
          <FaUser /> Profile
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
