import React from "react";
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
    return (
        <div className="relative flex items-center bg-[#fafafa] dark:bg-[#272727] py-2 pt-1">
            <div className="absolute left-6 pl-1 dark:text-white">
                <AiOutlineSearch />
            </div>
            <input
                type="search"
                placeholder='Search or start a new chat'
                className="w-full pl-9 m-2 border-b mx-4 outline-none rounded px-1 dark:text-white py-3 hover:bg-[#f9f9f9] dark:bg-[#272727] hover:dark:bg-[#2d2d2d]"
            />
        </div>
    );
};

export default Search;