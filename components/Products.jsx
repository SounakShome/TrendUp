import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Products({ products, type }) {
    let colours = [];
    const Erase = () => {
        colours = [];
    }
    return (
        <section className="text-gray-600 body-font mx-8">
            <h1 className='m-5 px-2 text-3xl font-semibold'>{type}</h1>
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {Object.keys(products).map((product) => {
                        return (
                            <div key={products[product]._id} className="lg:w-1/4 md:w-1/2 p-4 m-auto w-full">
                                <Link href={`/products/${products[product].slug}`}>
                                    <div className="block rounded overflow-hidden">
                                        <Image width={0} height={0} style={{ width: '50%', height: '50%' }} sizes='50vw' alt="ecommerce" className="m:h-[36vh] h-[30vh] m-auto" src="https://m.media-amazon.com/images/I/713n+TxyfCL._SY879_.jpg" />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stickers</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{products[product].title}</h2>
                                        <p className="mt-1">₹{products[product].price}</p>
                                        <div>
                                            {products[product].size.map((size) => {
                                                return (
                                                    <span key={size} className="border border-gray-300 px-1 mx-1 rounded">{size}</span>
                                                )
                                            })}
                                            <div>
                                                <div className='flex'>
                                                    {products[product].colour.map((colour) => {
                                                        if (!colours.includes(colour)) {
                                                            colours.push(colour)
                                                            return (
                                                                <div key={colour} className='w-5 h-5 m-1 border-2 brorder-black rounded-full' style={{ backgroundColor: colour }} ></div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                            {Erase()}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}