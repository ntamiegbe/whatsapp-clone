import React from 'react'
import profile from '../assets/profile.png'
import { BiMessageSquareDots } from 'react-icons/bi'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-4 py-3 bg-[#eeedef]'>
            <div className="w-12 h-12 flex">
                <img src={profile} alt="" className='object-cover rounded-full' />
            </div>
            <div className="flex items-center space-x-6">
                <BiMessageSquareDots className='w-8 h-8 cursor-pointer'/>
                <AiOutlineMenu className='w-8 h-7 cursor-pointer'/>
            </div>
        </div>
    )
}

export default Navbar