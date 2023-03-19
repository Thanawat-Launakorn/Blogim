import React from 'react'
import imageItem from '../../../models/Iimage'
import './imageitem.css'
export default function Image({
    author,
    description,
    image,
    title
}: imageItem) {
    return (
        <div className='block shadow my-5'>
            <div className='px-2 py-1'>
                <img src={image} alt="image-item" width={200} height='100' className='rounded-lg imageitem' />
                <div className='my-2 text-sm'>
                    <b>Title: </b><span>{title}</span>
                </div>
                <div className='my-2 text-sm'>
                    <b>Photo: </b><span>{author}</span>
                </div>
                <div className='my-2 text-sm'>
                    <b>Description: </b><span>{description}</span>
                </div>
            </div>

        </div>
    )
} 