"use client"; // যদি CustomCursor client-side use করা হয়

import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import CustomCursor from "../Components/CustomCursor"; // cursor import

const RootLayout = () => {
  return (
    <div className="relative">
    
      <CustomCursor/>

    
      <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-purple-200 to-orange-100">
             {/* Navbar */}
           <Navbar />
        {/* <div className="mx-auto w-11/12"> */}
        
      

          {/* Page content rendered by router */}
          <Outlet />
       
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
