import React from 'react'
import imageItem from '../../../models/Iimage'

export default function Image({
    author,
    description,
    image,
    title
}: imageItem) {
    return (

        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
        </div>


    )
}