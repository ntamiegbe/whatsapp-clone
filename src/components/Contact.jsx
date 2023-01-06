import React from 'react'

const Contact = ({ img, name, message }) => {
    return (
        <div className='flex justify-between border-b py-3 px-5 hover:bg-[#eeedef]'>
            <div className="flex items-center">
                <div className="w-16 h-16 flex">
                    <img src={img} alt="" className='object-cover rounded-full w-full' />
                </div>
                <div className="pl-3">
                    <h3 className='text-[15px] text-gray-800'>{name}</h3>
                    <p className='text-gray-500 w-[10rem] md:w-[20rem] truncate'>{message}</p>
                </div>
            </div>
            <div className="flex h-full justify-end">
                <p>8:45</p>
            </div>
        </div>
    )
}

export default Contact

