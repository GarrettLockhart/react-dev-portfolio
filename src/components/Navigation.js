import React from 'react'

const Navigation = () => {
  return (
    <div>
      <ul className='flex flex-row justify-center m-1 '>
        <button className='text-white p-2 hover:text-red-900 transition-all duration-400 cursor-pointer'>ABOUT ME</button>
        <button className='text-white p-2 hover:text-red-900 transition-all duration-400 cursor-pointer'>PROJECTS</button>
        <button className='text-white p-2 hover:text-red-900 transition-all duration-400 cursor-pointer'>CONTACT</button>
        <button className='text-white p-2 hover:text-red-900 transition-all duration-400 cursor-pointer'>RESUME</button>
      </ul>
    </div>
  )
}

export default Navigation