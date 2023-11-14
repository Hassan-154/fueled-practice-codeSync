import React,{useState} from 'react'
import Button from './Button';
import CrossIcon from './CrossIcon';
import Input from './Input';
function MultiChoice() {
    const shouldShowImage = true;
    const [duplicateInput, setDuplicateInput] = useState([0]);
    
      const createDuplicate = () => {
        setDuplicateInput([...duplicateInput, {}]); 
      };
      
  return (
     <div>
      <ul>
        {duplicateInput.map((item, id) => (
          <li key={id}>
          <div className='flex items-center gap-4 mt-3.5'><input type='radio' className='w-6 h-6' /><Input placeholder={ id+1 +' Option'}/><CrossIcon/></div>
          </li>
        ))}
      </ul>
      <div onClick={createDuplicate}><Button customClass={'mt-5'} showImage={shouldShowImage} name='Add Option'/></div>
    </div>
  )
}

export default MultiChoice