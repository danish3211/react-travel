import React from 'react'

const Activity = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]' id='Deals'>
        <div className='relative p-4'>
      <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-3xl font-bold'>Resort</h3>
      <img src="./resort.jpg" alt="" className='w-99 h-64 object-cover relative border-4 border-white shadow-lg' />
      </div>
      
      <div className='relative p-4'>
      <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-3xl font-bold'>Cruise</h3>
      <img src="./cruise.jpg" alt="" className='w-99 h-64 object-cover relative border-4 border-white shadow-lg'/>
      </div>
      <div className='relative p-4'>
      <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-3xl font-bold'>exp...</h3>
      <img src="./ex.jpg" alt="" className='w-99 h-64 object-cover relative border-4 border-white shadow-lg'/>
      </div>

    </div>
  )
}

export default Activity
