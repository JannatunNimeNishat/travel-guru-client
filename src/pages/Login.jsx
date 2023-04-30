import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='mt-5 h-[88vh]  flex justify-center'>
            <div className=' '>
                <form className='border w-[570px] px-8 rounded'>
                    <h3 className='text-2xl font-semibold mt-5'>Login</h3>
                    <input className='border-b-2  mt-5  w-full' type="email" name="first_name" placeholder='Username or Email' />
                    <br />
                    <input className='border-b-2  mt-5  w-full' type="password" name="password" placeholder='Password' />
                    <br />

                    <input className='mt-4 bg-[#F9A51A] w-full  rounded-lg py-2 mb-3 cursor-pointer' type="submit" value="Login" />
                    <br />
                    <p className='text-center mb-3'><small>Don't have an account ?<Link className='text-[#F9A51A]' to='/loginLayout/register'> Register</Link></small></p>
                </form>
                <div className='px-10'>
                    <div className='flex justify-center items-center gap-3 mt-3'>
                        <div className='h-1 w-full bg-slate-200'></div>
                        <p>or</p>
                        <div className='h-1 bg-slate-200 w-full'></div>
                    </div>
                    <button className='border rounded-2xl w-full flex h-[51px] items-center text-xl'>
                        <FaGoogle className='h-[37px] w-[37px] ml-2 mr-24' />
                        Continue with Google
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Login;