import Image from 'next/image'
import React from 'react'

const SiderBar: React.FC = () => {
  return (
    <div className='flex flex-col items-center text-gray-700 mt-10'>
      <Image
        className='object-cover rounded-full shadow-md'
        src='https://flowbite.com/docs/images/blog/image-4.jpg'
        width={120}
        height={120}
        alt=''
      />
      <p className='text-center font-bold mt-5'>Bruce</p>
      <div className='divide-y-2 w-full p-5'>
        <p className='text-center font-bold m-2 text-blue-400'>Python</p>
        <p className='text-center font-bold m-2 text-blue-400'>Javascript</p>
        <p className='text-center font-bold m-2 text-blue-400'>Rust</p>
      </div>
    </div>
  )
}

export default SiderBar
