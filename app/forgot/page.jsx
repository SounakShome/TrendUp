import React from 'react'
import Link from 'next/link'

const Forgot = () => {
  return (
    <div className="container flex flex-col min-h-[90vh] mx-auto bg-white">
      <div className="flex justify-center w-full h-full my-auto lg:justify-normal draggable">
        <div className="flex items-center justify-center w-full lg:p-0 xl:p-8">
          <div className="flex items-center">
            <form className="flex flex-col w-full h-full text-center bg-white">
              <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">Forgot Password</h3>              
              <label htmlFor="email" className="mb-2 text-sm text-start text-grey-900">Email</label>
              <input id="email" type="email" placeholder="mail@loopple.com" className="flex items-center w-full px-5 py-4 mr-2 border-2 border-pink-300 font-medium  mb-4 rounded-2xl" />
              <button className="w-2/3 md:w-96 mx-auto px-6 py-4 text-white bg-pink-500 mb-2 font-semibold hover:bg-pink-600 rounded-2xl">Continue</button>
              <p className="text-sm leading-relaxed text-grey-900">Remember your password? Try <Link href="/login" className="font-bold text-pink-500 hover:text-pink-600">Loging in</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forgot