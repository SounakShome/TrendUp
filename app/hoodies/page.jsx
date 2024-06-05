import React from 'react'
import { fetchData } from '../../utils/Fetch'
import Hoodie from "../../components/Products"

const Page = async () => {
  const product = await fetchData('hoodies')
  return (
    (Object.keys(product).length!=0) ? 
    <Hoodie products = {product} type="Hoodies" />
    : <div className='text-md text-gray-500 text-center content-center min-h-[50vh] p-5'>
      Sorry all the Hoddies are currently Sold Out! We will be stocking it up soon!
      <br />
      Stay Tuned to be notified when it is available!
    </div>
  )
}

export default Page