import React from 'react'
import Input from '../components/Input'
import MenuSelector from '../components/MenuSelector'
import Button from '../components/Button';

function Home() {
  const shouldShowImage = true;
  const menuItems = ['Dropdown', 'Short Answer', 'Paragraph', 'Checkboxes', 'Multiple Choice'];
  return (
    <div className='max-w-2xl mx-auto'>
      <div className='p-5 mt-6 bg-white'>
    <h1 className='pb-0.5 font-semibold'>Question</h1>
    <Input placeholder='What do you want to ask?'></Input>
    <h1 className='pt-7 pb-3 font-semibold'>Answer</h1>
    <MenuSelector items={menuItems} />
    </div>
    <Button customClass={'mt-7'} showImage={shouldShowImage}>ADD QUESTION</Button>
    <Button customClass={'text-white bg-Fueled-Red mt-4'}>Save & Share</Button>
    </div>
  )
}

export default Home