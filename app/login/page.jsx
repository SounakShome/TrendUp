import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="container flex flex-col mx-auto bg-white">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="relative px-4 py-10 mx-8 md:mx-0 sm:p-10"
        >
          <div className="max-w-md mx-auto">
            <div className="flex flex-col items-center space-x-5 justify-center">
              <Image src="/largelogo.png" alt='logo' width={300} height={300}></Image>
              <h1 className='my-3 text-3xl font-normal text-dark-grey-900'>Log in</h1>
            </div>
            <div className="mt-5">
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="login"
              >E-mail</label
              >
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="text"
                id="login"
              />
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="password"
              >Password</label
              >
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="password"
                id="password"
              />
            </div>
            <div className="flex flex-row text-right mb-4">
              <input type="checkbox" name="check" id="check" className="mr-2 text-xs cursor-pointer" />Keep me logged in
              <Link
                className="text-xs ml-auto font-display font-semibold cursor-pointer"
                href="#"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="flex justify-center w-full items-center">
              <div>
                <button
                  className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200  w-full text-center text-base font-semibold shadow-md rounded-lg"
                >
                  <FcGoogle className='md:h-6 md:w-6 h-10 w-10' />
                  <span className="ml-2 text-sm md:text-base">Sign in with Google</span>
                </button>

              </div>
            </div>
            <div className="mt-5">
              <button
                className="py-2 px-4 bg-pink-500 hover:bg-pink-600 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
              >
                Log in
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <Link
                className="text-lg"
                href="/signup"
              >or <span className='text-pink-500 hover:text-pink-600'>Sign Up</span></Link>
              <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login