import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import addProductData from "../../redux/thunk/products/addProductData";
import addBlogData from "../../thunk/blogs/addBlogData";

const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const submit = (data) => {
        const blog = {
            title: data.title,
            description: data.description,
            source: data.source,

            date_year: data.year,
            date_month: data.month,
            date_day: data.date,
            tags: [
                data.tag1,
                data.tag2,
                data.tag3,
                data.tag4,
            ],
            spec: [],
        };
        console.log(blog)
        dispatch(addBlogData(blog))
    };

    return (
        <div className='flex justify-center items-center h-full '>
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='title'>
                        Blog Title
                    </label>
                    <input type='text' id='title' {...register("title")} />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='description'>
                        Description
                    </label>
                    <input type='text' name='description' id='description' {...register("description")} />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='source'>
                        Source
                    </label>
                    <input type='text' name='source' id='source' {...register("source")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='year'>
                        Year
                    </label>
                    <input type='number' name='year' id='year' {...register("year")} />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='month'>
                        Month
                    </label>
                    <input type='number' name='month' id='month' {...register("month")} />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='date'>
                        date
                    </label>
                    <input type='number' name='date' id='date' {...register("date")} />
                </div>


                <div className='flex flex-col w-full max-w-xs'></div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='tag1'>
                        Tags 1
                    </label>
                    <input
                        type='text'
                        name='tag1'
                        id='tag1'
                        {...register("tag1")}
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='tag2'>
                        Tag 2
                    </label>
                    <input
                        type='text'
                        name='tag2'
                        id='tag2'
                        {...register("tag2")}
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='tag3'>
                        Tag 3
                    </label>
                    <input
                        type='text'
                        name='tag3'
                        id='tag3'
                        {...register("tag3")}
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='tag4'>
                        Tag 4
                    </label>
                    <input
                        type='text'
                        name='tag4'
                        id='keyFeatag4ture4'
                        {...register("tag4")}
                    />
                </div>

                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;
