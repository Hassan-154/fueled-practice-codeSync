import React from 'react'
import icon from '../assets/icons/Fueled Emblem.png'

function Header() {
  return (
      <div className='bg-Fueled-Red shadow-box items-center justify-between text-white flex py-1.5'>
    {/* icon */}
    <div><img src={icon} /></div>
    {/* heading */}
    <div><h1 className='font-semibold text-headerHeading'>New Questionnaire</h1></div>
    {/* login button */}
    <div><button className='bg-header-button mr-5 py-1.5 px-3.5'>Sing In</button></div>
    </div>
  )
}

export default Header