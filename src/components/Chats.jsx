import React from 'react'
import profile3 from '../assets/profile3.jfif'
import background from '../assets/background.jpg'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiOutlineMicrophone } from 'react-icons/hi'
import { SlPaperClip } from 'react-icons/sl'
import { BsEmojiSmile } from 'react-icons/bs'
import { BiVideo, BiPhone } from 'react-icons/bi'
import Message from './Message'


const Chats = () => {
  const messages = [
    {
      name: "Lifeofrence",
      message: "How far",
      css1: "bg-white/80 shadow",
      css2: "justify-start",
      timestamp: "10:35",
    },
    {
      message: "Nice to meet you",
      css1: "bg-black/90 text-white shadow",
      css2: "justify-end",
      timestamp: "10:36",
    },
    {
      name: "Clintonfaze",
      message: "Are you subscribed yet?",
      css1: "bg-white/80 shadow",
      css2: "justify-start",
      timestamp: "10:35",
    },
    {
      message: "Not yet, but I will",
      css1: "bg-black/90 text-white shadow",
      css2: "justify-end",
      timestamp: "10:36",
    },
    {
      name: "Joe Doe",
      message: "What is the update on the project?",
      css1: "bg-white/80 shadow",
      css2: "justify-start",
      timestamp: "10:35",
    },
    {
      message: "We are working on it.",
      css1: "bg-black/90 text-white shadow",
      css2: "justify-end",
      timestamp: "10:36",
    },
  ];

  return (
    <div className='w-full hidden md:flex flex-col justify-between border-l bg-[#eeedef] relative h-screen'>

      {/* Header */}
      <div className="flex justify-between p-2 items-center z-20 bg-[#eeedef]">
        <div className="flex items-center">
          <div className="w-14 h-14 flex rounded-full hover:bg-teal-100">
            <img src={profile3} alt="" className='object-cover rounded-full p-1 w-full' />
          </div>
          <div className="pl-3">
            <p className='font-semibold'>SOFT DEV</p>
            <p className='text-[12px] whitespace-nowrap truncate w-[16rem] text-gray-500'>You, Lifeofrence and Clintonfaze.</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <BiVideo className='w-10 h-10 hover:bg-[#dddcde] p-2 rounded-lg my-2' />
          <BiPhone className='w-10 h-10 hover:bg-[#dddcde] p-2 rounded-lg my-2' />
          <AiOutlineSearch className='w-10 h-10 hover:bg-[#dddcde] p-2 rounded-lg my-2' />
        </div>
      </div>

      {/* Chat Body */}
      <div className="absolute top-0 w-full h-full">
        <div className="absolute h-full w-full flex">
          <img src={background} alt="Chat background image" className='object-cover w-full h-screen' />
        </div>
        <div className="relative z-20  pt-[4.5rem] mt-3 lg:mt-4">
          {messages.map((message) => (
            <Message
              name={message.name}
              message={message.message}
              css1={message.css1}
              css2={message.css2}
              timestamp={message.timestamp}
            />
          ))}
        </div>
      </div>

      <div className="relative w-full z-20 bottom-0 bg-[#eeedef] px-6 py-2 flex items-center">
        <BsEmojiSmile className='w-12 h-12 hover:bg-[#dddcde] p-2 rounded-lg mr-4' />
        <SlPaperClip className='w-12 h-12 hover:bg-[#dddcde] p-2 rounded-lg mr-4' />
        <input type="text" placeholder='Type a message' className='mx-10 outline-none px-2 w-full py-2 rounded-lg bg-transparent' />
        <HiOutlineMicrophone className='w-12 h-12 hover:bg-[#dddcde] p-2 rounded-lg mr-8' />
      </div>
    </div>
  )
}

export default Chats