import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Components/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import BrowsCar from "../Pages/BrowsCar";
import AddCar from "../Pages/AddCar";
import PrivateRoute from "../Router/PrivateRoute";
import CarDetails from "../Components/CarDetails";
import MyListings from "../Pages/MyListings";
import UpdateCars from "../Components/UpdateCars";
import MyBookings from "../Pages/MyBookings";
import Loading from "../Components/Loading";
import NotFound from "../Pages/NotFound";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardHome from "../Components/DashboardHome";
import Profile from "../Pages/Profile";
import AboutUs from "../Pages/AboutUs";




export const router = createBrowserRouter(

  [

    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        {
          index: true,
          Component: Home,
          loader: () => fetch('https://ren-beige.vercel.app/newest-cars'),
          hydrateFallbackElement: <Loading></Loading>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/brows",
          element: <BrowsCar></BrowsCar>,
          loader: () => fetch('https://ren-beige.vercel.app/rents'),
          hydrateFallbackElement: <Loading></Loading>
        },
        {
          path: "/add-car",
          element: <PrivateRoute>
            <AddCar></AddCar>
          </PrivateRoute>
        },
        {
          path: "/about",
          element:
            <AboutUs></AboutUs>
        
        },
        {
          path: "/car-details/:id",
          element:
            <CarDetails></CarDetails>,
          
          loader: ({ params }) => fetch(`https://ren-beige.vercel.app/rents/${params.id}`),
          hydrateFallbackElement: <Loading></Loading>
        },
        {
          path: "/update-cars/:id",
          element: (<PrivateRoute>
            <UpdateCars></UpdateCars>
          </PrivateRoute>
          ),

          loader: ({ params }) => fetch(`https://ren-beige.vercel.app/rents/${params.id}`),
          hydrateFallbackElement: <Loading></Loading>
        },
        {
          path: "/my-listings",
          element: (<PrivateRoute>
            <MyListings></MyListings>
          </PrivateRoute>
          ),

        },
        {
          path: "/my-bookings",
          element: <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        },

      ],
     //dashboard
     
    },
    //
    {
    path: "dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
       { index: true, element: <DashboardHome /> },
        { path: "add-car", element: <AddCar /> }, // এখন এটি ড্যাশবোর্ডের ভেতরে
        { path: "my-listings", element: <MyListings /> }, // এটিও ড্যাশবোর্ডের ভেতরে
        { path: "my-bookings", element: <MyBookings /> }, // এটিও ড্যাশবোর্ডের ভেতরে
         { path: "profile", element: <Profile/> },
    ]
  },
    {
      path: "/*",
      element: <NotFound></NotFound>
    }

  ]);