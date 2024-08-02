import React from 'react'

const Logout = () => {
    const handleLogout = () {
        
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout