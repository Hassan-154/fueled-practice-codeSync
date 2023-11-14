import React, { useState, useEffect } from 'react';
import Button from './Button';
import CrossIcon from './CrossIcon';
import Input from './Input';

function DropDown() {
  const shouldShowImage = true;
  const [duplicateInput, setDuplicateInput] = useState([{id: 0 }]);
  const [idCounter, setIdCounter] = useState(1);

  const createDuplicate = () => {
    const trackId = idCounter;
    setDuplicateInput([...duplicateInput, { id: trackId }]);
    setIdCounter(idCounter + 1);
  };

  const deleteDuplicateItem = (id) => {
    const updatedInputs = duplicateInput.filter((item) => item.id !== id);
    setDuplicateInput(updatedInputs);
  };

  return (
    <div>
      <ul>
        {duplicateInput.map((item, index) => (
          <li key={item.id}>
            <div className='flex items-center gap-4 mt-3.5'>
            <input type='radio' className='w-6 h-6' />
              <Input placeholder={index + 1 + ' Option'} />
              <div onClick={() => deleteDuplicateItem(item.id)}><CrossIcon/></div>
            </div>
          </li>
        ))}
      </ul>
      <div onClick={createDuplicate}>
        <Button customClass={'mt-5'} showImage={shouldShowImage} name='ADD OPTION' />
      </div>
    </div>
  );
}

export default DropDown;
