import React,{useState, useEffect} from 'react'
import Input from '../components/Input'
import MenuSelector from '../components/MenuSelector'
import Button from '../components/Button';
import HorizontalLine from '../components/HorizontalLine';4
import Arrow from '../components/Arrow'
import Bin from '../components/Bin';

function Home() {
  const shouldShowImage = true;
  const menuItems = ['Dropdown', 'Short Answer', 'Paragraph', 'Checkboxes', 'Multiple Choice'];

  const [duplicateInput, setDuplicateInput] = useState([{ id: 0 }]);
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
    <div className='max-w-2xl mx-auto'>
   <ul>
   {duplicateInput.map((item, index) => (
   <li key={item.id}>
   <div className='p-5 mt-6 bg-white'>
    <h1 className='pb-0.5 font-semibold text-heading'>Question</h1>
    <Input placeholder='What do you want to ask?'></Input>
    <HorizontalLine/>
    <h1 className='pt-6 pb-3 font-semibold text-heading'>Answer</h1>
    <MenuSelector items={menuItems}/>
    <HorizontalLine/>
    <div className='flex item-center justify-between mt-5'>
    <span>{index+1} of {duplicateInput.length}</span>
    <div className='flex items-center gap-5'>
    <div><Arrow/></div><div className='rotate-180'><Arrow/></div><div onClick={() => deleteDuplicateItem(item.id)}><Bin/></div>
    </div>
    </div>
    </div>
    </li>
    ))}
   </ul>
    <div onClick={createDuplicate}><Button customClass={'mt-7'} showImage={shouldShowImage} name='ADD QUESTION'/></div>
    <Button customClass={'text-white bg-Fueled-Red mt-4 !text-buttonSave'} name='Save & Share' />
    </div>
  )
}

export default Home