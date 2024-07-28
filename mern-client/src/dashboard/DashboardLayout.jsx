import React from 'react'
import Sidebaar from './Sidebaar'

const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
    <Sidebaar />
    </div>
  )
}

export default DashboardLayout