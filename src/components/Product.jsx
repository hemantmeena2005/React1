import React from 'react'

const Product = ({Product}) => {
    const {image,title,price,description,rating} = Product
    const {rate,count} = rating
  return (
    <div className='  w-52 mt-2 h-[340px] overflow-hidden rounded-md '>
        <div>
            <img className='w-52 h-60 object-cover rounded-md ' src={image} alt="" />
        </div>
        <div className='p-2 w-full  '>
        <h1 className='text-md text-nowrap ' >{title}</h1>
        <h2 className='text-xs text-nowrap opacity-70'  >{description}</h2>
        <h3 className='text-sm font-semibold'>${price}</h3>
        <h1 className='text-xs mb-2 text-red-500 ' >{rate} , {count} reviews</h1>
        </div>
    </div>
  )
}

export default Product