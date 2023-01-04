import React from 'react'
import profile from '../assets/profile.png'
import { AiOutlineSearch } from 'react-icons/ai'

const Chats = () => {
  return (
    <div className='w-full hidden md:flex flex-col space-y-5 bg-[#eeedef]'>

      {/* Header */}
      <div className="flex justify-between p-2 items-center">

        <div className="flex">
          <div className="w-14 h-14 flex rounded-full bg-teal-100">
            <img src={profile} alt="" className='object-cover rounded-full p-1 w-full' />
          </div>
          <div className="pl-3">
            <p>SOFT DEV.</p>
            <p>You, Lawrence and Boniface.</p>
          </div>
        </div>

        <div className="flex space-x-4 p-4">
          <div className="">
            <AiOutlineSearch />
          </div>
          <div className="">
            <AiOutlineSearch />
          </div>
          <div className="">
            <AiOutlineSearch />
          </div>
        </div>

      </div>

      {/* Chat Body */}
      <div className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laborum est totam quas iste possimus tempore sit cupiditate. Cumque voluptas nisi ut totam cupiditate dignissimos, porro neque impedit exercitationem voluptates reiciendis beatae natus. Dolorum nesciunt quae ea ad id, eum natus quod deserunt temporibus, tenetur quasi odit saepe. Quod, laboriosam.
      </div>
    </div>
  )
}

export default Chats