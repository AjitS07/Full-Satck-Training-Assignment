import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const OpenRouters = () => {
  return (
    <div className ='w-full h-full'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default OpenRouters