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
          path: "/car-details/:id",
          element: (<PrivateRoute>
            <CarDetails></CarDetails>
          </PrivateRoute>
          ),
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

    },
    {
      path: "/*",
      element: <NotFound></NotFound>
    }

  ]);