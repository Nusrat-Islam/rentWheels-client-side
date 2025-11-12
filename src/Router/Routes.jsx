import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Components/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import BrowsCar from "../Pages/BrowsCar";


 export const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout></RootLayout>,
    children: [
        {
            index:true,
            Component: Home,
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
    ]
  },
]);