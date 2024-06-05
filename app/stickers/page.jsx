import React from 'react'
import { fetchData } from '../../utils/Fetch'
import Tshirt from "../../components/Products"

const Page = async () => {
  const product = await fetchData('stickers')
  return (
    (Object.keys(product).length!=0) ? 
    <Tshirt products = {product} type="Stickers" />
    : <div className='text-md text-gray-500 text-center content-center min-h-[50vh] p-5'>
      Sorry all the Stickers are currently Sold Out! We will be stocking it up soon!
      <br />
      Stay Tuned to be notified when it is available!
    </div>
  )
}

export default Page