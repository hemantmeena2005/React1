import React from 'react';
import Card from './Card';
import { useState } from 'react';

const TreeHouse = () => {
    const [val, setVal] = useState([
        { img: 'https://a0.muscache.com/im/pictures/miso/Hosting-48837541/original/9b2665b5-5f8f-4694-ad4b-7e4e491a90b1.jpeg?im_w=720', name: 'Munnar, India', dist: 1234, price: 45.6 },
        { img: 'https://a0.muscache.com/im/pictures/89565da2-41b0-443f-84a6-62930398d3cd.jpg?im_w=720', name: 'Bengaluru, India', dist: 456, price: 56.7 },
        { img: 'https://a0.muscache.com/im/pictures/miso/Hosting-751206971626894382/original/e0607051-4fe3-43d4-b808-ea9422113003.jpeg?im_w=720', name: 'New Delhi, India', dist: 678, price: 97 },
        { img: 'https://a0.muscache.com/im/pictures/5f2ee7aa-5c0b-46ad-b5ff-086417efa951.jpg?im_w=720', name: 'Chennai, India', dist: 565, price: 100 },
        { img: 'https://a0.muscache.com/im/pictures/1c360e12-97fe-4bc0-8180-330e270e0483.jpg?im_w=720', name: 'Mumbai, India', dist: 456, price: 76 },
    ]);

    return (
        <div  className='flex gap-5 mt-5 px-8 flex-wrap'>
            {val.map((item, index) => {
                return <Card key={index} data={item}></Card>
            })}
        </div>
    );
};

export default TreeHouse;
