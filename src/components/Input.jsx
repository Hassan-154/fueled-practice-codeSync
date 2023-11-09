import React from 'react';

const Input = ({ customClass, placeholder }) => {
  // const baseStyle = {
  //   border: '1px solid rgba(0, 0, 0, 0.10)',
  //   width: '100%',
  //   padding: '12px',
  //   outline: 'none',
  //   fontSize: '16.5px',
  //   fontWeight: '400',
  //   borderRadius: '8px',
  // };

  // Merge the base style with the passed-in style using spread operator
  // const mergedStyle = { ...baseStyle, ...style };

  return <input className={`w-full outline-none text-input-text font-normal border border-input rounded-md ${customClass}`} placeholder={placeholder} />;
};

export default Input;