import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import Bookings from "../pages/Bookings";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('http://localhost:5000/destination')
            },
            {
                path:'/destination/:id',
                element:<Booking></Booking>,
                loader: ({params})=> fetch(`http://localhost:5000/destination/${params.id}`)
            },
            {
                path:'/bookings',
                element:<Bookings></Bookings>
            }
        ]
    },
    {
       path:'loginLayout',
       element:<LoginLayout></LoginLayout>,
       children:[
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Registration></Registration>
        }
       ]
    }
])



export default router;