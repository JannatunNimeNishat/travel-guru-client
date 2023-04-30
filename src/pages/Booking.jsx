import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

//
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
    const singleDestination = useLoaderData()

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [bookingOrigin,setBookingOrigin] = useState('');
    const [bookingDestination,setBookingDestination] = useState('');

    console.log(singleDestination);
    const { id, description, destination_name } = singleDestination;

    const handleBooking = (event) =>{
        event.preventDefault();
        const from = event.target;
       const bookingOrigin = from.origin.value;
       const bookingDestination = from.destination.value;
    //    const sDate = from.sDate.value;
    //     const eDate = from.eDate.value;
       setBookingOrigin(bookingOrigin)
       setBookingDestination(bookingDestination)
    //    setStartDate(sDate)
    //    setEndDate(eDate)
       
    }
    console.log('booking',bookingOrigin,'dest',bookingDestination,'sdate',startDate,'edate',endDate);
    return (

        <div className='flex h-[88vh] justify-center items-center gap-3 my-container' >

            <div className=' text-white  '>
                <h3 className='text-5xl font-bold'>{destination_name}</h3>
                <p className='mt-3'>{description}</p>
            </div>

            <form onSubmit={handleBooking} className='bg-white w-[470px] h-[350px] p-5 rounded'>

                <label>Origin</label>
                <input className='bg-slate-200 px-5 py-2 rounded-lg block mb-3' 
                type="text" 
                name="origin"
                value='Dhaka'
                 />

                <label className=''>Destination</label>
                <input className='bg-slate-200 px-5 py-2 rounded-lg block ' 
                type="text" 
                name="destination"
                value={destination_name} />

                 <div className='flex mt-3'>
                    <div>
                        <label>Form</label>
                        {/* <DatePicker className='border bg-slate-200 w-5/6 pl-2 py-2 rounded-lg' name='sDate' selected={startDate} ></DatePicker> */}
                        <DatePicker className='border bg-slate-200 w-5/6 pl-2 py-2 rounded-lg' name='sDate' selected={startDate} onChange={date => setStartDate(date)}></DatePicker>
                    </div>

                    <div>
                        <label className=''>To</label>
                        {/* <DatePicker className='border bg-slate-200 w-5/6 pl-2 py-2 rounded-lg' name='eDate' selected={endDate} ></DatePicker> */}
                        <DatePicker className='border bg-slate-200 w-5/6 pl-2 py-2 rounded-lg' name='eDate' selected={endDate} onChange={date => setEndDate(date)}></DatePicker>
                    </div>
                </div> 
                <Link to='/loginLayout/bookings'>
                <input className='w-full py-2 rounded-lg mt-5  bg-[#F9A51A] font-semibold cursor-pointer' type="submit" value="Start booking" />
                </Link>
            </form>

        </div>
    );
};

export default Booking;