import React, { useState } from 'react';
import Button from './Button';
import CrossIcon from './CrossIcon';
import Input from './Input';

function MultiChoice() {
  const shouldShowImage = true;
  const [duplicatedInputs, setDuplicatedInputs] = useState([]);

  const createDuplicate = () => {
    setDuplicatedInputs((prevInputs) => [ ...prevInputs,
      <li key={prevInputs.length}>
        <div className='flex items-center gap-4 mt-3.5'>
          <input type='radio' className='w-6 h-6' />
          <Input placeholder={prevInputs.length + ' Option'} />
          {console.log(duplicatedInputs)}
          <div><CrossIcon /></div>
        </div>
      </li>,
    ]);
  };

  return (
    <div>
      <ul>{duplicatedInputs}</ul>
      <div onClick={createDuplicate}>
        <Button customClass={'mt-5'} showImage={shouldShowImage}>
          ADD OPTION
        </Button>
      </div>
    </div>
  );
}

export default MultiChoice;
