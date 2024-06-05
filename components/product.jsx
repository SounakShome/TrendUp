"use client"
import Image from 'next/image'
import React, { useState, useContext } from 'react'
import { TbShoppingCartPlus } from "react-icons/tb";
import CartContext from "@/context/CartContext"
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Product({ slug, variant, product }) {

    const [pincode, setPincode] = useState("");
    const [service, setService] = useState();
    const [size, setSize] = useState("");
    const [colour, setColour] = useState("");
    const [price, setPrice] = useState("")
    const { cart, subTotal, addToCart, removeFromCart, clearCart, buyNow } = useContext(CartContext);

    console.log(variant["blue"]["M"]["price"]);

    const checkPincode = async () => {
        const res = await fetch("http://localhost:3000/api/pincode").then((a) => a.json())
        const pins = res.pincodes;
        if (pins.includes(parseInt(pincode))) {
            setService(true);
            toast.success('Pincode is serviceable!', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide
                });
            
        } else {
            setService(false);
            toast.error('Pincode not serviceable!', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide
                });
        }
    }

    const onChangePin = (e) => {
        setPincode(e.target.value);
    }

    const refreshVariant = (c, s, p) => {
        setColour(c);
        setSize(s);
        setPrice(p);
    }

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <ToastContainer />
            <div className="container px-5 py-10 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 lg:h-auto h-64 object-cover object-top rounded">
                        <Image width={0} height={0} style={{ width: '100%', height: '100%' }} sizes='100vw' alt="ecommerce" className="px-20 max-h-[70vh] h-[30vh] block md:mx-0 m-auto" src={product.img} />
                    </div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}{size && colour && ` (${size}/ ${colour})`}</h1>
                        <hr className='my-4 border border-gray-400' />
                        {/* <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div> */}
                        <p className="leading-relaxed">{product.desc}</p>
                        <form>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className='w-full'>
                                    Colours:
                                    {Object.keys(variant).map((colour) => {
                                        return (
                                            <div key={colour} className='w-full min-h-max my-2 py-2 cursor-pointer px-5 border-2 border-gray-400 rounded-md'>
                                                <div className='inline-block p-1 m-1'>
                                                    {colour}
                                                </div>
                                                <div className='flex p-1 mr-5 m-1 float-right'>
                                                    Sizes:
                                                    <div className="flex mx-3 gap-2">
                                                        {Object.keys(variant[colour]).map((size) => {
                                                            return (
                                                                <div key={size} className="form-radio">
                                                                    <input type="radio" name="type" value={size} onClick={() => {refreshVariant(colour, size, variant[colour][size]["price"]) }} className="p-2" required />
                                                                    <label className='p-1' htmlFor={size}>{size}</label>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">{price ? `₹${price}` : `Select a colour and size`}</span>
                                <button onClick={(e) => { e.preventDefault(); if (size || colour) { addToCart(variant[colour][size]["slug"], 1, variant[colour][size]["price"], variant[colour][size]["title"], size, colour) } else { alert("Size or Colour not selected") } }} className="flex ml-auto text-white bg-pink-500 border-0 py-2 lg:px-4 px-2 focus:outline-none hover:bg-pink-600 rounded"><TbShoppingCartPlus className='mt-1 mr-2' />Add to Cart</button>
                                <button className="flex ml-2 text-white bg-pink-500 border-0 py-2 lg:px-4 px-2 focus:outline-none hover:bg-pink-600 rounded" onClick={(e) => { e.preventDefault(); if (size || colour) { buyNow(variant[colour][size]["slug"], 1, variant[colour][size]["price"], variant[colour][size]["title"], size, colour) } else { alert("Size and Colour not selected") } }} >Buy Now</button>
                                {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button> */}
                            </div>
                        </form>
                        <div className='mt-6 flex space-x-3 text-sm'>
                            <input type="number" name="pin" id="pin" onChange={onChangePin} className='border border-black px-2 rounded' placeholder='Enter your Pincode' />
                            <button type="submit" onClick={(e) =>{e.preventDefault();checkPincode()}} className='ml-auto text-white bg-pink-500 border-0 py-2 px-6 hover:bg-pink-600 rounded'>Check</button>
                        </div>
                        {(!service && service != null && pincode.length == 6) && <div className="text-red-700 text-sm mt-3">
                            Sorry! We do not deliver to this pincode yet.
                        </div>}
                        {(service && service != null) && <div className="text-green-700 text-sm mt-3">
                            Yay! This pincode is serviceable.
                        </div>}
                        {(!service && service != null && pincode.length != 6) && <div className="text-red-700 text-sm mt-3">
                            Please enter a valid pincode.
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}