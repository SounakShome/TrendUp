import React from 'react'
import Product from "../../../components/product"
import { fetchProduct } from '@/utils/Fetch';


const Slug = async(params) => {
  const slug = params.params.slug;
  const res = await fetchProduct(slug);
  return (
    <Product slug = {slug} variant={res.variant} product={res.data} />
  )
}

export default Slug