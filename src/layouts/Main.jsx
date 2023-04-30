import React from 'react';
import NavBar from '../pages/shared/NavBar';
import { Outlet } from 'react-router-dom';


const Main = () => {
    
    return ( 
      
         <div className={`w-full h-screen bg-[url('https://i.ibb.co/5xch1cV/banner.png')] bg-cover bg-center`}> 
          <div className='w-full h-full backdrop-brightness-50 '>
          <NavBar></NavBar>
            <Outlet></Outlet>
          </div>
            
        </div>
    );
};

export default Main;