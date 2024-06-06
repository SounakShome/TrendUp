"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [icon, setIcon] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const visibility = async (e) => {
    e.preventDefault();
    setIcon(!icon);
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const data = {name: name, email: email, password: password}
    let res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    let response = await res.json();
    console.log(response)
    if (response.success) {
      toast.success('User Account Created!', {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
        });
    } else {
      toast.error('Something went wrong! Try again later!', {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
        });
    }
    setName("")
    setEmail("")
    setPassword("")
  }
  const handleChange = (e) =>{
    if(e.target.id === "name"){
      setName(e.target.value)
    }
    if(e.target.id === "email"){
      setEmail(e.target.value)
    }
    if(e.target.id === "password"){
      setPassword(e.target.value)
    }
  }

  return (
    <div className="container flex flex-col mx-auto bg-white">
      <ToastContainer />
      <div className="flex justify-center w-full h-full my-auto lg:justify-normal draggable">
        <div className="flex items-center justify-center w-full lg:p-0 xl:p-4">
          <div className="flex items-center">
            <form onSubmit={handleSubmit} className="flex flex-col w-full h-full text-center bg-white">
              <h3 className="mb-1 text-4xl font-extrabold text-dark-grey-900">Sign Up</h3>
              <p className="mb-2 text-pink-500">Enter your email and password</p>
              <Link href={"#"} className="flex items-center justify-center md:w-full w-2/3 px-2 md:text-base text-sm mx-auto py-4 text-pink-500 hover:text-pink-600 mb-2 font-medium rounded-2xl bg-gray-200 focus:ring-2 focus:ring-pink-400">
                <FcGoogle className='mx-1 text-3xl' />
                Sign in with Google
              </Link>
              <div className="flex items-center mb-1">
                <hr className="h-0 border-b border-solid border-grey-500 grow" />
                <p className="mx-4 text-pink-500">or</p>
                <hr className="h-0 border-b border-solid border-grey-500 grow" />
              </div>
              <label htmlFor="name" className="mb-2 text-sm text-start text-grey-900">Name</label>
              <input value={name} onChange={handleChange} id="name" type="text" placeholder="Full Name..." className="flex items-center w-full px-3 py-4 mr-2 border-2 border-pink-300 focus:border-pink-400 font-medium  mb-7 rounded-2xl" />
              <label htmlFor="email" className="mb-2 text-sm text-start text-grey-900">Email</label>
              <input value={email} onChange={handleChange} id="email" type="email" placeholder="mail@loopple.com" className="flex items-center w-full px-3 py-4 mr-2 border-2 border-pink-300 focus:border-pink-400 font-medium  mb-7 rounded-2xl" />
              <label htmlFor="password" className="mb-2 text-sm text-start text-grey-900">Password</label>
              <div className='relative'>
                <input value={password} onChange={handleChange} id="password" type={icon ? "text" : "password"} placeholder="Enter a password" className="flex  items-center w-full px-3 py-4 mb-5 mr-2 border-2 border-pink-300 focus:border-pink-400 font-medium  rounded-2xl" />
                <div className="absolute top-5 text-xl right-0 pr-3 flex items-center text-pink-500">
                  <button onClick={visibility}>{icon ? <RiEyeLine /> : <RiEyeCloseLine />}</button>
                </div>
              </div>
              <button className="w-2/3 md:w-96 mx-auto px-6 py-4 text-white bg-pink-500 mb-2 font-semibold hover:bg-pink-600 rounded-2xl">Sign Up</button>
              <p className="text-sm leading-relaxed text-grey-900">Already have an account? <Link href="/login" className="font-bold text-pink-500 hover:text-pink-600">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp

