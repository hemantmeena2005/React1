import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Product from './Product';
const Camping = () => {
  const [products, setProducts] = useState([]);
  const api =  ' https://fakestoreapi.com/products'


  axios
  .get(api)
  .then((res)=>{
    setProducts(res.data)
  })
  .catch((err)=>console.log(err))
    const [val, setVal] = useState([
        { img: 'https://a0.muscache.com/im/pictures/d31ff0cf-e8b4-4f03-8ca4-3d91d93263bb.jpg?im_w=720', name: 'Badiaram,Jordan', dist: 11456, price: 760 },
        { img: 'https://a0.muscache.com/im/pictures/miso/Hosting-1031055485526682886/original/5fd26828-9985-45d1-84d3-70026406835f.jpeg?im_w=720', name: 'Saudi ,UAE', dist: 6456, price: 260 },
        { img: 'https://a0.muscache.com/im/pictures/8932fa72-8bc5-4bd4-9f27-2c65ee22c911.jpg?im_w=720', name: 'Station,india', dist: 156, price: 70 },
        { img: 'https://a0.muscache.com/im/pictures/f4f3ee2e-4eb7-47c8-b64c-f98b01ac2134.jpg?im_w=720', name: 'Shakaria,Jordan', dist: 11566, price:50 },
        { img: 'https://a0.muscache.com/im/pictures/f7283c77-7c0d-40ed-a686-c13bb3a247dc.jpg?im_w=720', name: 'Vadiaram,Village', dist: 10456, price: 60 },
    ]);

  return (
    <div className='flex flex-wrap  gap-10 mt-5 px-8' >
        {products.length >0 ? (
          products.map((item,index)=>{
            return <Product key={index} Product={item} ></Product>
          })
        ):(
          <h1>Loading...</h1>
        ) }
    </div>
  )
}

export default Camping