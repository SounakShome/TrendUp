import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { fetchData } from '../../utils/Fetch'
import Tshirt from "../../components/tshirt"

const Page = async () => {
  const product = await fetchData('tshirt')
  return (
    <Tshirt products = {product} />
  )
}

export default Page