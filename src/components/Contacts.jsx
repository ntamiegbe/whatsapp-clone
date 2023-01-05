import React from 'react'
import profile from '../assets/profile.png'
import profile3 from '../assets/profile3.jfif'
import profile4 from '../assets/profile4.png'
import profile5 from '../assets/profile5.jpg'
import Contact from './Contact'

const contacts = [
  {
    img: profile5,
    name: "Ntami",
    message: "I'm learning react and tailwind css",
    id: 1
  }, 
  {
    img: profile4,
    name: "Lifeofrence",
    message: "I'm learning Laravel",
    id: 2
  }, 
  {
    img: profile3,
    name: "ClintonFaze",
    message: "I'm learning java",
    id: 3
  }, 
  {
    img: profile4,
    name: "Joehero",
    message: "I need you to build a payroll system with artificial intelligence",
    id: 4
  }, 
  {
    img: profile5,
    name: "+234 904 568 3931",
    message: "Hi",
    id: 5
  }, 
  {
    img: profile3,
    name: "Ntami",
    message: "I'm learning react and tailwind css",
    id: 6
  }, 
  {
    img: profile4,
    name: "Ntami",
    message: "I'm learning react and tailwind css",
    id: 7
  }, 
  {
    img: profile4,
    name: "Ntami",
    message: "I'm learning react and tailwind css",
    id: 8
  }, 
  {
    img: profile4,
    name: "Ntami",
    message: "I'm learning react and tailwind css",
    id: 9
  }, 
  {
    img: profile4,
    name: "Ntami",
    message: "I'm learning react and tailwind css",
    id: 10
  }, 
  {
    img: profile4,
    name: "Ntami",
    message: "I'm learning react and tailwind css",
    id: 11
  }, 
  {
    img: profile4,
    name: "Ntami",
    message: "I'm learning react and tailwind css",
    id: 12
  }, 
]

const Contacts = () => {
  return (
    <div className='px-1 py-3 md:w-[25rem] lg:w-[32rem] h-screen overflow-y-scroll'>
      {contacts.map((contact) => <Contact img={contact.img} name={contact.name} message={contact.message} key={contact.id}/>)}
    </div>
  )
}

export default Contacts