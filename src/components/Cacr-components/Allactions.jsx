import React from 'react'
import { Link } from 'react-router-dom'

const Allactions = () => {
  return (
    <div>
      
      <div className='flex gap-5 text-center'> 
       <Link to="/Newnotifications" className='w-[160px]  h-[30px] border-2 border-[#3C60FFB2] rounded-md'>
       Send Notifications</Link>
        <Link to="/Allsales" className='w-[160px] h-[30px] border-2 border-[#3C60FFB2] rounded-md'>
        Manage Sales</Link>
        <Link to="/Disableuser" className='w-[160px] h-[30px] border-2 border-[#3C60FFB2] rounded-md'>
        Disable User</Link>
        <Link to="/dashboard" className='w-[160px] h-[30pbhex] border-2 border-[#3C60FFB2] rounded-md'>
        Go to Dashboard</Link>
        <Link to="/Theme" className='w-[160px] h-[30px] border-2 border-[#3C60FFB2] rounded-md'>
        Update Theme</Link>
       <Link to ="/Brandstyles"className='w-[160px] h-[30px] border-2 border-[#3C60FFB2] rounded-md'>
       Update brand style</Link>
        <Link to="/Resetpassword" className='w-[160px] h-[30px] border-2 border-[#3C60FFB2] rounded-md'>
        Reset password</Link>

      </div>
    </div>
  )
}

export default Allactions
