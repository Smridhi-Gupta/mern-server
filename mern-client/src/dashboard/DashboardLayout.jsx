import React from 'react'
import Sidebaar from './Sidebaar'
import {Outlet} from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
    <Sidebaar />
    <Outlet/>
    </div>
  )
}

export default DashboardLayout