import React from 'react'
import { useState } from 'react';
import Card from './Card';
const Design = () => {
    const [val, setVal] = useState([
        { img: 'https://a0.muscache.com/im/pictures/miso/Hosting-617063718566302384/original/717a4c2d-e8a9-4798-8378-0d878e0ed56e.jpeg?im_w=720', name: 'Thailand', dist: 2456, price: 80 },
        { img: 'https://a0.muscache.com/im/pictures/14152ff7-28fa-48cc-9c90-ac787fb5bb6b.jpg?im_w=720', name: 'Ku Somai, India', dist: 346, price: 74 },
        { img: 'https://a0.muscache.com/im/pictures/2a1724ca-c902-4c82-b64a-215c2fd1e414.jpg?im_w=720', name: 'Udaipur, India', dist: 3446, price: 74 },
        { img: 'https://a0.muscache.com/im/pictures/ae71d719-bb9b-466d-aa76-c29a1d43afd7.jpg?im_w=720', name: 'HonkKong, China', dist: 3546, price: 740 },
        { img: 'https://a0.muscache.com/im/pictures/a0eda6d9-b4bc-424c-bcec-8f15b0e887a9.jpg?im_w=720', name: 'kamala, Thialand', dist: 3556, price: 560 },
    ]);
  return (
    <div className='flex flex-wrap gap-5 mt-5 px-8' >
        {val.map((item,index)=>{
            return <Card key={index} data={item}></Card>
        })}
    </div>
  )
}

export default Design