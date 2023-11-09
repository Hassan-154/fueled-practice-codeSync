import React from 'react';

const Button = ({ customClass, children }) => {

  return <button className={`w-full outline-none py-1.5 font-semibold border border-input ${customClass}`}>{children}</button>;
};

export default Button;