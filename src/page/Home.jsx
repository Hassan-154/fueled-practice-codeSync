import React from 'react'
import Input from '../components/Input'
import NavbarMenu from '../components/NavbarMenu'
import Button from '../components/Button';
function Home() {
  const menuItems = ['Short Answer', 'Paragraph', 'Checkboxes', 'Multiple Choice'];
  return (
    <div className='max-w-2xl mx-auto p-5 mt-6 bg-white'>
    <h1 className='pb-0.5 font-semibold'>Question</h1>
    <Input customClass={'p-input'} placeholder='What do you want to ask?'></Input>
    <h1 className='pt-7 pb-3 font-semibold'>Answer</h1>
    <NavbarMenu items={menuItems} />
    <Button customClass={'text-Fueled-Red mt-6'}>Add Question</Button>
    <Button customClass={'text-white bg-Fueled-Red mt-4'}>Save & Share</Button>
    </div>
  )
}

export default Home