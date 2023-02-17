import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { PropagateLoader } from 'react-spinners';
import { blogItem } from '../../../backend/models/blog';
export default function BlogPage({ idBlog }: any) {

    const [blog, setBlog] = useState<blogItem[]>([])
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const useStyleBody = {
        backgroundColor: '#DCFBFF'
    }
    const useStyleImage = {
        width: '110px',
        height: '140px'
    }

    useEffect(
        () => {
            axios.get(`http://localhost:3000/api/blog/get/${idBlog}`).then((res) => setBlog(res.data.data))
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 3000)

        }, [])

    function deleteBlog() {
        axios.delete(`http://localhost:3000/api/blog/delete/${idBlog}`)
        navigate('/')
    }

    return (
        <>
            {loading ? <PropagateLoader color={'blue'} loading={loading} className='w-full text-center h-10 mt-10' /> :
                <div className='mx-auto w-full max-w-2xl  my-10'>
                    {blog.map(item => {
                        return (
                            <div key={item.id}>
                                <h2 className='text-blue-700 text-7xl font-bold tracking-wide'>
                                    {item.title}
                                </h2>
                                <div className='w-full flex justify-between'>
                                    <div className='relative'>
                                        <p className='text-gray-500 text-2xl font-semibold pt-4'>
                                            written by {item.author}
                                        </p>
                                        <p className='absolute bottom-0 left-0 text-blue-700 font-thin'>{item.date}</p>
                                    </div>

                                    <div className='bg-blue-700 relative rounded' style={useStyleImage}>
                                        <img src={item.image} alt="img"
                                            className='object-cover absolute top-3 px-1'
                                        // style={useStyleImage}
                                        />
                                    </div>
                                </div>
                                <hr className='bg-blue-700 h-1 mt-3' />
                                <div className='w-full p-4 text-sm font-thin tracking-tight shadow-lg my-5' style={useStyleBody}>
                                    {item.body}
                                </div>
                                <button
                                    onClick={deleteBlog}
                                    className='text-white text-semibold text-md bg-blue-700 hover:bg-blue-500 shadow rounded-lg p-2 mt-5'
                                >delete</button>
                            </div>
                        )
                    })}
                </div >}
        </>

    )
}
