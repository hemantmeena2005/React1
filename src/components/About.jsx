import React, { useState } from 'react'
import { BrowserRouter, NavLink, Routes,Route, useParams, Outlet } from 'react-router-dom'
import Card from './Card'
import Pools from './Pools'
import Nav2 from './Nav2'
import TreeHouse from './TreeHouse'

const About = () => {
    

    const d = useParams();
  return (
    <div>
        <Nav2/>
        <Outlet ></Outlet>
    </div>
  )
}

export default About