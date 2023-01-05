import React from 'react'
import profile from '../assets/profile.png'
import { BiMessageSquareDots } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-3 py-3 bg-[#eeedef] w-screen md:w-full h-[4.5rem]'>
            <div className="w-12 h-12 flex">
                <img src={profile} alt="" className='object-cover rounded-full' />
            </div>
            <div className="flex items-center space-x-4">
                <BiMessageSquareDots className='w-14 h-14 hover:bg-[#dddcde] p-3 rounded-lg my-3' />
                <BsThreeDots className='w-14 h-14 hover:bg-[#dddcde] p-3 rounded-lg my-3' />
            </div>
        </div>
    )
}

export default Navbar