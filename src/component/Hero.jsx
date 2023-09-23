import React from 'react'

const hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img src="./1.jpg" alt="" className='h-full w-full object-cover'/>
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full  md:[50%] max-w-[600PX] h-full flex flex-col text-black p-4'>
        <h1 className='font-bold text-4xl'>find your special trip</h1>
        <h1 className='italic text-4xl py-4'>with danish sheikh</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit culpa quibusdam sed? A sequi pariatur, dignissimos repellat deleniti libero fugiat enim delectus nostrum blanditiis.</p>
      </div>
    </div>
    </div>
  )
}

export default hero
