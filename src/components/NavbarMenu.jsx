import React, { useState } from 'react';
import icon from '../assets/icons/icon-chevron-left.png'
import Input from './Input';
const NavbarMenu = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Selected: ${item}`);
    setSelectedItem(item);
    setMenuOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center cursor-pointer py-2 px-3 border border-input text-black" onClick={toggleMenu}>
        <div>{selectedItem || 'Dropdown'}</div>
        <div><img className='w-auto' src={icon}/></div>
      </div>
      {isMenuOpen && <div className="">
      {
      props.items.map((item) => (
      <div key={item} className="cursor-pointer" onClick={() => handleItemClick(item)}>
      <ul>
        <li className='font-normal border border-input py-2 px-3 mt-3'>{item}</li>
      </ul>
    </div>
      ))
      }
      </div>}
    </div>
  );
};

export default NavbarMenu;
