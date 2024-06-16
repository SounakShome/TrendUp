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

export default function Navbar() {

    const ref = useRef();
    const { cart, subTotal, user, addToCart, removeFromCart, clearCart, logout, } = useContext(CartContext);

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
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href={'/about'}>About</Link></li>
                            <li>
                                Categories
                                <ul className="p-2">
                                    <li><Link href={'/hoodies'}>Hoodies</Link></li>
                                    <li><Link href={'/hoodies'}>Mugs</Link></li>
                                    <li><Link href={'/hoodies'}>T-Shirts</Link></li>
                                    <li><Link href={'/hoodies'}>Stickers</Link></li>
                                </ul>
                            </li>
                            <li><Link href={'/contact'}>Conatct</Link></li>
                        </ul>
                    </div>
                    <Link href={"/"}> <Image src='/largelogo.png' alt='logo' width={100} height={0} /> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className='align-middle' href={'/about'}>About</Link></li>
                        <li>
                            <details>
                                <summary>Categories</summary>
                                <ul className="p-2">
                                    <li><Link href={'/hoodies'}>Hoodies</Link></li>
                                    <li><Link href={'/hoodies'}>Mugs</Link></li>
                                    <li><Link href={'/hoodies'}>T-Shirts</Link></li>
                                    <li><Link href={'/hoodies'}>Stickers</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link href={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost hover:text-pink-500 btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{Object.keys(cart).length}</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-5 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{Object.keys(cart).length} Item(s)</span>
                                <span className="text-pink-400">Subtotal: {`₹${subTotal}`}</span>
                                <div className="card-actions">
                                    <button onClick={toggleCart} className="btn hover:text-pink-500 btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        {!user.value && <Link href={"/login"}>
                            <button className="inline-flex items-center p-1 focus:outline-none text-xl hover:text-pink-500 rounded mt-4 md:mt-0 right-2">
                                Login
                            </button>
                        </Link>}
                        {user.value && <div><div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <VscAccount className='text-3xl' />
                        </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li className='m-1'>
                                    <Link href={'/myaccount'} className="justify-between">
                                        Profile
                                    </Link>
                                </li>
                                <li className='m-1'>Settings</li>
                                <li className='m-1'><button onClick={logout}>Logout</button></li>
                            </ul></div>}
                    </div>
                </div>
            </div>
            <div ref={ref} className='z-10 overflow-y-scroll fixed top-0 right-0 bg-pink-100 p-10 transform transition-transform translate-x-full h-full'>
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
                                        <div className='text-sm text-gray-500'>Colour: {cart[item].variant} <br /> Size: {cart[item].size} <br /> Price: {cart[item].price} </div>
                                    </div>
                                    <div className='w-1/3 font-semibold flex items-center justify-center text-xl'><AiOutlineMinusCircle onClick={() => { removeFromCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant) }} className='text-pink-500 cursor-pointer text-2xl' /> <span className='mx-3'>{cart[item].qty}</span> <AiOutlinePlusCircle onClick={() => { addToCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant) }} className='text-pink-500 cursor-pointer text-2xl' /></div>
                                </div>
                            </li>
                        )
                    })}
                </ol>
                {Object.keys(cart).length != 0 && <div className='font-bold text-xl'>Subtotal: {`₹${subTotal}`}</div>}
                {Object.keys(cart).length != 0 && <div className="mt-12 mb-3 flex space-x-5">
                    <Link href="/checkout">
                        <button className="text-sm flex mx-auto text-white bg-pink-500 border-0 py-2 px-6 hover:bg-pink-600 rounded sm:text-lg"><IoBagCheck className='mt-1 mr-2' />Checkout</button>
                    </Link>
                    <button onClick={clearCart} className="text-sm flex mx-auto text-white bg-pink-500 border-0 py-2 px-6 hover:bg-pink-600 rounded sm:text-lg"><TbShoppingCartX className='mt-1 mr-2' />Clear Cart</button>
                </div>}
            </div>
        </div>
    )
}