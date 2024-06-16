"use client"
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { LiaFacebookF } from 'react-icons/lia'

export default function Page() {
    return (
        <div className="flex flex-col p-5 justify-center align-middle items-center">
            <h1 className='p-5 m-3 text-xl font-semibold'>Register</h1>
            <div className="flex flex-col w-full p-5 justify-center align-middle items-center min-h-[25rem] lg:flex-row">
                <div className="grid flex-grow flex-row max-w-[45%] place-items-center">
                    <input className='m-3 border-b-2 border-pink-500' type="text" id="name" placeholder="Full Name..." required />
                    <input className='m-3 border-b-2 border-pink-500' type="email" id="email" placeholder="Email..." required />
                    <input className='m-3 border-b-2 border-pink-500' type="password" id="password" placeholder="Password..." required />
                    <input className='m-3 border-b-2 border-pink-500' type="password" id="password" placeholder="Confirm Password..." required />
                    <button className="m-2 btn btn-ghost">SignUp</button>
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="grid flex-grow flex-row max-w-[45%] place-items-center">
                    <div>
                        <button className="flex m-2 items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 text-center text-base font-semibold shadow-md rounded-lg">
                            <FcGoogle className='md:h-6 md:w-6 h-10 w-10' />
                            <span className="ml-2 text-sm md:text-base">Sign in with Google</span>
                        </button>
                    </div>
                    <div>
                        <button className="flex m-2 items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 text-center text-base font-semibold shadow-md rounded-lg">
                            <LiaFacebookF className='md:h-6 md:w-6 h-10 w-10' />
                            <span className="ml-2 text-sm md:text-base">Sign in with Facebook</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}