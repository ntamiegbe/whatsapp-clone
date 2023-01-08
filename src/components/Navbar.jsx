import React from 'react'
import { BiMessageSquareDots } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import Switcher from './Switcher'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-2 dark:bg-[#2c2c2c] border-r dark:border-[#343434] bg-[#eeedef] w-screen md:w-full h-[4.5rem]'>
            <div className="w-12 h-12 flex items-center">
                <p className='text-3xl dark:text-white px-2 font-semibold'>Chats</p>
            </div>
            <div className="flex items-center gap-4">
                <BiMessageSquareDots className='w-14 h-14 hover:bg-[#dddcde] dark:hover:bg-[#383838] p-3 rounded-lg dark:text-white' />
                <BsThreeDots className='w-14 h-14 hover:bg-[#dddcde] p-3 rounded-lg dark:hover:bg-[#383838] dark:text-white' />
                <Switcher className='w-14 h-14 p-3 rounded-lg dark:text-white' />
            </div>
        </div>
    )
}

export default Navbar