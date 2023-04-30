import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


//icons
import { FaArrowRight } from "react-icons/fa";


//swiper slider
import Slider from './Slider';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";


const Home = () => {
    const destinations = useLoaderData()
    // console.log(destinations);
    return (
        <div className='flex items-center h-[88vh]'>
            <div className='grid grid-cols-6'>

                <div className='col-span-2  text-white ml-12 flex flex-col justify-center'>
                    <h3 className='text-5xl font-bold'>Cox'sBazar</h3>
                    <p className='mt-3'>Cox's Bazar is a town on the southeast coast of Bangladesh. It is known for its long sandy beach, which stretches for over 120 km. The town also has a number of tourist attractions, including the Himchori Waterfall, the Inani Beach, and the Cox's Bazar Buddhist Temple.</p>
                    <button className='mt-5 my-btn w-1/3 text-black flex items-center gap-2 font-semibold'>Booking <FaArrowRight /> </button>
                </div>

                <div className='col-span-4 '>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}

                    >
                        {
                            destinations.map(singleDestination => (
                                <SwiperSlide key={singleDestination.id}>
                                    <div className=''>
                                        <Link to={`http://localhost:5000/destination/${singleDestination.id}`}>
                                            <img
                                                className='w-[270px] h-[416px] 
                                        rounded-lg bg-cover bg-center
                                        '
                                                src={singleDestination.d_img}
                                                alt="" />
                                            <h3 className='text-white font-bold text-3xl  mt-[-50px] pl-2'>{singleDestination.destination_name}</h3>

                                        </Link>
                                        <br />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default Home;
