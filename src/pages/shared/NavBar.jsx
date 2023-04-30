import React from 'react';
import logo from '../../assets/images/icons/logo.png'
import serachIcon from '../../assets/images/icons/search_icon.png'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className='my-container  pt-3 flex items-center justify-between px-3'>
            <Link to='/'><img className='text-black bg-black' src={logo} alt="" /></Link>
            <input className='w-[370px] h-[44px] rounded-lg pl-3'
                value={`Search your Destination...`}
                type="text"
                name=""
                id=""
            />
            <Link >News</Link>
            <Link >Destination</Link>
            <Link >Blog</Link>
            <Link >Contact</Link>

            <Link className='my-btn' to='loginLayout/login'>Login</Link>
        </nav>
    );
};

export default NavBar;

{/* <Link  className='text-white'>News</Link>
            <Link className='text-white'>Destination</Link>
            <Link className='text-white'>Blog</Link>
            <Link className='text-white'>Contact</Link> */}
{/* <Link className='my-btn' to='loginLayout/login'>Login</Link> */ }