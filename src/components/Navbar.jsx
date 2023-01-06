import React from 'react'
import profile from '../assets/profile.png'
import { BiMessageSquareDots } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-2 bg-[#eeedef] w-screen md:w-full h-[4.5rem]'>
            <div className="w-12 h-12 flex">
                <img src={profile} alt="" className='object-cover rounded-full' />
            </div>
            <div className="flex items-center gap-4">
                <BiMessageSquareDots className='w-14 h-14 hover:bg-[#dddcde] p-3 rounded-lg ' />
                <BsThreeDots className='w-14 h-14 hover:bg-[#dddcde] p-3 rounded-lg' />
            </div>
        </div>
    )
}

export default Navbar