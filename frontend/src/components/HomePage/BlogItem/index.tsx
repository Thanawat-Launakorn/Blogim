import React from 'react'
import blogItem from '../../../models/Iblog'
type BlogProps = {
    title: string,
    author: string,
    date: any,
    image?: string,

}
function Blog({
    title,
    author,
    date,
    image }
    : BlogProps) {
    const useStyle = {
        height: '4rem'
    }

    return (
        <div className='w-full flex justify-between  p-3 mb-4 cursor-pointer shadow-md hover:shadow-lg' >
            <div className='flex flex-col'>
                <h1 className='text-blue-700  font-bold text-xl tracking-wide '>
                    {title}
                </h1>
                <h2 className='text-gray-500  font-medium text-md tracking-normal mb-1'>
                    Written by {author}
                </h2>
                <p className='text-green-600 font-normal text-sm tracking-normal'>
                    {date}
                </p>
            </div>
            <div className='bg-blue-700 p-1 rounded-md' style={useStyle}>
                <img
                    src={`${image}`}
                    alt="image-profile"
                    className='object-cover h-10 w-10 image' />
            </div>
        </div>
    )
}

export default Blog