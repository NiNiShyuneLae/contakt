import React, { useState } from "react";
import { MdPersonOutline } from "react-icons/md";

import { useRegisterMutation } from "../features/api/authApi";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import Lottie from 'lottie-react';
import login from '../assets/login.json'

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordComfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [register] = useRegisterMutation();
  const navigate = useNavigate();
  const registerHandler = async (e) => {
    e.preventDefault();
    const user = { name, email, password, password_confirmation };
    const { data, error } = await register(user);
    console.log(error?.data?.errors)
    if (error?.data) {
      setErrors(error?.data?.errors);
    }
    if (data?.success) navigate("/login");
  };
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        {/* <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        /> */}
        <Lottie animationData={login} loop={true}/>
      </div>
      <div className="md:w-1/3 px-4 md:px-0 max-w-sm">
        <form action="" onSubmit={registerHandler}>
          <h1 className="font-bold text-xl text-slate-700">
            LET&apos;S GET STARTED
          </h1>

          <div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-sm mt-4 w-full outline-none px-4 py-2 border  border-gray-300 rounded"
              type="text"
              placeholder="Enter Name"
            />
            <p className="mb-0 text-sm text-red-500">{errors?.name}</p>
          </div>
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-sm mt-4 w-full outline-none px-4 py-2 border  border-gray-300 rounded"
              type="email"
              placeholder="Email Address"
            />
            <p className="mb-0 text-sm text-red-500">{errors?.email}</p>
          </div>
          <div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              placeholder="Password"
            />
            <p className="mb-0 text-sm text-red-500">{errors?.password?.filter(e => !(e.match('confirmation')))}</p>
          </div>
          <div>
            <input
              value={password_confirmation}
              onChange={(e) => setPasswordComfirmation(e.target.value)}
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              placeholder="Password Comfirmation"
            />
            <p className="mb-0 text-sm text-red-500">{errors?.password?.filter(e => (e.match('confirmation')))}</p>
          </div>

          <div className="mt-4  font-semibold text-sm text-slate-500 text-center ">
            Already have an account?
            <Link to={"/login"}>
              <span
                className="text-primary hover:underline hover:underline-offset-4"
                href="#"
              >
                {" "}
                Login Here
              </span>
            </Link>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 w-full  border-2 border-primary hover:text-primary bg-primary hover:bg-transparent px-6 py-2 text-white uppercase rounded text-xs float-right  tracking-wider"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>

        {/* <div className="text-center md:text-left">
          <label className="mr-1">Sign in with</label>
          <button
            type="button"
            className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </button>
          <button
            type="button"
            className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </button>
        </div> */}
        {/* <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
        </div> */}

        {/* <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
        </div> */}
      </div>
    </section>
    //       <section className='flex items-center justify-center  '>
    //           <div className='col-span-1  '>
    //              <img src={photo} alt="" />
    //           </div>
    //           <div className=' '>
    //               <form onSubmit={registerHandler} action="" className=' bg-white p-8 shadow-2xl opacity-80' >
    //                           <h1 className='text-center mb-5 font-bold tracking-wider text-2xl'>GET'S STARTED</h1>
    //                           {/* <div className="flex items-center gap-3  border-b-2 py-2">
    //                               <MdPersonOutline className='text-gray-700 text-xl'/>
    //                                 <input type="text" placeholder='Enter name' className='w-full outline-none' />
    //                           </div> */}
    //                   <div className='mb-4 w-96'>
    //                       <label htmlFor="" className='text-gray-600 '>Name</label>
    //                       <div className="relative mt-2">
    //                         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    //                               {/* <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> */}
    //                               <MdPersonOutline className='text-gray-400 text-xl'/>
    //                           </div>
    //                   <input
    //                   value={name}
    //                                             onChange={(e)=>setName(e.target.value)}
    //                                             type="text" id="email-address-icon" className="bg-white shadow-lg border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Name" />
    //                         </div>
    //                   </div>
    //                    <div className='mb-4 w-96'>
    //                       <label htmlFor="" className='text-gray-600 '>Email</label>
    //                       <div className="relative mt-2">
    //                         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    //                               {/* <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> */}
    //                               <MdPersonOutline className='text-gray-400 text-xl'/>
    //                         </div>
    //                                       <input
    //                                              value={email}
    //                                             onChange={(e)=>setEmail(e.target.value)}
    //                                             type="email" className="bg-white shadow-lg border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" />
    //                         </div>
    //                   </div>
    //                    <div className='mb-4 w-96'>
    //                       <label htmlFor="" className='text-gray-600 '>Password</label>
    //                       <div className="relative mt-2">
    //                         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    //                               {/* <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> */}
    //                               <CiLock className='text-gray-400 text-xl'/>
    //                         </div>
    //                                       <input
    //                                              value={password}
    //                                             onChange={(e)=>setPassword(e.target.value)}
    //                                             type="password" className="bg-white shadow-lg border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" />
    //                         </div>
    //                   </div>
    //                    <div className='mb-5 w-96'>
    //                       <label htmlFor="" className='text-gray-600 '>Password Comfirmation</label>
    //                       <div className="relative mt-2">
    //                         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    //                               {/* <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> */}
    //                               <CiLock className='text-gray-400 text-xl'/>
    //                         </div>
    //                                       <input
    //                                              value={password_confirmation}
    //                                             onChange={(e)=>setPasswordComfirmation(e.target.value)}
    //                                             type="password" className="bg-white shadow-lg border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" />
    //                         </div>
    //                   </div>
    //                   <div className='text-center mb-5'>
    //                                 <span>Already Have An Account?</span>
    //                                 <Link to={'/login'} >
    //                                        <span className='text-primary text-semibold tracking-wide'>Login Here</span>
    //                                 </Link>

    //                   </div>
    //                   <button type='submit' className='bg-primary text-white w-96 py-2 rounded-lg '>Register </button>
    //               </form>
    //           </div>
    //     </section>
  );
};

export default Register;
