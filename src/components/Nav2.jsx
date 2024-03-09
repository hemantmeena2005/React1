import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav2 = () => {
  return (
    <div>
        <nav className='p-2 px-10 flex gap-10' >
        <NavLink className={(e)=>e.isActive? 'text-red-500 border-b-2 border-red-500 ':''} to='/About/treehouse'>Treehouse</NavLink>
        <NavLink className={(e)=>e.isActive? 'text-red-500 border-b-2 border-red-500':''} to='/About/pools'>Pools</NavLink>
        <NavLink className={(e)=>e.isActive? 'text-red-500 border-b-2 border-red-500':''} to='/About/camping'>Camping</NavLink>
        <NavLink className={(e)=>e.isActive? 'text-red-500 border-b-2 border-red-500':''} to='/About/design'>DESIGN</NavLink>
        <NavLink className={(e)=>e.isActive? 'text-red-500 border-b-2 border-red-500':''} to='/About/parks'>Parks</NavLink>
        </nav>
    </div>
  )
}

export default Nav2