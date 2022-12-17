import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";
import { toggleFirstUpload, toggleLastUpload } from "../../redux/actions/filterActions";
import loadBlogsData from "../../thunk/blogs/fetchBlogs";

const Home = () => {
    // const [blogs, setBlogs] = useState([]);
    const dispatch = useDispatch()

    const filter = useSelector(state => state.filter.filter)
    const blogs = useSelector(state => state.blog.blogs)
    console.log(blogs)
    const { first_upload, last_upload, tags } = filter;
    useEffect(() => {
        dispatch(loadBlogsData())
    }, [dispatch]);
    console.log(first_upload, last_upload)
    let content;
    if (blogs.length) {
        content = blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />

        ))
    }
    // if (first_upload && blogs.length) {
    //     const similarDate = blogs.sort(a, b => {
    //         if (a.date_year > b.date_year && a.date_month > b.date_month && a.date_day > b.date_day) {
    //             return
    //         }
    //     })
    //     console.log(similarDate)
    // }
    // if (last_upload && blogs.length) {
    //     content = blogs.sort((a, b) => b.date_year - a.date_year).map((product) => (
    //         <BlogCard key={product.model} product={product} />
    //     ))
    // }
    if (blogs.length && tags.length) {
        content = blogs.filter(blog => {
            if (tags.length) {
                for (let tag of tags) {
                    return blog.tags.includes(tag)
                }
            }
            return blog
        }).map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
        ))
    }
    const activeClass = "text-white  bg-indigo-500 border-white";

    return (
        <div className='max-w-7xl gap-14 mx-auto my-10'>
            <div className='mb-10 flex justify-end gap-5'>
                <p
                    className={`border px-3 py-2 rounded-full font-semibold ${activeClass} `}
                >
                    Sort BY:
                </p>
                <button onClick={() => dispatch(toggleFirstUpload())} className={`border px-3 py-2 rounded-full font-semibold`}>
                    First Upload
                </button>
                <button onClick={() => dispatch(toggleLastUpload())}
                    className={`border px-3 py-2 rounded-full font-semibold`}>
                    Last Upload
                </button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-14'>
                {content}
            </div>
        </div>
    );
};

export default Home;
