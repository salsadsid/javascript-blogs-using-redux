import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
    return (
        <nav className='h-14 bg-orange-300 rounded m-2 max-w-7xl mx-auto px-5'>
            <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-orange-800'>
                <h1 className="text-lg">JS Blog</h1>

                <li className='flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3'>
                    <input
                        className='h-8 rounded w-full text-sm border-0 focus:ring-0 outline-none'
                        type='text'
                        name='search'
                        id='search'
                    />
                    <button>
                        <BiSearchAlt />
                    </button>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <Link to='/'>
                    <li title='Wishlist' className='bg-orange-700 p-2 rounded'>
                        <IoIosListBox className='text-white' />
                    </li>
                </Link>
                <Link to='/cart'>
                    <li title='cart' className='bg-orange-700 p-2 rounded'>
                        <BsFillCartFill className='text-white ' />
                    </li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
