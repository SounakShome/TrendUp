"use client"
import React, { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import Image from 'next/image'
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContext from "@/context/CartContext"

export default function Login() {
  const router = useRouter();
  const [icon, setIcon] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setUser } = useContext(CartContext);

  const visibility = async (e) => {
    e.preventDefault();
    setIcon(!icon);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email: email, password: password }
    let res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    let response = await res.json();
    if (response.success) {
      localStorage.setItem("token", response.token)
      setUser({value: response.token})
      toast.success('You are successfully logged in!', {
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
      setTimeout(() => {
        router.push("/")
      }, 1000)
    } else {
      toast.error(response.error, {
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
    setEmail("")
    setPassword("")
  }
  const handleChange = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value)
    }
    if (e.target.id === "password") {
      setPassword(e.target.value)
    }
  }

  return (
    <div className="container flex flex-col mx-auto bg-white">
      <ToastContainer />
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 mx-8 md:mx-0 sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex flex-col items-center space-x-5 justify-center">
              <h1 className='my-3 text-3xl font-normal text-dark-grey-900'>Log in</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-5">
                <label className="font-semibold text-sm text-gray-600 pb-1 block" htmlFor="login">E-mail</label>
                <input className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder='Enter your email' onChange={handleChange} value={email} type="text" id="email" required />
                <label className="font-semibold text-sm text-gray-600 pb-1 block" htmlFor="password">Password</label>
                <div className='relative'>
                  <input value={password} onChange={handleChange} id="password" type={icon ? "text" : "password"} placeholder="Enter a password" className="flex  items-center border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                  <div className="absolute top-2 text-xl right-0 pr-3 flex items-center text-pink-500">
                    <button onClick={visibility}>{icon ? <RiEyeLine /> : <RiEyeCloseLine />}</button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row text-right mb-4">
                <input type="checkbox" name="check" id="check" className="mr-2 text-xs cursor-pointer" />Keep me logged in
                <Link className="text-xs ml-auto font-display font-semibold cursor-pointer" href="#" >
                  Forgot Password?
                </Link>
              </div>
              <div className="flex justify-center w-full items-center">
                <div>
                  <button className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200  w-full text-center text-base font-semibold shadow-md rounded-lg">
                    <FcGoogle className='md:h-6 md:w-6 h-10 w-10' />
                    <span className="ml-2 text-sm md:text-base">Sign in with Google</span>
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <button className="py-2 px-4 bg-pink-500 hover:bg-pink-600 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" type="submit">
                  Log in
                </button>
              </div>
            </form>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              or
              <Link className="text-lg text-pink-500 hover:text-pink-600" href="/signup">
                <span className=''> Sign Up </span></Link>
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}