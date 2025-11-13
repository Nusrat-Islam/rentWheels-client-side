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




 export const router = createBrowserRouter(

  [
 
  {
    path: "/",
    element:<RootLayout></RootLayout>,
    children: [
        {
            index:true,
            Component: Home,
            loader: () => fetch('http://localhost:3000/newest-cars')
        },
        {
       path:"/login",
       element: <Login></Login>
        },
        {
       path:"/register",
       element: <Register></Register>
        },
        {
       path:"/brows",
       element:<BrowsCar></BrowsCar>,
       loader:()=> fetch('http://localhost:3000/rents')
        },
        {
        path:"/add-car",
        element:<PrivateRoute>
          <AddCar></AddCar>
        </PrivateRoute>
        },
        {
        path:"/car-details/:id",
        element:(<PrivateRoute>
         <CarDetails></CarDetails>
        </PrivateRoute>
        ),
        loader: ({params}) => fetch(`http://localhost:3000/rents/${params.id}`)
        },
        {
        path:"/update-cars/:id",
        element:(<PrivateRoute>
        <UpdateCars></UpdateCars>
        </PrivateRoute>
        ),
        loader: ({params}) => fetch(`http://localhost:3000/rents/${params.id}`)
        },
        {
        path:"/my-listings",
        element:(<PrivateRoute>
          <MyListings></MyListings>
        </PrivateRoute>
        ),
         
        },
      
    ]
  },
]);