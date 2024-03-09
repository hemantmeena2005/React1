import React from 'react'
import { NavLink , Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='w-full p-4 px-10  flex justify-between items-center gap-10 ' >
        <h1 className='text-2xl text-red-500' >Stays & Hotels</h1>
        <nav className='flex gap-10 items-center  '>
            <NavLink className={(e)=>e.isActive ? 'text-red-500':''} to={'/'}>Home</NavLink>
            <NavLink className={(e)=>e.isActive ? 'text-red-500':''} to={'/About'}>Stays</NavLink>
            <NavLink className={(e)=>e.isActive ? 'text-red-500':''} to={'/Project'}>Experiences</NavLink>
            <NavLink className={(e)=>e.isActive ? 'text-red-500':''} to={'/Contact'}>Online Experiences</NavLink>
        </nav>
        <h1>Airbnb Your Home</h1>
    </div>
  )
}

export default Nav