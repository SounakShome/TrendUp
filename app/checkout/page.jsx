"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import CartContext from "@/context/CartContext"

const Checkout = () => {

  const { cart, subTotal, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className='py-4 sm:mx-auto my-auto max-w-screen-xl'>
      <h1 className='font-base my-8 text-center text-3xl'>Checkout</h1>
      <div className="mt-4 flex flex-col rounded-lg p-4 shadow-lg">
        <h2 className="font-bold text-lg">1. Shipping Address Details</h2>

        <div className="mt-4">
          <label className="" htmlFor="name">Name</label>
          <input placeholder="Your name" className="w-full  rounded-md border border-gray-700  px-2 py-1" type="text" />
        </div>

        <div className="mt-4">
          <label className="" htmlFor="address">Address</label>
          <textarea placeholder="Your address" className="w-full  rounded-md border border-gray-700  px-2 py-1" id="address"></textarea>
        </div>

        <div className="mt-4 flex flex-row space-x-2">
          <div className="flex-1">
            <label className="" htmlFor="city">City</label>
            <input placeholder="Your city" className="w-full  rounded-md border border-gray-700  px-2 py-1" id="city" type="text" />
          </div>

          <div className="flex-1">
            <label className="" htmlFor="state">State</label>
            <input placeholder="Your state" className="w-full  rounded-md border border-gray-700  px-2 py-1" id="state" type="text" />
          </div>
        </div>

        <div className="mt-4 flex flex-row space-x-2">
          <div className="flex-1">
            <label className="" htmlFor="zip">ZIP</label>
            <input placeholder="Your ZIP code" className="w-full  rounded-md border border-gray-700  px-2 py-1" id="zip" type="text" />
          </div>

          <div className="flex flex-row space-x-2">
            <div className="flex-1">
              <label className="" htmlFor="country">Country</label>
              <select className="w-full cursor-pointer rounded-md border border-gray-700  px-2 py-1" id="country">
                <option value="">Select a country</option>

                <optgroup label="Africa">
                  <option value="AF">Afghanistan</option>
                  <option value="DZ">Algeria</option>
                  <option value="AO">Angola</option>
                  ...
                  <option value="ZW">Zimbabwe</option>
                </optgroup>

                <optgroup label="Asia">
                  <option value="AM">Armenia</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BH">Bahrain</option>
                  ...
                  <option value="YE">Yemen</option>
                </optgroup>

                <optgroup label="South America">
                  <option value="AR">Argentina</option>
                  <option value="BO">Bolivia</option>
                  <option value="BR">Brazil</option>
                  ...
                  <option value="VE">Venezuela</option>
                </optgroup>

                ...
              </select>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-white text-black rounded-md px-4 py-1 hover:bg-blue-500 hover: transition-all duration-200" type="submit">Submit</button>
        </div>
      </div>
      <div className="mt-4 flex flex-col rounded-lg p-4 shadow-lg">
        <h2 className='font-bold text-lg'>2. Review Cart Items & Pay</h2>
        <div className=' p-10'>
          <ol className='list-decimal'>
            {Object.keys(cart).length === 0 && <div className='my-5 text-lg font-medium'>The cart is currently empty. Please add items to proceed to checkout.</div>}
            {Object.keys(cart).map((item) => {
              return (
                <li key={cart[item]} className='p-3'>
                  <div className="item flex my-3">
                    <div className='font-semibold'>{cart[item].name}</div>
                    <div className='w-1/3 font-semibold flex items-center justify-center text-xl'><AiOutlineMinusCircle onClick={() => { removeFromCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant) }} className='text-pink-500 cursor-pointer text-2xl' /> <span className='mx-3'>{cart[item].qty}</span> <AiOutlinePlusCircle onClick={() => { addToCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant) }} className='text-pink-500 cursor-pointer text-2xl' /></div>
                  </div>
                </li>
              )
            })}
          </ol>
          {Object.keys(cart).length != 0 && <div className='font-medium text-xl'>Subtotal: ₹{subTotal}</div>}
        </div>
        {Object.keys(cart).length != 0 && <Link href="#">
          <button className="my-3 text-sm flex mx-auto text-white bg-pink-500 border-0 py-2 px-6 hover:bg-pink-600 rounded sm:text-lg">Pay ₹{subTotal}</button>
        </Link>}
      </div>
    </div>
  )
}

export default Checkout