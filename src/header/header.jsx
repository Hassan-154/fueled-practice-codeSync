import React from 'react'
import icon from '../assets/icons/Fueled Emblem.png'
import Button from '../components/Button'
function Header() {
  return (
      <div className='bg-Fueled-Red shadow-box items-center justify-between text-white flex py-1.5'>
    {/* icon */}
    <div><img src={icon} /></div>
    {/* heading */}
    <div><h1 className='font-semibold text-headerHeading'>New Questionnaire</h1></div>
    {/* login button */}
    <Button customClass={'w-16 bg-header-button text-white mr-4'} name={'Log In'}/>
    </div>
  )
}

export default Header