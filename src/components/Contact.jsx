import React from 'react'

const Contact = ({ img, name, message }) => {
    return (
        <div className='flex justify-between border-b py-4'>
            <div className="flex items-center">
                <div className="w-20 h-20 flex">
                    <img src={img} alt="" className='object-cover rounded-full w-full' />
                </div>
                <div className="pl-3">
                    <h3 className='text-[17px] text-gray-800'>{name}</h3>
                    <p className='text-gray-500 w-[20rem]'>{message}</p>
                </div>
            </div>
            <div className="flex h-full">
                <p>8:45</p>
            </div>
        </div>
    )
}

export default Contact