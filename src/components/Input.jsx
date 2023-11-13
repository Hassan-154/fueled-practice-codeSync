import React from 'react';

const Input = ({ customClass, placeholder }) => {
  
  return <input className={`w-full outline-none text-input font-normal border border-input rounded-md p-input ${customClass}`} placeholder={placeholder} />;
  
};

export default Input;