"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";

const SignUp = () => {
  const [icon, setIcon] = useState(false)
  const visibility = async (e) => {
    e.preventDefault();
    setIcon(!icon);
  }
  return (
    <div className="container flex flex-col mx-auto bg-white">
      <div className="flex justify-center w-full h-full my-auto lg:justify-normal draggable">
        <div className="flex items-center justify-center w-full lg:p-0 xl:p-4">
          <div className="flex items-center">
            <form className="flex flex-col w-full h-full text-center bg-white">
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
              <input id="name" type="text" placeholder="Full Name..." className="flex items-center w-full px-3 py-4 mr-2 border-2 border-pink-300 focus:border-pink-400 font-medium  mb-7 rounded-2xl" />
              <label htmlFor="email" className="mb-2 text-sm text-start text-grey-900">Email</label>
              <input id="email" type="email" placeholder="mail@loopple.com" className="flex items-center w-full px-3 py-4 mr-2 border-2 border-pink-300 focus:border-pink-400 font-medium  mb-7 rounded-2xl" />
              <label htmlFor="password" className="mb-2 text-sm text-start text-grey-900">Password</label>
              <div className='relative'>
                <input id="password" type={icon ? "text" : "password"} placeholder="Enter a password" className="flex  items-center w-full px-3 py-4 mb-5 mr-2 border-2 border-pink-300 focus:border-pink-400 font-medium  rounded-2xl" />
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

