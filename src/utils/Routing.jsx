import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import About from '../components/About'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Home from '../components/Home'
import Card from '../components/Card'
import Pools from '../components/Pools'
import TreeHouse from '../components/TreeHouse'
import Camping from '../components/Camping'
import Design from '../components/Design'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/About' element={<About></About>} >
            <Route path='/About/treehouse' element={<TreeHouse/>} ></Route>
            <Route path='/About/pools' element={<Pools/>} ></Route>
            <Route path='/About/camping' element={<Camping/>} ></Route>
            <Route path='/About/design' element={<Design/>} ></Route>
            <Route path='/About/parks' element={<Pools/>} ></Route>
            </Route>
            {/* <Route path='/About:name' element={<Card/>} ></Route> */}
            
            <Route path='/Project'  element={<Project/>}></Route>
            <Route path='/Contact' element={<Contact></Contact>}></Route>
            
        </Routes>

    </div>
  )
}

export default Routing