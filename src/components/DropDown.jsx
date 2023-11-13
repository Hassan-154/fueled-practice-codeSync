import React,{useState} from 'react'
import Button from './Button';
import CrossIcon from './CrossIcon';
import Input from './Input';
function DropDown() {
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
          <div className='flex items-center gap-4 mt-3.5'><div className='text-lg'>{id+1}.</div><Input placeholder={ id+1 +' Option'}/><CrossIcon/></div>
          </li>
        ))}
      </ul>
      <div onClick={createDuplicate}><Button customClass={'mt-5'} showImage={shouldShowImage}>ADD OPTION</Button></div>
    </div>
  )
}

export default DropDown