import React,{useState} from 'react'
import Button from './Button';
import CrossIcon from './CrossIcon';
import Input from './Input';
function MultiCheckBox() {
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
        <div className='flex items-center gap-4 mt-3.5'><input type='checkbox' className='h-5 w-5 cursor-pointer'/><Input placeholder={ id+1 +' Option'}/><CrossIcon/></div>
        </li>
      ))}
    </ul>
    <div onClick={createDuplicate}><Button customClass={'mt-5'} showImage={shouldShowImage}>ADD OPTION</Button></div>
  </div>
  )
}

export default MultiCheckBox