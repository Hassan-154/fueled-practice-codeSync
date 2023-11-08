import React from 'react'

function Placeholder() {
  return (
   <div className='flex flex-col'>
      <label>Question</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='what do you want to ask?'></input>
   </div>
  )
}

export default Placeholder