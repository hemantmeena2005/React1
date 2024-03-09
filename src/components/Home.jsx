import React from 'react'

const Home = () => {
  return (
    <div className=''>
        <div className='h-[60vh] p-6 px-20 bg-cover w-full bg-[url(https://images.unsplash.com/photo-1709374601273-57d0a44c9437?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D)] flex flex-col justify-center gap-4' >
            <h1 className='text-5xl font-bold text-white  ' >A dream stay <br />for a bucket list trip</h1>
            <h2 className='tetx-xl text-white  '>Make it a trip to remember in a holiday home</h2>
            <button className='bg-blue-500 text-xl text-white rounded-md w-fit py-1 px-3 ' >Discover Holiday Rentals</button>
        </div>
        
    </div>
  )
}

export default Home