import React from 'react'
import profile3 from '../assets/profile3.jfif'
import background from '../assets/background.jpg'
import { AiOutlineSearch } from 'react-icons/ai'

const Chats = () => {
  return (
    <div className='w-full hidden md:flex flex-col border-l bg-[#eeedef] relative'>

      {/* Header */}
      <div className="flex justify-between p-2 items-center z-20 bg-[#eeedef]">

        <div className="flex items-center">
          <div className="w-14 h-14 flex rounded-full bg-teal-100">
            <img src={profile3} alt="" className='object-cover rounded-full p-1 w-full' />
          </div>
          <div className="pl-3">
            <p className='font-semibold'>SOFT DEV.</p>
            <p className='text-[12px] whitespace-nowrap truncate w-[16rem] text-gray-500'>You, Lawrence and Boniface.</p>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className='w-6 h-6 cursor-pointer'>
            <AiOutlineSearch />
          </div>
          <div className='w-6 h-6 cursor-pointer'>
            <AiOutlineSearch />
          </div>
          <div className='w-6 h-6 cursor-pointer'>
            <AiOutlineSearch />
          </div>
        </div>

      </div>

      {/* Chat Body */}
      <div className="h-full w-full absolute">
        <div className="flex h-full w-full absolute">
          <img src={background} alt="Chat background image" className='object-cover w-full' />
        </div>
      </div>
      <p className='relative z-30'>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default Chats