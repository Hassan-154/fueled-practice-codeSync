import React, { useState, useEffect } from 'react';
import icon from '../assets/icons/Fueled Emblem.png';
import Button from '../components/Button';

function Header({ heading, buttonLabel }) {
  

  return (
    <div className='bg-Fueled-Red shadow-box items-center justify-between text-white flex py-1.5 pr-4'>
      {/* icon */}
      <div><img src={icon} alt="Fueled Emblem" /></div>
      {/* heading */}
      <div><h1 className='font-semibold text-headerHeading'>{heading}</h1></div>
      {/* login button */}
      <div className='w-16'>

      {buttonLabel && (
        <button className='bg-header-button text-white py-1.5 w-16 mr-4'>
          {buttonLabel}
        </button>
      )}
      </div>
    </div>
  );
}

export default Header;
