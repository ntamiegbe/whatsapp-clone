// import React from 'react'

// const Search = () => {
//     return (
//         <div className='relative bg-[#fafafa] flex items-center mx-4 py-2'>
//             <div className="absolute left-6">
//                 <AiOutlineSearch />
//             </div>
//             <input type="search" placeholder='Search or start a new chat' className='w-full pl-12 py-2 outline-none border rounded-lg hover:bg-[#f9f9f9]' />
//         </div>
//     )
// }

// export default Search

import React from "react";
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
    return (
        <div className="relative flex items-center bg-[#fafafa] py-2 pt-1">
            <div className="absolute left-6 pl-1">
                <AiOutlineSearch />
            </div>
            <input
                type="search"
                placeholder="Search for friends"
                className="w-full pl-9 m-2 border mx-4 outline-0 rounded p-1 hover:bg-[#f9f9f9]"
            />
        </div>
    );
};

export default Search;