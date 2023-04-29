import React from 'react';
import logo from '../../assets/images/icons/logo.png'
import serachIcon from '../../assets/images/icons/search_icon.png'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className='my-container bg-slate-600 flex items-center justify-between px-3'>
            <img src={logo} alt="" />
            <input className='w-[370px] h-[44px] rounded-lg pl-3'
            value={`Search your Destination...`} 
            type="text" 
            name="" 
            id="" 
            />
            <Link className='text-white'>News</Link>
            <Link className='text-white'>Destination</Link>
            <Link className='text-white'>Blog</Link>
            <Link className='text-white'>Contact</Link>
            <Link className='my-btn' to='/login'>Login</Link>
        </nav>
    );
};

export default NavBar;