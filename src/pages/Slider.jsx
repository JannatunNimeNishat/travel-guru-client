import React from 'react';


const Slider = ({ destination }) => {
    console.log('from slider');
    console.log(destination);
    const { d_img, description, destination_name, id } = destination;
    return (
        <div className='m-8 '>
            <img className='w-[270px] h-[416px] rounded-lg' src={d_img} alt="" />
            <h3 className='text-white font-bold text-3xl  my-[-40px]'>{destination_name}</h3>
            <br />
        </div>
    );
};

export default Slider;