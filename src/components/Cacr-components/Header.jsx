import React from 'react'
import  logo from '../../assets/Cacr-icon.png'

const Header = () => {
  return (
    <div className='bg-[white]  h-[80px] pl-20 py-5 '>
        <img src={logo} className='w-[50px] h-[50px] ' alt="" />
    </div>
  )
}

export default Header
