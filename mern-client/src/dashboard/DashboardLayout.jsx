import React from 'react'
import Sidebar from './Sidebar'

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default DashboardLayout