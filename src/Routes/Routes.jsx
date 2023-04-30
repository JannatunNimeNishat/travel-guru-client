import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import Bookings from "../pages/Bookings";

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
    }
])



export default router;