import React from 'react'
import profile from '../assets/profile.png'
import { BiMessageSquareDots } from 'react-icons/bi'
import { BiMenu } from 'react-icons/bi'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-4 py-3 bg-[#eeedef]'>
            <div className="w-16 h-16 flex">
                <img src={profile} alt="" className='object-cover rounded-full' />
            </div>
            <div className="flex items-center space-x-6">
                <BiMessageSquareDots className='w-8 h-8'/>
                <BiMenu className='w-8 h-8'/>
            </div>
        </div>
    )
}

export default Navbar