import React from 'react';
import plus from '../assets/icons/plus.png'
const Button = ({ customClass, name, showImage}) => {

  return <button className={`w-full text-buttonText text-Fueled-Red outline-none py-1.5 font-semibold border border-input flex items-center justify-center  ${customClass}`}>
  {showImage && <div className='w-4 mr-2.5'><img src={plus}/></div>}
  {name}
  </button>;
};

export default Button;