import React from 'react';
import plus from '../assets/icons/plus.png'
const Button = ({ customClass, children, showImage}) => {

  return <button className={`w-full text-Fueled-Red outline-none py-1.5 font-semibold border border-input flex items-center justify-center  ${customClass}`}>
  {showImage && <div className='w-4 mr-2.5'><img src={plus}/></div>}
  {children}
  </button>;
};

export default Button;