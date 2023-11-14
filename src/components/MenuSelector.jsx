import React, { useState } from 'react';
import icon from '../assets/icons/icon-chevron-left.png'
import Button from './Button';
import Input from './Input';
import MultiCheckBox from './MultiCheckBox';
import MultiChoice from './MultiChoice';
import DropDown from './DropDown';
const MenuSelector = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Dropdown');

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Selected: ${item}`);
    setSelectedItem(item);
    setMenuOpen(false);
  };
  
  return (
    <div>
      <div className="rounded-md max-w-menu flex justify-between items-center cursor-pointer px-input py-menu border border-input text-black text-dropDown" onClick={toggleMenu}>
        <div>{selectedItem || 'Dropdown'}</div>
        <div><img src={icon}/></div>
      </div>
      {isMenuOpen && <div>
      {
      props.items.map((item) => (
      <div key={item} className="cursor-pointer" onClick={() => handleItemClick(item)}>
      <ul>
      <Button customClass={'rounded-md !font-normal mt-3.5 !text-dropDown'} name={item} />
      </ul>
    </div>
      ))
      }
      </div>}
      {/* dropdown multiChoice */}
      <div className='mt-4'>
      {selectedItem === 'Dropdown' && <DropDown/>}
      {selectedItem === 'Short Answer' && <Input placeholder={'Short answer text'} customClass={'bg-answer'}/>}
      {selectedItem === 'Paragraph' && <Input placeholder={'Long answer text'} customClass={'pb-16 bg-answer'}/>}
      {selectedItem === 'Checkboxes' && <MultiCheckBox/> }
      {selectedItem === 'Multiple Choice' && <MultiChoice/> }
      </div>
    </div>
  );
};

export default MenuSelector;
