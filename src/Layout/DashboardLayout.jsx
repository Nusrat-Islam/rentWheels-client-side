import { Outlet } from "react-router";
import DashboardNavbar from "../Components/DashboardNavbar";
import Sidebar from "../Components/Sidebar";


const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Top Navbar */}
        <DashboardNavbar />

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
