import React from 'react'
import Nav from './components/Nav'
import Routing from './utils/Routing'

const App = () => {
  return (
    <div className='  h-screen w-screen ' >
      <Nav/>
      <Routing></Routing>
    </div>
  )
}

export default App