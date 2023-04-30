import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa"; 
import { useFormik } from 'formik';
import registerSchema from '../schema/YupValidation';
import { AuthContext } from '../provider/AuthProvider';


const initialValue = {
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    confirm_password:''
}

const Registration = () => {

    const {registerUser} = useContext(AuthContext);

    const [registerError, setRegisterError]= useState();

    //formik
    const {values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({
        initialValues:initialValue,
        validationSchema: registerSchema,
        onSubmit: (values,action)=>{
            const first_name = values.first_name;
            const last_name = values.last_name;
            const email = values.email;
            const password = values.password;
            const confirm_password = values.confirm_password;
            console.log(first_name,last_name,email,password,confirm_password);

            setRegisterError('')

            //create a user in firebase
            registerUser(email,password)
            .then(result =>{
                console.log('login successful',result.user);
            })
            .catch(error=>{
                console.log('error: ',error.message);
                setRegisterError(error.message)
            })

            action.resetForm();
        }
    })
    return (
        <div className='mt-5 h-[88vh]  flex justify-center'>
            <div className=' '>
                <form onSubmit={handleSubmit} className='border w-[570px] px-8 rounded'>
                    <h3 className='text-2xl font-semibold mt-5'>Create an account</h3>
                    <input className='border-b-2  mt-5  w-full' 
                    type="text" 
                    name="first_name" 
                    value={values.first_name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder='First Name' 
                    />
                    {
                        errors.first_name && touched.first_name ?
                        <p className="text-red-700 mt-2">{errors.first_name}</p>
                        :
                        null
                    }
                    <br />
                    <input className='border-b-2  mt-5  w-full' 
                    type="text" 
                    name="last_name" 
                    placeholder='Last Name'
                    value={values.last_name}
                    onBlur={handleBlur}
                    onChange={handleChange} 
                    />
                     {
                        errors.last_name && touched.last_name ?
                        <p className="text-red-700 mt-2">{errors.last_name}</p>
                        :
                        null
                    }
                    <br />
                    <input className='border-b-2  mt-5  w-full' 
                    type="email" 
                    name="email" 
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder='Username or Email' 
                    />
                     {
                        errors.email && touched.email ?
                        <p className="text-red-700 mt-2">{errors.email}</p>
                        :
                        null
                    }
                    <br />
                    <input className='border-b-2  mt-5  w-full' 
                    type="password" 
                    name="password" 
                    placeholder='Password' 
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    />
                     {
                        errors.password && touched.password ?
                        <p className="text-red-700 mt-2">{errors.password}</p>
                        :
                        null
                    }
                    <br />
                    <input className='border-b-2  mt-5 w-full' 
                    type="password" 
                    name="confirm_password" 
                    value={values.confirm_password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder='Confirm Password' 
                    />
                     {
                        errors.confirm_password && touched.confirm_password ?
                        <p className="text-red-700 mt-2">{errors.confirm_password}</p>
                        :
                        null
                    }
                    <br />
                   
                    <input className='mt-4 bg-[#F9A51A] w-full  rounded-lg py-2 mb-3 cursor-pointer' type="submit" value="Create an account" />
                    {
                        registerError && <p className='text-red-700 mt-3 text-center'>{registerError}</p>
                    }
                    <br />
                    <p className='text-center mb-3'><small>Already have an account ? <Link className='text-[#F9A51A]' to='/loginLayout/login'>Login</Link></small></p>
                </form>

              <div className='px-10'>
              <div className='flex justify-center items-center gap-3 mt-3'>
                    <div className='h-1 w-full bg-slate-200'></div>
                    <p>or</p>
                    <div className='h-1 bg-slate-200 w-full'></div>
                </div>
                <button className='border rounded-2xl w-full flex h-[51px] items-center text-xl'>
                    <FaGoogle className='h-[37px] w-[37px] ml-2 mr-24'/>
                     Continue with Google
                     </button>
              </div>





            </div>
        </div>
    );
};

export default Registration;