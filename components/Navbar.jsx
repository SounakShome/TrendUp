"use client"
import React, { useRef, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CiShoppingCart } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { IoBagCheck } from "react-icons/io5";
import { TbShoppingCartX } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
import CartContext from "@/context/CartContext"

const Navbar = () => {

  const ref = useRef();
  const { cart, subTotal, addToCart, removeFromCart, clearCart, } = useContext(CartContext);

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  }

  return (
    <header className="body-font sticky top-0 z-10 bg-white">
      <div className="container mx-auto border-b-2 shadow flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src='/largelogo.png' alt='logo' width={100} height={0} />
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l text-gray-600 md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href={"/hoodies"} className="mr-5 hover:text-gray-900">Hoodies</Link>
          <Link href={"/mugs"} className="mr-5 hover:text-gray-900">Mugs</Link>
          <Link href={"/tshirts"} className="mr-5 hover:text-gray-900">T-Shirts</Link>
          <Link href={"/stickers"} className="mr-5 hover:text-gray-900">Stickers</Link>
        </nav>
        <div className="flex fixed md:top-5 top-1 right-2 md:space-x-4 space-x-0 md:text-3xl text-2xl">
          <Link href={"/login"}>
            <button className="inline-flex items-center p-1 focus:outline-none hover:text-pink-500 rounded mt-4 md:mt-0 right-2">
              <VscAccount />
            </button>
          </Link>
          <button onClick={toggleCart} className="inline-flex items-center p-1 focus:outline-none hover:text-pink-500 rounded mt-4 md:mt-0 right-2">
            <CiShoppingCart />
          </button>
        </div>
        <div ref={ref} className='z-10 overflow-y-auto fixed top-0 right-0 bg-pink-100 p-10 transform transition-transform translate-x-full h-full'>
          <h2 className="title-font font-bold text-xl">Shopping Cart</h2>
          <span className="absolute top-5 right-2 cursor-pointer" onClick={toggleCart}><IoIosCloseCircleOutline className='text-3xl text-pink-500' /></span>
          <ol className='list-decimal'>
            {Object.keys(cart).length === 0 && <div className='my-5'>Cart is Empty</div>}
            {Object.keys(cart).map((item) => {
              return (
                <li key={cart[item]} className='p-3'>
                  <div className="item flex my-3">
                    <div className='w-2/3 font-semibold'>
                        {cart[item].name}
                        <br />
                        <div className='text-sm text-gray-500'>Colour: {cart[item].variant} <br /> Size: {cart[item].size}</div>
                    </div>
                    <div className='w-1/3 font-semibold flex items-center justify-center text-xl'><AiOutlineMinusCircle onClick={() => { removeFromCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant) }} className='text-pink-500 cursor-pointer text-2xl' /> <span className='mx-3'>{cart[item].qty}</span> <AiOutlinePlusCircle onClick={() => { addToCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant) }} className='text-pink-500 cursor-pointer text-2xl' /></div>
                  </div>
                </li>
              )
            })}
          </ol>
          {Object.keys(cart).length != 0 && <div className='font-bold text-xl'>Subtotal: {subTotal}</div>}
          {Object.keys(cart).length != 0 && <div className="mt-12 mb-3 flex space-x-5">
            <Link href="/checkout">
              <button className="text-sm flex mx-auto text-white bg-pink-500 border-0 py-2 px-6 hover:bg-pink-600 rounded sm:text-lg"><IoBagCheck className='mt-1 mr-2' />Checkout</button>
            </Link>
            <button onClick={clearCart} className="text-sm flex mx-auto text-white bg-pink-500 border-0 py-2 px-6 hover:bg-pink-600 rounded sm:text-lg"><TbShoppingCartX className='mt-1 mr-2' />Clear Cart</button>
          </div>}
        </div>
      </div>
    </header>
  )
}

export default Navbar