import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { findABlog } from "../../redux/actions/blogActions";
import deleteBlog from "../../thunk/blogs/deleteBlog";
import loadBlogsData from "../../thunk/blogs/fetchBlogs";
import { BiEdit } from "react-icons/bi";
// import deleteProduct from "../../redux/thunk/products/deleteProduct";

// import loadProductData from "../../redux/thunk/products/fetchProducts";

const BlogList = () => {
    const blogs = useSelector(state => state.blog.blogs)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadBlogsData())
    }, [dispatch]);

    return (
        <div class='flex flex-col justify-center items-center h-full w-full '>
            <div class='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
                <header class='px-5 py-4 border-b border-gray-100'>
                    <div class='font-semibold text-gray-800'>Blogs</div>
                </header>

                <div class='overflow-x-auto p-3'>
                    <table class='table-auto w-full'>
                        <thead class='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
                            <tr>
                                <th></th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Title</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Source</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Year</div>
                                </th>
                                <th colSpan={2} class='p-2'>
                                    <div class='font-semibold text-center'>Actions</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody class='text-sm divide-y divide-gray-100'>
                            {blogs.map(({ title, description, source, date_year, _id }) => (
                                <tr>
                                    <td class='p-2'>
                                        <input type='checkbox' class='w-5 h-5 text-orange-400 border-orange-400 active:border-none' value='id-1' />
                                    </td>
                                    <td class='p-2'>
                                        <div class='font-medium text-gray-800'>{title}</div>
                                    </td>
                                    <td class='p-2'>
                                        <div class='text-left capitalize'>{source}</div>
                                    </td>

                                    <td class='p-2'>
                                        <div class='text-left font-medium text-orange-500'>
                                            {date_year}
                                        </div>
                                    </td>
                                    <td class='p-2'>
                                        <div class='flex justify-center'>
                                            <button onClick={() => dispatch(deleteBlog(_id))}>
                                                <svg
                                                    class='w-8 h-8 hover:text-orange-600 rounded hover:bg-gray-100 p-1'
                                                    fill='none'
                                                    stroke='currentColor'
                                                    viewBox='0 0 24 24'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        stroke-linecap='round'
                                                        stroke-linejoin='round'
                                                        stroke-width='2'
                                                        d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    <td class='p-2'>
                                        <div class='flex justify-center'>
                                            <Link to='update-blog' onClick={() => dispatch(findABlog(_id))}>
                                                <BiEdit className="text-2xl hover:text-orange-600 w-8 h-8  rounded hover:bg-gray-100 p-1"></BiEdit>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        // </section>
    );
};

export default BlogList;
