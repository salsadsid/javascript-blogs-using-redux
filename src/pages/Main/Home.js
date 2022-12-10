import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((data) => setBlogs(data.data));
    }, []);

    const activeClass = "text-white  bg-indigo-500 border-white";

    return (
        <div className='max-w-7xl gap-14 mx-auto my-10'>
            <div className='mb-10 flex justify-end gap-5'>
                <button
                    className={`border px-3 py-2 rounded-full font-semibold ${activeClass} `}
                >
                    In Stock
                </button>
                <button className={`border px-3 py-2 rounded-full font-semibold`}>
                    AMD
                </button>
                <button className={`border px-3 py-2 rounded-full font-semibold`}>
                    Intel
                </button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-14'>
                {blogs.map((product) => (
                    <BlogCard key={product.model} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
