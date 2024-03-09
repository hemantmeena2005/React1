import React from 'react'
import Nav2 from './Nav2'
import Card from './Card';
import { useState } from 'react';

const Pools = () => {
  const [val, setVal] = useState([
    { img: 'https://a0.muscache.com/im/pictures/miso/Hosting-876463172459170480/original/60963c66-9a75-4424-bcd7-d5a02080a45d.jpeg?im_w=720', name: 'Jaipur, India', dist: 456, price: 76 },
    { img: 'https://a0.muscache.com/im/pictures/74fc010b-e809-42ff-a1ee-d58bc4cfd202.jpg?im_w=720', name: 'Udaipur, India', dist: 346, price: 74 },
    { img: 'https://a0.muscache.com/im/pictures/miso/Hosting-45942402/original/c2edd936-c82f-4c34-b9c2-0d2b2daa465c.jpeg?im_w=720', name: 'Shilong, India', dist: 1456, price: 35 },
    { img: 'https://a0.muscache.com/im/pictures/miso/Hosting-948238209740182923/original/45fd0d30-d2b8-4028-b7d5-646397898b12.jpeg?im_w=720', name: 'delhi, India', dist: 56, price: 60 },
    { img: 'https://a0.muscache.com/im/pictures/miso/Hosting-988223878398035237/original/c4797dab-fae4-44e2-af3e-081201ec0083.jpeg?im_w=720', name: 'Vizak, India', dist: 1756, price: 176 },
    { img: 'https://a0.muscache.com/im/pictures/miso/Hosting-968152690106445668/original/de884b93-7810-40a9-9d41-8b5a142a1a31.jpeg?im_w=720', name: 'Kerala, India', dist: 788, price: 50 },
]);


  return (
<>
    <div  className='flex flex-wrap gap-5 mt-5 px-8 '>
      {val.map((item,index)=>{
        return <Card key={item.name} data={item} ></Card>
      })}
    </div>
</>
  )
}

export default Pools