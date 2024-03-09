import React from 'react';

const Card = ({ data }) => {
    const { img, name, dist, price } = data;

    return (
        <div className='h-80 p-2 w-72  rounded-md'>
            <div className='h-60 bg-red-200 rounded-xl overflow-hidden'>
                <img className='h-full w-full object-cover' src={img} alt="" />
            </div>
            <h1 className='text-xl mt-1'>{name}</h1>
            <h2 className='text-xs opacity-50'>{dist} kilometers away</h2>
            <h3 className='text-md mt-1 '>${price}/night</h3>
        </div>
    );
};

export default Card;
