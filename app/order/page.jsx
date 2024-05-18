"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import CartContext from "@/context/CartContext"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Link from 'next/link';

const Order = () => {

  const { cart, subTotal } = useContext(CartContext);

  return (
    <section className="text-gray-600 body-font overflow-hidden text-center">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">CODESWEAR.COM</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #89777</h1>
            <table className='w-full my-6'>
              <thead>
                <tr className='border-b-2 border-gray-200'>
                  <th scope="col" className='w-1/2'>Item Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Cost</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(cart).map((item) => {
                  return (
                    <tr key={cart[item]} className='border-b-2 border-gray-200 text-center'>
                      <td scope="row">{cart[item].name}</td>
                      <td>{cart[item].qty}</td>
                      <td>{cart[item].price}</td>
                      <td>{cart[item].qty * cart[item].price}</td>
                    </tr>
                  )
                })}
              </tbody>
              <tfoot>
                <tr className='border-b-2 border-gray-200'>
                  <th scope="row" colSpan="3">Subtotal</th>
                  <td>{subTotal}</td>
                </tr>
              </tfoot>
            </table>

            <div className="flex">
              <Link href={"#"}>
                <button className="flex my-4 mr-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>
              </Link>
            </div>
          </div>
          <Image width={0} height={0} style={{ width: 'auto', height: 'auto' }} sizes='100vw' alt="ecommerce" className="px-20 max-h-[70vh] h-[30vh] block md:mx-0 m-auto" src="https://m.media-amazon.com/images/I/713n+TxyfCL._SY879_.jpg" />
        </div>
      </div>
    </section>
  )
}

export default Order