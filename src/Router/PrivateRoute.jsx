import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { CircleLoader } from "react-spinners";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();


  if(loading){
    return <CircleLoader></CircleLoader>
  }
   
  if (!user) {
    // Redirect to login but remember where the user was going
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;