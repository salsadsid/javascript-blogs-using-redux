import React from "react";
import { BiListPlus } from "react-icons/bi";
// import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { filterByTag } from "../redux/actions/filterActions";

const BlogCard = ({ blog }) => {
    // const dispatch = useDispatch();
    // console.log(product)
    console.log(blog.title)
    const dispatch = useDispatch()
    const { pathname } = useLocation();
    return (
        <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>
            {pathname.includes("cart") && (
                <div className='rounded-full grid place-items-center absolute top-2 right-2 bg-indigo-500 text-white h-8 w-8 font-bold '>
                    <p> {blog.quantity} </p>
                </div>
            )}
            <h1 className='font-bold text-xl my-4 text-center'>{blog.title}</h1>
            <p className='text-center  mb-3'>Description: {blog.description}</p>
            <p className='text-center  mb-3'>Date: {blog.date_year} - {blog.date_month} - {blog.date_day} </p>
            <p className='text-center  mb-3'>Source: {blog.source}</p>
            <div className=' flex-1'>
                <ul className='space-y-2'>
                    {blog.tags.map((tag) => {
                        return (
                            <button
                                onClick={() => dispatch(filterByTag(tag))}
                                className='bg-indigo-500 rounded-full py-1 px-4 flex-1 text-white text-bold mr-6'
                            >
                                {tag}
                            </button>
                        );
                    })}
                </ul>
            </div>
            <div className='flex gap-2 mt-5'>
                {pathname.includes("cart") && (
                    <button

                        className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
                    >
                        Add to cart
                    </button>
                )}

                {pathname.includes("cart") && (
                    <button
                        title='Add to wishlist'
                        className='bg-indigo-500  py-1 px-2 rounded-full'
                    >
                        <BiListPlus className='text-white' />
                    </button>
                )}
                {pathname.includes("cart") && (
                    <button
                        title='Remove'
                        className='flex justify-between px-3 bg-red-500 text-white p-1 rounded-full flex-1'
                    >
                        <p>Remove</p>
                        <MdDeleteForever size='25' />
                    </button>
                )}
            </div>
        </div>
    );
};

export default BlogCard;
